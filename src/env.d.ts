/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_PORTAL_URL?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly SMTP_FROM?: string;
  readonly SMTP_HOST?: string;
  readonly SMTP_PASS?: string;
  readonly SMTP_PORT?: string;
  readonly SMTP_SECURE?: string;
  readonly SMTP_TO?: string;
  readonly SMTP_USER?: string;
  readonly TELEGRAM_BOT_TOKEN?: string;
  readonly TELEGRAM_CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

