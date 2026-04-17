import type { Locale } from "@/data/locales";

export const siteOrigin = "https://altera.ee";
export const defaultOgImage = `${siteOrigin}/images/hero/altera-hero.png`;

type RouteGroup = {
  key: string;
  paths: Record<Locale, string>;
  aliases?: string[];
};

const routeGroups: RouteGroup[] = [
  {
    key: "home",
    paths: {
      et: "/",
      en: "/en/",
      ru: "/ru/",
    },
  },
  {
    key: "prices",
    paths: {
      et: "/hinnad/",
      en: "/en/prices/",
      ru: "/ru/ceny/",
    },
    aliases: ["/en/hinnad/", "/ru/hinnad/"],
  },
  {
    key: "categories",
    paths: {
      et: "/kategooriad/",
      en: "/en/categories/",
      ru: "/ru/kategorii/",
    },
  },
  {
    key: "faq",
    paths: {
      et: "/kkk/",
      en: "/en/faq/",
      ru: "/ru/faq/",
    },
  },
  {
    key: "about",
    paths: {
      et: "/meist/",
      en: "/en/meist/",
      ru: "/ru/meist/",
    },
  },
  {
    key: "contact",
    paths: {
      et: "/kontakt/",
      en: "/en/contacts/",
      ru: "/ru/kontakty/",
    },
    aliases: ["/en/kontakt/", "/ru/kontakt/"],
  },
  {
    key: "first-aid",
    paths: {
      et: "/esmaabi-kursus-tallinnas/",
      en: "/en/esmaabi-kursus-tallinnas/",
      ru: "/ru/esmaabi-kursus-tallinnas/",
    },
  },
  {
    key: "category-a1",
    paths: {
      et: "/a1-kategooria-tallinnas/",
      en: "/en/a1-kategooria-tallinnas/",
      ru: "/ru/a1-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/a1/", "/en/categories/a1/", "/ru/kategorii/a1/"],
  },
  {
    key: "category-a2",
    paths: {
      et: "/a2-kategooria-tallinnas/",
      en: "/en/a2-kategooria-tallinnas/",
      ru: "/ru/a2-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/a2/", "/en/categories/a2/", "/ru/kategorii/a2/"],
  },
  {
    key: "category-a",
    paths: {
      et: "/a-kategooria-tallinnas/",
      en: "/en/a-kategooria-tallinnas/",
      ru: "/ru/a-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/a/", "/en/categories/a/", "/ru/kategorii/a/"],
  },
  {
    key: "category-am",
    paths: {
      et: "/am-kategooria-tallinnas/",
      en: "/en/am-kategooria-tallinnas/",
      ru: "/ru/am-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/am/", "/en/categories/am/", "/ru/kategorii/am/"],
  },
  {
    key: "category-b",
    paths: {
      et: "/b-kategooria-tallinnas/",
      en: "/en/b-kategooria-tallinnas/",
      ru: "/ru/b-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/b/", "/en/categories/b/", "/ru/kategorii/b/"],
  },
  {
    key: "category-be",
    paths: {
      et: "/be-kategooria-tallinnas/",
      en: "/en/be-kategooria-tallinnas/",
      ru: "/ru/be-kategooria-tallinnas/",
    },
    aliases: ["/kategooriad/be/", "/en/categories/be/", "/ru/kategorii/be/"],
  },
];

export const canonicalRoutes = routeGroups.flatMap((group) => Object.values(group.paths));

const normalizePath = (path: string) => {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
};

const findGroup = (path: string) => {
  const normalizedPath = normalizePath(path);
  return routeGroups.find((group) => {
    const canonicalPaths = Object.values(group.paths).map(normalizePath);
    const aliases = (group.aliases ?? []).map(normalizePath);
    return canonicalPaths.includes(normalizedPath) || aliases.includes(normalizedPath);
  });
};

export const getCanonicalPath = (path: string) => {
  const normalizedPath = normalizePath(path);
  const group = findGroup(normalizedPath);

  if (!group) return normalizedPath;

  const canonicalPath = Object.values(group.paths).find((candidate) => candidate === normalizedPath);
  if (canonicalPath) return canonicalPath;

  if (normalizedPath.startsWith("/en/")) return group.paths.en;
  if (normalizedPath.startsWith("/ru/")) return group.paths.ru;
  return group.paths.et;
};

export const isAliasPath = (path: string) => {
  const normalizedPath = normalizePath(path);
  return getCanonicalPath(normalizedPath) !== normalizedPath;
};

export const getLocalizedPath = (path: string, locale: Locale) => {
  const group = findGroup(path);
  if (group) return group.paths[locale];
  return locale === "et" ? "/" : `/${locale}/`;
};

export const getAlternateLanguageLinks = (path: string) => {
  const group = findGroup(path);
  if (!group) return null;

  return {
    et: group.paths.et,
    en: group.paths.en,
    ru: group.paths.ru,
    "x-default": group.paths.et,
  };
};

export const getCanonicalUrl = (path: string) => new URL(getCanonicalPath(path), siteOrigin).toString();

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["DrivingSchool", "LocalBusiness"],
  name: "Altera Autokool",
  url: siteOrigin,
  telephone: "+3725114740",
  email: "info@altera.ee",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Narva mnt 4-204",
    addressLocality: "Tallinn",
    addressCountry: "EE",
  },
  image: defaultOgImage,
  areaServed: "Tallinn",
  inLanguage: ["et", "ru", "en"],
});

type FaqItem = {
  question: string;
  answer: string;
};

export const getFaqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const getContactPageSchema = (urlPath: string, locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: new URL(urlPath, siteOrigin).toString(),
  inLanguage: locale,
  about: {
    "@type": "DrivingSchool",
    name: "Altera Autokool",
    telephone: "+3725114740",
    email: "info@altera.ee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Narva mnt 4-204",
      addressLocality: "Tallinn",
      addressCountry: "EE",
    },
  },
});

type CourseSchemaInput = {
  description: string;
  name: string;
  price: string;
  urlPath: string;
};

export const getCourseSchema = ({ description, name, price, urlPath }: CourseSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name,
  description,
  provider: {
    "@type": "DrivingSchool",
    name: "Altera Autokool",
    url: siteOrigin,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "Altera Autokool",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Narva mnt 4-204",
        addressLocality: "Tallinn",
        addressCountry: "EE",
      },
    },
  },
  offers: {
    "@type": "Offer",
    price,
    priceCurrency: "EUR",
    url: new URL(urlPath, siteOrigin).toString(),
  },
});
