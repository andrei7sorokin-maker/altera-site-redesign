import type { APIRoute } from "astro";

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

export const POST: APIRoute = async ({ request }) => {
  const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return json(500, { ok: false, message: "Telegram is not configured." });
  }

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

  const origin = request.headers.get("origin") || import.meta.env.PUBLIC_SITE_URL || "https://altera.ee";
  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildMessage(payload, origin),
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
    return json(502, { ok: false, message });
  }

  return json(200, { ok: true });
};
