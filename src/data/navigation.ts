import type { Locale } from "@/data/locales";

type NavItem = {
  label: string;
  href: string;
};

export const navigation: Record<Locale, NavItem[]> = {
  et: [
    { label: "Kategooriad", href: "/kategooriad/b/" },
    { label: "Hinnad", href: "/hinnad/" },
    { label: "KKK", href: "/kkk/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  ru: [
    { label: "Категории", href: "/ru/kategorii/b/" },
    { label: "Цены", href: "/ru/ceny/" },
    { label: "FAQ", href: "/ru/faq/" },
    { label: "Контакты", href: "/ru/kontakty/" },
  ],
  en: [
    { label: "Categories", href: "/en/categories/b/" },
    { label: "Prices", href: "/en/prices/" },
    { label: "FAQ", href: "/en/faq/" },
    { label: "Contacts", href: "/en/contacts/" },
  ],
};

