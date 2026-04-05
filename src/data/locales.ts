export const locales = ["et", "ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "et";

export const localeLabels: Record<Locale, string> = {
  et: "EST",
  ru: "RU",
  en: "ENG",
};

