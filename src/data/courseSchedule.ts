import type { CategoryKey } from "@/data/categories";
import type { Locale } from "@/data/locales";

export const COURSE_WEEK_RULES = [
  { occurrence: 1, categories: ["am", "b"] },
  { occurrence: 2, categories: ["a1", "a2"] },
  { occurrence: 3, categories: ["a"] },
  { occurrence: 4, categories: ["be"] },
] as const satisfies ReadonlyArray<{ occurrence: number; categories: readonly CategoryKey[] }>;

const scheduleCategoryOrder: CategoryKey[] = ["b", "a", "be", "am", "a1", "a2"];

const monthNames: Record<Locale, string[]> = {
  et: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
  ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

const dateMonthNames: Record<Locale, string[]> = {
  et: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
  ru: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export const scheduleCopy = {
  et: {
    eyebrow: "Tunniplaan",
    date: "Algus",
    format: "Formaat",
    language: "Keel",
    register: "Registreeru",
    theoryPractice: "Teooria + praktika",
    eveningPractice: "Õhtu + praktika",
    fastTrack: "Kiirkursus",
  },
  ru: {
    eyebrow: "Расписание",
    date: "Старт",
    format: "Формат",
    language: "Язык",
    register: "Записаться",
    theoryPractice: "Теория + практика",
    eveningPractice: "Вечер + практика",
    fastTrack: "Быстрый курс",
  },
  en: {
    eyebrow: "Schedule",
    date: "Start",
    format: "Format",
    language: "Language",
    register: "Register",
    theoryPractice: "Theory + practice",
    eveningPractice: "Evening + practice",
    fastTrack: "Fast-track",
  },
} as const;

const getTallinnYearMonth = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Tallinn",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    monthIndex: Number(parts.find((part) => part.type === "month")?.value) - 1,
  };
};

const getNthWednesday = (year: number, monthIndex: number, occurrence: number) => {
  const firstWeekday = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay();
  return 1 + ((3 - firstWeekday + 7) % 7) + (occurrence - 1) * 7;
};

const formatDate = (day: number, monthIndex: number, locale: Locale) => {
  if (locale === "et") return `${day}. ${dateMonthNames.et[monthIndex]}`;
  if (locale === "ru") return `${day} ${dateMonthNames.ru[monthIndex]}`;
  return `${day} ${dateMonthNames.en[monthIndex]}`;
};

const getCategoryFormat = (category: CategoryKey, locale: Locale) => {
  const copy = scheduleCopy[locale];
  if (category === "b") return copy.eveningPractice;
  if (category === "be") return copy.fastTrack;
  return copy.theoryPractice;
};

export const getRollingCourseSchedule = (locale: Locale, referenceDate = new Date()) => {
  const current = getTallinnYearMonth(referenceDate);
  const slots = ["previous", "current", "next"] as const;

  return [-1, 0, 1].map((offset, index) => {
    const monthDate = new Date(Date.UTC(current.year, current.monthIndex + offset, 1));
    const year = monthDate.getUTCFullYear();
    const monthIndex = monthDate.getUTCMonth();
    const rows = COURSE_WEEK_RULES.flatMap((rule) => {
      const day = getNthWednesday(year, monthIndex, rule.occurrence);
      return rule.categories.map((category) => ({
        key: category,
        category: category.toUpperCase(),
        date: formatDate(day, monthIndex, locale),
        format: getCategoryFormat(category, locale),
        language: "EST / RU / ENG",
      }));
    }).sort((left, right) => scheduleCategoryOrder.indexOf(left.key) - scheduleCategoryOrder.indexOf(right.key));

    return {
      slot: slots[index],
      monthLabel: `${monthNames[locale][monthIndex]} ${year}`,
      rows,
    };
  });
};
