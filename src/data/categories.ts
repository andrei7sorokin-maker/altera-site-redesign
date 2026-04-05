import type { Locale } from "@/data/locales";

export type CategoryKey = "am" | "a" | "b" | "be";

export type CategoryCard = {
  key: CategoryKey;
  title: string;
  subtitle: string;
  href: string;
  price: string;
  lessons: string;
  age: string;
  image: string;
  excerpt: string;
};

export const categoryCards: Record<Locale, CategoryCard[]> = {
  et: [
    { key: "am", title: "AM", subtitle: "Mopedi juhiload", href: "/kategooriad/am/", price: "690 €", lessons: "24h teooria / 12h praktika", age: "Alates 14 a", image: "/images/categories/am/am.png", excerpt: "Mopeed kuni 50 cm³ ja kuni 45 km/h. Kool annab õppe ajaks kaitsevarustuse." },
    { key: "a", title: "A", subtitle: "Mootorratta juhiload", href: "/kategooriad/a/", price: "590 €", lessons: "10h teooria / 10h praktika", age: "Alates 24 a", image: "/images/categories/a/a.png", excerpt: "Üle 35 kW mootorrattad ja kolmerattalised sõidukid. Vajalik kehtiv juhiluba." },
    { key: "b", title: "B", subtitle: "Sõiduauto juhiload", href: "/kategooriad/b/", price: "910 €", lessons: "29h teooria / 28h praktika", age: "Alates 15,5 a", image: "/images/categories/b/b.png", excerpt: "Kõige populaarsem kursus kuni 3500 kg sõidukitele. Õpe Toyota Corolla, Auris ja Verso autodel." },
    { key: "be", title: "BE", subtitle: "Sõiduauto haagisega", href: "/kategooriad/be/", price: "350 €", lessons: "4h teooria / 4h praktika", age: "B-kategooria olemasolu", image: "/images/categories/be/be.png", excerpt: "B-kategooria auto koos haagisega üle 750 kg. Sobib ka paadihaagise jaoks." },
  ],
  ru: [
    { key: "am", title: "AM", subtitle: "Права на мопед", href: "/ru/kategorii/am/", price: "690 €", lessons: "24ч теория / 12ч практика", age: "С 14 лет", image: "/images/categories/am/am.png", excerpt: "Мопед до 50 см³ и до 45 км/ч. На время обучения школа выдает защитную экипировку." },
    { key: "a", title: "A", subtitle: "Права на мотоцикл", href: "/ru/kategorii/a/", price: "590 €", lessons: "10ч теория / 10ч практика", age: "С 24 лет", image: "/images/categories/a/a.png", excerpt: "Мотоциклы мощнее 35 кВт. Для регистрации нужна действующая лицензия любой категории." },
    { key: "b", title: "B", subtitle: "Права на легковой автомобиль", href: "/ru/kategorii/b/", price: "910 €", lessons: "29ч теория / 28ч практика", age: "С 15,5 лет", image: "/images/categories/b/b.png", excerpt: "Самый востребованный курс для легкового автомобиля до 3500 кг. Практика проходит на Toyota Corolla, Auris и Verso." },
    { key: "be", title: "BE", subtitle: "Легковой автомобиль с прицепом", href: "/ru/kategorii/be/", price: "350 €", lessons: "4ч теория / 4ч практика", age: "Нужна категория B", image: "/images/categories/be/be.png", excerpt: "Для автомобиля с прицепом тяжелее 750 кг, включая прицеп для лодки." },
  ],
  en: [
    { key: "am", title: "AM", subtitle: "Moped licence", href: "/en/categories/am/", price: "690 €", lessons: "24h theory / 12h practice", age: "From 14 years", image: "/images/categories/am/am.png", excerpt: "Moped up to 50 cm³ and up to 45 km/h. Protective gear is provided during training." },
    { key: "a", title: "A", subtitle: "Motorcycle licence", href: "/en/categories/a/", price: "590 €", lessons: "10h theory / 10h practice", age: "From 24 years", image: "/images/categories/a/a.png", excerpt: "Motorcycles over 35 kW. A valid driving licence in any category is required." },
    { key: "b", title: "B", subtitle: "Passenger car licence", href: "/en/categories/b/", price: "910 €", lessons: "29h theory / 28h practice", age: "From 15.5 years", image: "/images/categories/b/b.png", excerpt: "The most popular course for passenger cars up to 3500 kg. Training uses Toyota Corolla, Auris and Verso vehicles." },
    { key: "be", title: "BE", subtitle: "Car with trailer", href: "/en/categories/be/", price: "350 €", lessons: "4h theory / 4h practice", age: "B licence required", image: "/images/categories/be/be.png", excerpt: "For B-category cars with a trailer over 750 kg, including boat trailers." },
  ],
};
