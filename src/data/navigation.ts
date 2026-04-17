import type { Locale } from "@/data/locales";

type NavItem = {
  label: string;
  href: string;
};

export const navigation: Record<Locale, NavItem[]> = {
  et: [
    { label: "Kategooriad", href: "/kategooriad/" },
    { label: "Hinnad", href: "/hinnad/" },
    { label: "KKK", href: "/kkk/" },
    { label: "Meist", href: "/meist/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  ru: [
    { label: "Категории", href: "/ru/kategorii/" },
    { label: "Цены", href: "/ru/ceny/" },
    { label: "FAQ", href: "/ru/faq/" },
    { label: "О нас", href: "/ru/meist/" },
    { label: "Контакты", href: "/ru/kontakty/" },
  ],
  en: [
    { label: "Categories", href: "/en/categories/" },
    { label: "Prices", href: "/en/prices/" },
    { label: "FAQ", href: "/en/faq/" },
    { label: "About", href: "/en/meist/" },
    { label: "Contacts", href: "/en/contacts/" },
  ],
};
