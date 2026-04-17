import type { Locale } from "@/data/locales";

export type CategoryKey = "am" | "a1" | "a2" | "a" | "b" | "be";

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
    { key: "am", title: "AM", subtitle: "Mopedi juhiload", href: "/am-kategooria-tallinnas/", price: "690 €", lessons: "24h teooria / 12h praktika", age: "Alates 14 a", image: "/images/categories/am/am-blue.png", excerpt: "Mopeed kuni 50 cm³ ja kuni 45 km/h. Kool annab õppe ajaks kaitsevarustuse." },
    { key: "b", title: "B", subtitle: "Sõiduauto juhiload", href: "/b-kategooria-tallinnas/", price: "1090 €", lessons: "29h teooria / 28h praktika", age: "Alates 15,5 a", image: "/images/categories/b/b.png", excerpt: "Kõige populaarsem kursus kuni 3500 kg sõidukitele. Õpe Toyota Corolla, Auris ja Verso autodel." },
    { key: "a", title: "A", subtitle: "Täiskategooria mootorratas", href: "/a-kategooria-tallinnas/", price: "590 €", lessons: "10h teooria / 10h praktika", age: "Alates 24 a", image: "/images/categories/a/a-black-green.png", excerpt: "Üle 35 kW mootorrattad ja kolmerattalised sõidukid. Vajalik kehtiv juhiluba." },
    { key: "a1", title: "A1", subtitle: "Kerge mootorratas", href: "/a1-kategooria-tallinnas/", price: "590 €", lessons: "10h teooria / 10h praktika", age: "Alates 16 a", image: "/images/categories/a/a1-red.png", excerpt: "Sobib 125 cm³ klassi mootorrattale ja esimeseks sammuks motomaailmas selge õppeplaaniga." },
    { key: "a2", title: "A2", subtitle: "Mootorratas kuni 35 kW", href: "/a2-kategooria-tallinnas/", price: "590 €", lessons: "10h teooria / 10h praktika", age: "Alates 18 a", image: "/images/categories/a/a2-blue.png", excerpt: "Hea valik juhile, kes soovib liikuda võimsama mootorratta peale kontrollitud ja turvalise ettevalmistusega." },
    { key: "be", title: "BE", subtitle: "Sõiduauto haagisega", href: "/be-kategooria-tallinnas/", price: "350 €", lessons: "4h teooria / 4h praktika", age: "B-kategooria olemasolu", image: "/images/categories/be/be.png", excerpt: "B-kategooria auto koos haagisega üle 750 kg. Sobib ka paadihaagise jaoks." },
  ],
  ru: [
    { key: "am", title: "AM", subtitle: "Права на мопед", href: "/ru/am-kategooria-tallinnas/", price: "690 €", lessons: "24ч теория / 12ч практика", age: "С 14 лет", image: "/images/categories/am/am-blue.png", excerpt: "Мопед до 50 см³ и до 45 км/ч. На время обучения школа выдает защитную экипировку." },
    { key: "b", title: "B", subtitle: "Права на легковой автомобиль", href: "/ru/b-kategooria-tallinnas/", price: "1090 €", lessons: "29ч теория / 28ч практика", age: "С 15,5 лет", image: "/images/categories/b/b.png", excerpt: "Самый востребованный курс для легкового автомобиля до 3500 кг. Практика проходит на Toyota Corolla, Auris и Verso." },
    { key: "a", title: "A", subtitle: "Полная категория мотоцикла", href: "/ru/a-kategooria-tallinnas/", price: "590 €", lessons: "10ч теория / 10ч практика", age: "С 24 лет", image: "/images/categories/a/a-black-green.png", excerpt: "Мотоциклы мощнее 35 кВт. Для регистрации нужна действующая лицензия любой категории." },
    { key: "a1", title: "A1", subtitle: "Права на лёгкий мотоцикл", href: "/ru/a1-kategooria-tallinnas/", price: "590 €", lessons: "10ч теория / 10ч практика", age: "С 16 лет", image: "/images/categories/a/a1-red.png", excerpt: "Подходит для мотоциклов до 125 см³ и даёт спокойный вход в обучение с понятной программой." },
    { key: "a2", title: "A2", subtitle: "Права на мотоцикл до 35 кВт", href: "/ru/a2-kategooria-tallinnas/", price: "590 €", lessons: "10ч теория / 10ч практика", age: "С 18 лет", image: "/images/categories/a/a2-blue.png", excerpt: "Хороший выбор для тех, кто хочет перейти на более мощный мотоцикл с уверенной практической подготовкой." },
    { key: "be", title: "BE", subtitle: "Легковой автомобиль с прицепом", href: "/ru/be-kategooria-tallinnas/", price: "350 €", lessons: "4ч теория / 4ч практика", age: "Нужна категория B", image: "/images/categories/be/be.png", excerpt: "Для автомобиля с прицепом тяжелее 750 кг, включая прицеп для лодки." },
  ],
  en: [
    { key: "am", title: "AM", subtitle: "Moped licence", href: "/en/am-kategooria-tallinnas/", price: "690 €", lessons: "24h theory / 12h practice", age: "From 14 years", image: "/images/categories/am/am-blue.png", excerpt: "Moped up to 50 cm³ and up to 45 km/h. Protective gear is provided during training." },
    { key: "b", title: "B", subtitle: "Passenger car licence", href: "/en/b-kategooria-tallinnas/", price: "1090 €", lessons: "29h theory / 28h practice", age: "From 15.5 years", image: "/images/categories/b/b.png", excerpt: "The most popular course for passenger cars up to 3500 kg. Training uses Toyota Corolla, Auris and Verso vehicles." },
    { key: "a", title: "A", subtitle: "Full motorcycle licence", href: "/en/a-kategooria-tallinnas/", price: "590 €", lessons: "10h theory / 10h practice", age: "From 24 years", image: "/images/categories/a/a-black-green.png", excerpt: "Motorcycles over 35 kW. A valid driving licence in any category is required." },
    { key: "a1", title: "A1", subtitle: "Light motorcycle licence", href: "/en/a1-kategooria-tallinnas/", price: "590 €", lessons: "10h theory / 10h practice", age: "From 16 years", image: "/images/categories/a/a1-red.png", excerpt: "A clear starting point for 125 cc motorcycles and a confident first step into motorcycle training." },
    { key: "a2", title: "A2", subtitle: "Motorcycle up to 35 kW", href: "/en/a2-kategooria-tallinnas/", price: "590 €", lessons: "10h theory / 10h practice", age: "From 18 years", image: "/images/categories/a/a2-blue.png", excerpt: "A good fit for riders moving toward a more powerful motorcycle with structured practical preparation." },
    { key: "be", title: "BE", subtitle: "Car with trailer", href: "/en/be-kategooria-tallinnas/", price: "350 €", lessons: "4h theory / 4h practice", age: "B licence required", image: "/images/categories/be/be.png", excerpt: "For B-category cars with a trailer over 750 kg, including boat trailers." },
  ],
};
