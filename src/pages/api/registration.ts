import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const requiredFields = ["fullName", "phone", "email", "category", "studyLanguage"] as const;
const allowedCategories = new Set(["AM", "A", "B", "BE"]);
const allowedStudyLanguages = new Set(["EST", "RU", "ENG"]);

type RegistrationPayload = {
  fullName: string;
  personalCode: string;
  phone: string;
  email: string;
  category: string;
  studyLanguage: string;
  courseStartDate: string;
  comment: string;
  sourcePath: string;
  locale: string;
};

const getString = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

const sanitizeTelegramDescription = (description: string) =>
  description.replace(/bot\d+:[A-Za-z0-9_-]+/g, "bot<hidden>");

const sanitizeSmtpDescription = (description: string) =>
  description
    .replace(/AUTH [A-Z0-9-]+/gi, "AUTH <hidden>")
    .replace(/username "[^"]+"/gi, 'username "<hidden>"');

const buildMessage = (payload: RegistrationPayload, origin: string) => {
  const lines = [
    "New driving school registration",
    "",
    `Full name: ${payload.fullName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Category: ${payload.category}`,
    `Study language: ${payload.studyLanguage}`,
  ];

  if (payload.personalCode) {
    lines.push(`Personal code: ${payload.personalCode}`);
  }

  if (payload.courseStartDate) {
    lines.push(`Course start date: ${payload.courseStartDate}`);
  }

  if (payload.comment) {
    lines.push(`Comment: ${payload.comment}`);
  }

  if (payload.sourcePath) {
    lines.push(`Page: ${origin}${payload.sourcePath}`);
  }

  if (payload.locale) {
    lines.push(`Locale: ${payload.locale}`);
  }

  lines.push(`Submitted at: ${new Date().toISOString()}`);

  return lines.join("\n");
};

const buildEmailHtml = (payload: RegistrationPayload, origin: string) => {
  const rows = [
    ["Full name", payload.fullName],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Category", payload.category],
    ["Study language", payload.studyLanguage],
    ["Personal code", payload.personalCode],
    ["Course start date", payload.courseStartDate],
    ["Comment", payload.comment],
    ["Page", payload.sourcePath ? `${origin}${payload.sourcePath}` : ""],
    ["Locale", payload.locale],
    ["Submitted at", new Date().toISOString()],
  ].filter(([, value]) => value);

  return `
    <h2>New driving school registration</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d1d5db">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><th align="left" style="background:#f3f4f6">${label}</th><td>${String(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;
};

const createSmtpTransport = () => {
  const host = import.meta.env.SMTP_HOST;
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number.parseInt(import.meta.env.SMTP_PORT || "465", 10);
  const secure = (import.meta.env.SMTP_SECURE || "true").toLowerCase() !== "false";

  return nodemailer.createTransport({
    host,
    port: Number.isFinite(port) ? port : 465,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;
  const smtpTransport = createSmtpTransport();
  const smtpTo = import.meta.env.SMTP_TO;

  const formData = await request.formData();

  if (getString(formData.get("company"))) {
    return json(200, { ok: true });
  }

  const payload: RegistrationPayload = {
    fullName: getString(formData.get("fullName")),
    personalCode: getString(formData.get("personalCode")),
    phone: getString(formData.get("phone")),
    email: getString(formData.get("email")),
    category: getString(formData.get("category")).toUpperCase(),
    studyLanguage: getString(formData.get("studyLanguage")).toUpperCase(),
    courseStartDate: getString(formData.get("courseStartDate")),
    comment: getString(formData.get("comment")),
    sourcePath: getString(formData.get("sourcePath")),
    locale: getString(formData.get("locale")),
  };

  const hasMissingField = requiredFields.some((field) => !payload[field]);
  const hasInvalidCategory = !allowedCategories.has(payload.category);
  const hasInvalidStudyLanguage = !allowedStudyLanguages.has(payload.studyLanguage);

  if (hasMissingField || hasInvalidCategory || hasInvalidStudyLanguage) {
    return json(400, { ok: false, message: "Invalid registration payload." });
  }

  if (!smtpTransport && !(botToken && chatId)) {
    return json(500, { ok: false, message: "No notification channel is configured." });
  }

  const origin = request.headers.get("origin") || import.meta.env.PUBLIC_SITE_URL || "https://altera.ee";
  const notificationText = buildMessage(payload, origin);
  const notificationErrors: string[] = [];
  let deliveredCount = 0;

  if (smtpTransport && smtpTo) {
    try {
      await smtpTransport.sendMail({
        from: import.meta.env.SMTP_FROM || import.meta.env.SMTP_USER,
        to: smtpTo,
        replyTo: payload.email,
        subject: `New registration: ${payload.fullName} (${payload.category})`,
        text: notificationText,
        html: buildEmailHtml(payload, origin),
      });
      deliveredCount += 1;
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? sanitizeSmtpDescription(error.message)
          : "SMTP request failed.";
      console.error("SMTP sendMail failed:", message);
      notificationErrors.push(`SMTP: ${message}`);
    }
  } else if (smtpTransport && !smtpTo) {
    notificationErrors.push("SMTP: SMTP_TO is not configured.");
  }

  if (botToken && chatId) {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: notificationText,
        disable_web_page_preview: true,
      }),
    });

    if (!telegramResponse.ok) {
      let message = "Telegram request failed.";

      try {
        const data = (await telegramResponse.json()) as { description?: string };

        if (typeof data.description === "string" && data.description.trim()) {
          message = sanitizeTelegramDescription(data.description.trim());
        }
      } catch {
        // Ignore invalid JSON and fall back to the default message.
      }

      console.error("Telegram sendMessage failed:", message);
      notificationErrors.push(`Telegram: ${message}`);
    } else {
      deliveredCount += 1;
    }
  }

  if (deliveredCount === 0) {
    return json(502, {
      ok: false,
      message: notificationErrors.join(" | ") || "No notification channel delivered the message.",
    });
  }

  return json(200, { ok: true });
};
