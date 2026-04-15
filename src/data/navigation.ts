import type { Locale } from "@/data/locales";

type NavItem = {
  label: string;
  href: string;
};

export const navigation: Record<Locale, NavItem[]> = {
  et: [
    { label: "Kategooriad", href: "/b-kategooria-tallinnas/" },
    { label: "Hinnad", href: "/hinnad/" },
    { label: "KKK", href: "/kkk/" },
    { label: "Meist", href: "/meist/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  ru: [
    { label: "Категории", href: "/ru/b-kategooria-tallinnas/" },
    { label: "Цены", href: "/ru/hinnad/" },
    { label: "FAQ", href: "/ru/faq/" },
    { label: "О нас", href: "/ru/meist/" },
    { label: "Контакты", href: "/ru/kontakt/" },
  ],
  en: [
    { label: "Categories", href: "/en/b-kategooria-tallinnas/" },
    { label: "Prices", href: "/en/hinnad/" },
    { label: "FAQ", href: "/en/faq/" },
    { label: "About", href: "/en/meist/" },
    { label: "Contacts", href: "/en/kontakt/" },
  ],
};
