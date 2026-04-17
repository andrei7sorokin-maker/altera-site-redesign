import type { Locale } from "@/data/locales";

export const localizedPricesContent: Record<Locale, any> = {
  et: {
    seoTitle: "Autokooli hinnad Tallinnas | B-kategooria 1090 € | Altera Autokool",
    seoDescription: "Altera Autokooli hinnad Tallinnas: B-kategooria 1090 €, A-, A1-, A2-, AM- ja BE-kategooria kursused, lisatunnid ja muu hinnainfo.",
    eyebrow: "Hinnad",
    title: "Autokooli hinnad Tallinnas",
    intro:
      "Enne kursusele registreerumist soovib enamik õppijaid näha peamist hinnainfot ühes kohas. Siin lehel on koos põhihinnad, lisateenused, üldine hinnainfo ning vastused sagedasematele küsimustele maksmise kohta.",
    coursesEyebrow: "Kursuste hinnad",
    coursesTitle: "Põhikursused kategooriate kaupa",
    courseCards: [
      { eyebrow: "AM", title: "Mopedi juhiload", price: "690 €", text: "24 teooriatundi, 12 praktikatundi, alates 14. eluaastast." },
      { eyebrow: "A1", title: "Kerge mootorratas", price: "590 €", text: "10 teooriatundi, 10 praktikatundi, alates 16. eluaastast." },
      { eyebrow: "A2", title: "Mootorratas kuni 35 kW", price: "590 €", text: "10 teooriatundi, 10 praktikatundi, alates 18. eluaastast." },
      { eyebrow: "A", title: "Täiskategooria mootorratas", price: "590 €", text: "10 teooriatundi, 10 praktikatundi, alates 24. eluaastast." },
      { eyebrow: "B", title: "Sõiduauto juhiload", price: "1090 €", text: "29 teooriatundi, 28 sõidutundi, autokooli teooriaeksam ja vajalikud lisakursused." },
      { eyebrow: "BE", title: "Sõiduauto haagisega", price: "350 €", text: "4 teooriatundi, 4 praktikatundi, vajalik B-kategooria juhiluba." },
    ],
    extrasSection: {
      eyebrow: "Lisateenused",
      title: "Täiendav info enne otsustamist",
      items: [
        "Lisatunnid: küsitakse vastavalt vajadusele ja valitud kategooriale",
        "Õppematerjalid: põhiinfo antakse registreerimise järel",
        "Makselahendus: täpsustatakse registreerimisel",
        "Muud tasud: riigilõivud ja välised kulud ei pruugi kuuluda kursuse hinna sisse",
      ],
    },
    includedSection: {
      eyebrow: "Mis kuulub hinna sisse",
      title: "Oluline läbipaistvus enne kursuse algust",
      text:
        "Hinna sees on tavaliselt kursuse põhiõpe vastavalt valitud kategooriale. Täpne koosseis sõltub kategooriast ja valitud paketist, kuid põhiinfo peaks olema enne alustamist arusaadav.",
    },
    faqSection: {
      eyebrow: "KKK",
      title: "Sagedased küsimused maksmise ja hindade kohta",
      items: [
        { question: "Kas hinnad kehtivad kõigile kategooriatele ühtemoodi?", answer: "Ei, iga kategooria kursuse hind sõltub õppe mahust, praktiliste tundide arvust ja kursuse sisust." },
        { question: "Kas kursuse eest saab tasuda osade kaupa?", answer: "Sobiv makselahendus täpsustatakse registreerimisel. Kui soovid paindlikumat maksmist, tasub see kohe üle küsida." },
        { question: "Kas lisatunnid on hinna sees?", answer: "Lisatunnid ei pruugi kuuluda põhipaketi sisse. Nende vajadus sõltub õppija ettevalmistusest ja valitud kategooriast." },
        { question: "Kust näen täpsemat infot konkreetse kursuse kohta?", answer: "Täpsema info leiab vastava kategooria lehelt või meiega otse ühendust võttes." },
      ],
    },
    cta: {
      eyebrow: "CTA",
      title: "Soovid teada, milline kursus Sulle kõige paremini sobib?",
      text: "Võta meiega ühendust või ava sobiva kategooria leht. Aitame võrrelda võimalusi ja valida mõistliku alguse.",
      primaryLabel: "Registreeru",
      primaryHref: "/#registration",
      secondaryLabel: "Küsi infot",
      secondaryHref: "/kontakt/",
    },
  },
  ru: {
    seoTitle: "Цены автошколы в Таллине | Категория B 1090 € | Altera Autokool",
    seoDescription: "Цены Altera Autokool в Таллине: категория B 1090 €, а также курсы A, A1, A2, AM и BE. Теория, вождение, оплата и состав курса в одном месте.",
    eyebrow: "Цены",
    title: "Цены автошколы в Таллине",
    intro:
      "Перед записью на курс большинству учеников важно увидеть основные цены в одном месте. На этой странице собраны базовые цены, дополнительные услуги и ответы на частые вопросы об оплате.",
    coursesEyebrow: "Цены курсов",
    coursesTitle: "Основные курсы по категориям",
    courseCards: [
      { eyebrow: "AM", title: "Права на мопед", price: "690 €", text: "24 часа теории, 12 часов практики, с 14 лет." },
      { eyebrow: "A1", title: "Права на лёгкий мотоцикл", price: "590 €", text: "10 часов теории, 10 часов практики, с 16 лет." },
      { eyebrow: "A2", title: "Права на мотоцикл до 35 кВт", price: "590 €", text: "10 часов теории, 10 часов практики, с 18 лет." },
      { eyebrow: "A", title: "Полная категория мотоцикла", price: "590 €", text: "10 часов теории, 10 часов практики, с 24 лет." },
      { eyebrow: "B", title: "Права на автомобиль", price: "1090 €", text: "29 часов теории, 28 часов вождения, внутренний экзамен и обязательные спецкурсы." },
      { eyebrow: "BE", title: "Автомобиль с прицепом", price: "350 €", text: "4 часа теории, 4 часа практики, нужна категория B." },
    ],
    extrasSection: {
      eyebrow: "Дополнительные услуги",
      title: "Что полезно знать до записи",
      items: [
        "Дополнительные занятия: назначаются по необходимости и зависят от категории",
        "Учебные материалы: базовая информация выдаётся после регистрации",
        "Оплата: подходящий вариант уточняется при записи",
        "Дополнительные расходы: госпошлины и внешние расходы могут не входить в цену курса",
      ],
    },
    includedSection: {
      eyebrow: "Что входит в стоимость",
      title: "Прозрачность ещё до начала курса",
      text:
        "Обычно в стоимость входит базовое обучение по выбранной категории. Точный состав зависит от категории и выбранного пакета, но ключевые условия должны быть понятны ещё до старта.",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Частые вопросы по оплате и ценам",
      items: [
        { question: "Одинаковы ли цены для всех категорий?", answer: "Нет, стоимость зависит от объёма обучения, количества практических занятий и содержания курса." },
        { question: "Можно ли оплатить курс частями?", answer: "Подходящий вариант оплаты уточняется при регистрации. Если нужна более гибкая схема, лучше обсудить это сразу." },
        { question: "Входят ли дополнительные занятия в базовую цену?", answer: "Не всегда. Необходимость дополнительных занятий зависит от подготовки ученика и выбранной категории." },
        { question: "Где посмотреть подробнее информацию о конкретном курсе?", answer: "Подробности есть на странице нужной категории или их можно уточнить напрямую у нас." },
      ],
    },
    cta: {
      eyebrow: "CTA",
      title: "Хотите понять, какой курс подходит вам лучше всего?",
      text: "Свяжитесь с нами или откройте страницу подходящей категории. Поможем сравнить варианты и выбрать разумный старт.",
      primaryLabel: "Записаться",
      primaryHref: "/ru/#registration",
      secondaryLabel: "Задать вопрос",
      secondaryHref: "/ru/kontakty/",
    },
  },
  en: {
    seoTitle: "Driving school prices in Tallinn | Category B 1090 € | Altera Autokool",
    seoDescription: "Altera Autokool prices in Tallinn: Category B 1090 €, plus A, A1, A2, AM and BE courses. Theory, driving lessons, payment details and course scope in one place.",
    eyebrow: "Prices",
    title: "Driving school prices in Tallinn",
    intro:
      "Before registering, most students want to see the core pricing information in one place. This page gathers the main course prices, additional services and answers to common payment questions.",
    coursesEyebrow: "Course prices",
    coursesTitle: "Main courses by category",
    courseCards: [
      { eyebrow: "AM", title: "Moped licence", price: "690 €", text: "24 hours of theory, 12 hours of practice, from age 14." },
      { eyebrow: "A1", title: "Light motorcycle licence", price: "590 €", text: "10 hours of theory, 10 hours of practice, from age 16." },
      { eyebrow: "A2", title: "Motorcycle up to 35 kW", price: "590 €", text: "10 hours of theory, 10 hours of practice, from age 18." },
      { eyebrow: "A", title: "Full motorcycle licence", price: "590 €", text: "10 hours of theory, 10 hours of practice, from age 24." },
      { eyebrow: "B", title: "Passenger car licence", price: "1090 €", text: "29 hours of theory, 28 driving lessons, an internal theory exam and required special courses." },
      { eyebrow: "BE", title: "Car with trailer", price: "350 €", text: "4 hours of theory, 4 hours of practice, Category B required." },
    ],
    extrasSection: {
      eyebrow: "Additional services",
      title: "Useful details before registration",
      items: [
        "Extra lessons: arranged if needed and based on the chosen category",
        "Study materials: key information is shared after registration",
        "Payment: the most suitable option is confirmed during registration",
        "Other costs: state fees and external costs may not be included in the course price",
      ],
    },
    includedSection: {
      eyebrow: "What is included",
      title: "Clear information before the course begins",
      text:
        "The price usually includes the core training for the selected category. The exact package depends on the category and the chosen option, but the key conditions should be easy to understand before you begin.",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Common questions about prices and payment",
      items: [
        { question: "Are prices the same for all categories?", answer: "No, each course price depends on the study volume, the number of practical lessons and the course content." },
        { question: "Can the course be paid in instalments?", answer: "A suitable payment option is confirmed during registration. If you need more flexibility, it is best to ask right away." },
        { question: "Are extra lessons included in the base price?", answer: "Not always. The need for extra lessons depends on the student’s preparation and the selected category." },
        { question: "Where can I see more detailed course information?", answer: "You can find it on the relevant category page or by contacting us directly." },
      ],
    },
    cta: {
      eyebrow: "CTA",
      title: "Want to understand which course fits you best?",
      text: "Contact us or open the most relevant category page. We can help you compare the options and choose a sensible starting point.",
      primaryLabel: "Register",
      primaryHref: "/en/#registration",
      secondaryLabel: "Ask a question",
      secondaryHref: "/en/contacts/",
    },
  },
};
