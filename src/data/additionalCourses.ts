import type { Locale } from "@/data/locales";

export type SpecialCourseKey = "firstAid" | "nightDriving" | "slipperyDriving";

type SpecialCourse = {
  key: SpecialCourseKey;
  eyebrow: string;
  title: string;
  text: string;
  shortLabel: string;
  mediaLabel: string;
  videoStatus: string;
  href: string;
  buttonLabel: string;
  meta: string[];
  page: {
    seoTitle: string;
    seoDescription: string;
    description: string;
    imageLabel: string;
    imageText: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    metaCards: Array<{ label: string; value: string }>;
    sections: Array<{ eyebrow: string; title: string; text?: string; list?: string[] }>;
    videoTitle: string;
    videoText: string;
    videoStatus: string;
    faqItems: Array<{ question: string; answer: string }>;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
  videoNote: string;
};

export const additionalCourseSectionCopy: Record<Locale, SectionCopy> = {
  et: {
    eyebrow: "Kasulikud kursused",
    title: "Praktilised oskused, mis annavad liikluses kindlust",
    text: "Lisaks kategooriakoolitusele aitame mõista keerulisemaid liiklusolukordi. Iga suund saab oma selge lehe, praktilised teemad ja hiljem ka lühikesed videod.",
    buttonLabel: "Vaata kursust",
    videoNote: "Videotundide formaat on valmis lisamiseks",
  },
  ru: {
    eyebrow: "Полезные курсы",
    title: "Практические навыки для уверенности на дороге",
    text: "Помимо категорий, мы собрали отдельные направления для сложных дорожных ситуаций. Для каждого курса есть понятная страница, программа и место для коротких видеоразборов.",
    buttonLabel: "Смотреть курс",
    videoNote: "Формат видеозанятий готов к добавлению",
  },
  en: {
    eyebrow: "Useful courses",
    title: "Practical skills for more confidence on the road",
    text: "Alongside category training, we are building focused guides for challenging road situations. Each course has a clear page, a practical outline and a place for short videos.",
    buttonLabel: "View course",
    videoNote: "The video lesson format is ready to add",
  },
};

const coursePages: Record<Locale, Record<SpecialCourseKey, SpecialCourse["page"]>> = {
  et: {
    firstAid: {
      seoTitle: "Esmaabi kursus Tallinnas | Altera Autokool",
      seoDescription: "Praktiline esmaabi kursus Tallinnas autojuhtidele ja õppijatele.",
      description: "Esmaabi kursus annab juhile selge tegevusplaani olukorras, kus on vaja kiiresti hinnata kannatanu seisundit, kutsuda abi ja alustada vajalikke esimesi võtteid.",
      imageLabel: "ESMAABI",
      imageText: "Rahulik tegevusplaan ootamatus olukorras",
      primaryCta: "Registreeru kursusele",
      secondaryCta: "Võta ühendust",
      secondaryHref: "/kontakt/",
      metaCards: [
        { label: "Formaat", value: "Praktiline õpe" },
        { label: "Asukoht", value: "Tallinn" },
        { label: "Sisu", value: "Põhivõtted" },
        { label: "Hind", value: "Küsi" },
      ],
      sections: [
        { eyebrow: "Kellele sobib", title: "Oluline oskus igale juhile", text: "Kursus sobib õppijale, kes valmistub juhilubadeks, ja juhile, kes soovib oma teadmisi värskendada. Fookus on rahulikul ja õigel tegutsemisel, mitte ainult teoorial." },
        { eyebrow: "Teemad", title: "Mida kursusel harjutame", list: ["Kannatanu seisundi hindamine ja abi kutsumine", "Teadvusetus, hingamisteed ja elustamine", "Verejooksud, traumad, põletused ja šokk", "Esmaabivahendite õige kasutamine"] },
      ],
      videoTitle: "Lühikesed samm-sammult videod",
      videoText: "Siia lisame hiljem Altera enda videod, kus õpetaja näitab põhivõtteid rahulikus ja arusaadavas vormis.",
      videoStatus: "Videod lisame pärast filmimist",
      faqItems: [
        { question: "Kellele esmaabi kursus sobib?", answer: "Kursus sobib autojuhtidele, õppijatele ja kõigile, kes soovivad oma esmaabiteadmisi värskendada." },
        { question: "Millest kursus räägib?", answer: "Käsitleme kannatanu hindamist, abi kutsumist, elustamist, verejookse, traumasid, põletusi ja šokki." },
        { question: "Kuidas lähimat aega teada saada?", answer: "Võta meiega ühendust ja täpsustame järgmise grupi aega, formaati ja hinda." },
      ],
      ctaEyebrow: "Alusta rahulikult",
      ctaTitle: "Soovid esmaabi kursuse kohta täpsemalt teada?",
      ctaText: "Kirjuta või helista meile. Aitame leida sobiva aja ja anname ülevaate järgmistest sammudest.",
      ctaPrimary: "Registreeru",
      ctaSecondary: "Helista +372 511 47 40",
    },
    nightDriving: {
      seoTitle: "Pimedasõidu koolitus Tallinnas | Altera Autokool",
      seoDescription: "Pimedasõidu koolitus Tallinnas: nähtavus, tuled ja ohutu käitumine pimedal ajal.",
      description: "Pimedasõidu koolitus aitab mõista, kuidas muutuvad nähtavus, kauguste hindamine ja ohud pimedal ajal ning kuidas kasutada auto tulesid teadlikult.",
      imageLabel: "PIMEDASÕIT",
      imageText: "Nähtavus algab õigest valgusest",
      primaryCta: "Küsi koolituse kohta",
      secondaryCta: "Vaata hindu",
      secondaryHref: "/hinnad/",
      metaCards: [
        { label: "Fookus", value: "Nähtavus" },
        { label: "Formaat", value: "Teooria + praktika" },
        { label: "Asukoht", value: "Tallinn" },
        { label: "Hind", value: "40 €" },
      ],
      sections: [
        { eyebrow: "Mida õpid", title: "Näed paremini ja reageerid varem", list: ["Erinevate tulede mõju nähtavusele", "Vastutuleva sõiduki ja jalakäija märkamine", "Ohtude hindamine erinevatel kiirustel", "Parkimine ja ohutu liikumine pimedas"] },
        { eyebrow: "Kuidas toimub", title: "Teooria ja praktiline harjutus", text: "Koolituse võib läbida ühe päeva jooksul või jagada teooria ja praktika eri päevadele. Täpse aja lepime õppijaga kokku." },
      ],
      videoTitle: "Videod päris olukordadest",
      videoText: "Tulevased lühivideod näitavad, kuidas muutub nähtavus tulede, kiiruse ja vastutuleva liikluse korral.",
      videoStatus: "Videod lisame pärast filmimist",
      faqItems: [
        { question: "Kas koolitusel on ka praktika?", answer: "Jah, koolitus ühendab teooria ja praktilised harjutused pimedas liiklemise teemal." },
        { question: "Mida on vaja kaasa võtta?", answer: "Kaasa tuleb võtta õpilaspilet ja isikut tõendav dokument." },
        { question: "Kas teooria ja praktika võivad olla eri päevadel?", answer: "Jah, selle lepime vastavalt grupile ja ajale eraldi kokku." },
      ],
      ctaEyebrow: "Õpi nähtavust hindama",
      ctaTitle: "Soovid pimedasõidu koolituse kohta rohkem teada?",
      ctaText: "Võta ühendust ja küsi järgmise koolituse aega ning täpset korraldust.",
      ctaPrimary: "Küsi aega",
      ctaSecondary: "Helista +372 511 47 40",
    },
    slipperyDriving: {
      seoTitle: "Libedasõidu koolitus Tallinnas | Altera Autokool",
      seoDescription: "Libedasõidu koolitus Tallinnas: ohutu käitumine keerulistes teeoludes ja auto kontrollimine.",
      description: "Libedasõidu koolitus aitab arendada rahulikku tegutsemist ja auto kontrollimist olukordades, kus teeolud muutuvad kiiresti ning pidurdusteekond pikeneb.",
      imageLabel: "LIBEDASÕIT",
      imageText: "Kontroll säilib siis, kui otsus on rahulik",
      primaryCta: "Küsi koolituse kohta",
      secondaryCta: "Vaata hindu",
      secondaryHref: "/hinnad/",
      metaCards: [
        { label: "Fookus", value: "Kontroll" },
        { label: "Formaat", value: "Teooria + praktika" },
        { label: "Asukoht", value: "Tallinn" },
        { label: "Hind", value: "90 €" },
      ],
      sections: [
        { eyebrow: "Mida õpid", title: "Tegutsed keerulises olukorras rahulikumalt", list: ["Libeda tee mõju auto juhitavusele", "Pidurdamine ja õige kiiruse valik", "Auto kontrolli taastamine", "Ohtude ennetamine enne manöövrit"] },
        { eyebrow: "Kuidas toimub", title: "Teooria ja praktiline harjutus", text: "Koolitus võib toimuda ühe päevaga või jagada teooria ja praktika eri päevadele. Täpsed tingimused ja aeg sõltuvad grupist." },
      ],
      videoTitle: "Selged videod keerulisest olukorrast",
      videoText: "Tulevased videod aitavad enne praktikat mõista, miks libedal teel tuleb kiirus, kaugus ja manööver varem läbi mõelda.",
      videoStatus: "Videod lisame pärast filmimist",
      faqItems: [
        { question: "Miks libedasõidu koolitus kasulik on?", answer: "See aitab harjutada ohutut käitumist ja auto kontrollimist keerulisemates teeoludes." },
        { question: "Kas koolitus sisaldab praktikat?", answer: "Jah, lisaks teooriale on kavas praktiline harjutus libedaga seotud olukordade mõistmiseks." },
        { question: "Kuidas registreeruda?", answer: "Võta meiega ühendust ja täpsustame järgmise koolituse aega ning tingimusi." },
      ],
      ctaEyebrow: "Valmista end ette",
      ctaTitle: "Soovid libedasõidu koolituse kohta rohkem teada?",
      ctaText: "Kirjuta või helista meile, et küsida järgmise koolituse aega ja täpset korraldust.",
      ctaPrimary: "Küsi aega",
      ctaSecondary: "Helista +372 511 47 40",
    },
  },
  ru: {
    firstAid: {
      seoTitle: "Курс первой помощи в Таллине | Altera Autokool",
      seoDescription: "Практический курс первой помощи в Таллине для водителей и учеников.",
      description: "Курс первой помощи даёт водителю понятный план действий, если нужно быстро оценить состояние пострадавшего, вызвать помощь и начать первые необходимые действия.",
      imageLabel: "ПЕРВАЯ ПОМОЩЬ",
      imageText: "Спокойный план действий в неожиданной ситуации",
      primaryCta: "Записаться на курс",
      secondaryCta: "Связаться с нами",
      secondaryHref: "/ru/kontakty/",
      metaCards: [
        { label: "Формат", value: "Практическое обучение" },
        { label: "Город", value: "Таллин" },
        { label: "Содержание", value: "Основные навыки" },
        { label: "Цена", value: "Уточняйте" },
      ],
      sections: [
        { eyebrow: "Кому подходит", title: "Важный навык для каждого водителя", text: "Курс подходит ученикам, которые готовятся к правам, и водителям, которые хотят освежить знания. Фокус на спокойных и правильных действиях, а не только на теории." },
        { eyebrow: "Темы", title: "Что разбираем на курсе", list: ["Оценка состояния пострадавшего и вызов помощи", "Потеря сознания, дыхательные пути и реанимация", "Кровотечения, травмы, ожоги и шок", "Правильное использование аптечки"] },
      ],
      videoTitle: "Короткие видео с пошаговыми действиями",
      videoText: "Сюда мы позже добавим собственные видео Altera, где преподаватель спокойно и понятно покажет основные приёмы.",
      videoStatus: "Видео добавим после съёмки",
      faqItems: [
        { question: "Кому подходит курс первой помощи?", answer: "Курс подходит водителям, ученикам и всем, кто хочет обновить знания по первой помощи." },
        { question: "Какие темы входят в курс?", answer: "Разбираем оценку состояния, вызов помощи, реанимацию, кровотечения, травмы, ожоги и шок." },
        { question: "Как узнать ближайшую дату?", answer: "Свяжитесь с нами, и мы уточним время следующей группы, формат и стоимость." },
      ],
      ctaEyebrow: "Начните спокойно",
      ctaTitle: "Хотите узнать больше о курсе первой помощи?",
      ctaText: "Напишите или позвоните нам. Мы подскажем ближайшую дату и следующие шаги.",
      ctaPrimary: "Записаться",
      ctaSecondary: "Позвонить +372 511 47 40",
    },
    nightDriving: {
      seoTitle: "Курс ночного вождения в Таллине | Altera Autokool",
      seoDescription: "Курс ночного вождения в Таллине: видимость, свет и безопасное поведение в тёмное время суток.",
      description: "Курс ночного вождения помогает понять, как меняются видимость, оценка расстояния и риски в темноте, а также как осознанно пользоваться светом автомобиля.",
      imageLabel: "НОЧНОЕ ВОЖДЕНИЕ",
      imageText: "Видимость начинается с правильного света",
      primaryCta: "Узнать о курсе",
      secondaryCta: "Смотреть цены",
      secondaryHref: "/ru/ceny/",
      metaCards: [
        { label: "Фокус", value: "Видимость" },
        { label: "Формат", value: "Теория + практика" },
        { label: "Город", value: "Таллин" },
        { label: "Цена", value: "40 €" },
      ],
      sections: [
        { eyebrow: "Что изучаем", title: "Раньше замечаете опасность", list: ["Как разные фары влияют на видимость", "Встречный автомобиль и пешеходы", "Оценка опасности на разной скорости", "Парковка и безопасное движение в темноте"] },
        { eyebrow: "Как проходит", title: "Теория и практическая часть", text: "Курс можно пройти за один день или разделить теорию и практику на разные дни. Точное время согласуем с учеником." },
      ],
      videoTitle: "Видео из реальных дорожных ситуаций",
      videoText: "Будущие короткие ролики покажут, как меняется видимость из-за света фар, скорости и встречного движения.",
      videoStatus: "Видео добавим после съёмки",
      faqItems: [
        { question: "Есть ли на курсе практика?", answer: "Да, курс объединяет теорию и практические упражнения по ночному вождению." },
        { question: "Что нужно взять с собой?", answer: "Нужно взять ученический билет и документ, удостоверяющий личность." },
        { question: "Можно ли пройти теорию и практику в разные дни?", answer: "Да, это согласуется с группой и доступным временем." },
      ],
      ctaEyebrow: "Учитесь оценивать видимость",
      ctaTitle: "Хотите узнать больше о курсе ночного вождения?",
      ctaText: "Свяжитесь с нами и уточните ближайшую дату и формат обучения.",
      ctaPrimary: "Уточнить дату",
      ctaSecondary: "Позвонить +372 511 47 40",
    },
    slipperyDriving: {
      seoTitle: "Курс скользкого вождения в Таллине | Altera Autokool",
      seoDescription: "Курс скользкого вождения в Таллине: контроль автомобиля и безопасные решения в сложных дорожных условиях.",
      description: "Курс скользкого вождения помогает спокойнее действовать и контролировать автомобиль, когда дорожные условия быстро меняются, а тормозной путь увеличивается.",
      imageLabel: "СКОЛЬЗКОЕ ВОЖДЕНИЕ",
      imageText: "Контроль сохраняется, когда решение принято спокойно",
      primaryCta: "Узнать о курсе",
      secondaryCta: "Смотреть цены",
      secondaryHref: "/ru/ceny/",
      metaCards: [
        { label: "Фокус", value: "Контроль" },
        { label: "Формат", value: "Теория + практика" },
        { label: "Город", value: "Таллин" },
        { label: "Цена", value: "90 €" },
      ],
      sections: [
        { eyebrow: "Что изучаем", title: "Спокойнее действуете в сложной ситуации", list: ["Влияние скользкой дороги на управление", "Торможение и выбор безопасной скорости", "Восстановление контроля над автомобилем", "Оценка риска до начала манёвра"] },
        { eyebrow: "Как проходит", title: "Теория и практическая часть", text: "Курс можно пройти за один день или разделить теорию и практику на разные дни. Точные условия и время зависят от группы." },
      ],
      videoTitle: "Понятные видео о сложной ситуации",
      videoText: "Будущие ролики помогут ещё до практики понять, почему на скользкой дороге скорость, дистанцию и манёвр нужно оценивать заранее.",
      videoStatus: "Видео добавим после съёмки",
      faqItems: [
        { question: "Зачем нужен курс скользкого вождения?", answer: "Он помогает отработать безопасное поведение и контроль автомобиля в более сложных дорожных условиях." },
        { question: "Есть ли практическая часть?", answer: "Да, кроме теории предусмотрено практическое упражнение по ситуациям, связанным со скользкой дорогой." },
        { question: "Как записаться?", answer: "Свяжитесь с нами, чтобы уточнить ближайшую дату и условия участия." },
      ],
      ctaEyebrow: "Подготовьтесь заранее",
      ctaTitle: "Хотите узнать больше о курсе скользкого вождения?",
      ctaText: "Напишите или позвоните нам, чтобы уточнить дату и формат обучения.",
      ctaPrimary: "Уточнить дату",
      ctaSecondary: "Позвонить +372 511 47 40",
    },
  },
  en: {
    firstAid: {
      seoTitle: "First Aid Course in Tallinn | Altera Autokool",
      seoDescription: "A practical first aid course in Tallinn for drivers and students.",
      description: "The first aid course gives drivers a clear action plan for assessing an injured person, calling for help and starting the first essential steps.",
      imageLabel: "FIRST AID",
      imageText: "A calm action plan for an unexpected situation",
      primaryCta: "Register for the course",
      secondaryCta: "Contact us",
      secondaryHref: "/en/contacts/",
      metaCards: [
        { label: "Format", value: "Practical training" },
        { label: "Location", value: "Tallinn" },
        { label: "Focus", value: "Core skills" },
        { label: "Price", value: "Ask us" },
      ],
      sections: [
        { eyebrow: "Who it is for", title: "An important skill for every driver", text: "The course is suitable for students preparing for a licence and for drivers who want to refresh their knowledge. The focus is on calm, correct action, not theory alone." },
        { eyebrow: "Topics", title: "What we cover", list: ["Assessing a person and calling for help", "Unconsciousness, airways and resuscitation", "Bleeding, trauma, burns and shock", "Using a first aid kit correctly"] },
      ],
      videoTitle: "Short step-by-step videos",
      videoText: "We will later add Altera videos where the instructor demonstrates the core techniques in a calm, clear format.",
      videoStatus: "Videos will be added after filming",
      faqItems: [
        { question: "Who is the first aid course for?", answer: "It is suitable for drivers, students and anyone who wants to refresh their first aid knowledge." },
        { question: "What topics are included?", answer: "We cover assessment, calling for help, resuscitation, bleeding, injuries, burns and shock." },
        { question: "How do I find the next date?", answer: "Contact us and we will confirm the next group, format and price." },
      ],
      ctaEyebrow: "Start with confidence",
      ctaTitle: "Want to learn more about the first aid course?",
      ctaText: "Write or call us. We will explain the next available date and the next steps.",
      ctaPrimary: "Register",
      ctaSecondary: "Call +372 511 47 40",
    },
    nightDriving: {
      seoTitle: "Night Driving Course in Tallinn | Altera Autokool",
      seoDescription: "A night driving course in Tallinn covering visibility, lights and safe behaviour after dark.",
      description: "The night driving course explains how visibility, distance judgement and hazards change in darkness, and how to use vehicle lights deliberately.",
      imageLabel: "NIGHT DRIVING",
      imageText: "Visibility starts with the right light",
      primaryCta: "Ask about the course",
      secondaryCta: "View prices",
      secondaryHref: "/en/prices/",
      metaCards: [
        { label: "Focus", value: "Visibility" },
        { label: "Format", value: "Theory + practice" },
        { label: "Location", value: "Tallinn" },
        { label: "Price", value: "40 €" },
      ],
      sections: [
        { eyebrow: "What you learn", title: "Spot hazards earlier", list: ["How different lights affect visibility", "Oncoming vehicles and pedestrians", "Assessing hazards at different speeds", "Parking and moving safely in the dark"] },
        { eyebrow: "How it works", title: "Theory and practical training", text: "The course can be completed in one day or split between different days. We agree the exact time with the student." },
      ],
      videoTitle: "Videos from real road situations",
      videoText: "Future short videos will show how visibility changes with headlights, speed and oncoming traffic.",
      videoStatus: "Videos will be added after filming",
      faqItems: [
        { question: "Does the course include practice?", answer: "Yes, it combines theory with practical night driving exercises." },
        { question: "What should I bring?", answer: "Bring your student card and an identity document." },
        { question: "Can theory and practice be on different days?", answer: "Yes, this can be agreed with the group and the available schedule." },
      ],
      ctaEyebrow: "Learn to judge visibility",
      ctaTitle: "Want to know more about the night driving course?",
      ctaText: "Contact us to ask about the next date and training format.",
      ctaPrimary: "Ask for a date",
      ctaSecondary: "Call +372 511 47 40",
    },
    slipperyDriving: {
      seoTitle: "Slippery Driving Course in Tallinn | Altera Autokool",
      seoDescription: "A slippery driving course in Tallinn focused on vehicle control and safe decisions in difficult road conditions.",
      description: "The slippery driving course helps drivers stay calm and control the vehicle when road conditions change quickly and braking distance increases.",
      imageLabel: "SLIPPERY DRIVING",
      imageText: "Control stays with a calm decision",
      primaryCta: "Ask about the course",
      secondaryCta: "View prices",
      secondaryHref: "/en/prices/",
      metaCards: [
        { label: "Focus", value: "Control" },
        { label: "Format", value: "Theory + practice" },
        { label: "Location", value: "Tallinn" },
        { label: "Price", value: "90 €" },
      ],
      sections: [
        { eyebrow: "What you learn", title: "Respond more calmly in difficult situations", list: ["How slippery roads affect handling", "Braking and choosing a safe speed", "Restoring control of the vehicle", "Assessing risk before a manoeuvre"] },
        { eyebrow: "How it works", title: "Theory and practical training", text: "The course can be completed in one day or split between different days. Exact conditions and times depend on the group." },
      ],
      videoTitle: "Clear videos about difficult situations",
      videoText: "Future videos will explain why speed, distance and manoeuvres need to be considered earlier on a slippery road.",
      videoStatus: "Videos will be added after filming",
      faqItems: [
        { question: "Why take a slippery driving course?", answer: "It helps practise safe behaviour and vehicle control in more difficult road conditions." },
        { question: "Is there a practical part?", answer: "Yes, the course includes practical exercises connected with slippery road situations." },
        { question: "How do I register?", answer: "Contact us to ask about the next date and participation details." },
      ],
      ctaEyebrow: "Prepare before the situation",
      ctaTitle: "Want to know more about the slippery driving course?",
      ctaText: "Write or call us to ask about the next date and training format.",
      ctaPrimary: "Ask for a date",
      ctaSecondary: "Call +372 511 47 40",
    },
  },
};

const cards: Record<Locale, Record<SpecialCourseKey, Omit<SpecialCourse, "page">>> = {
  et: {
    firstAid: { key: "firstAid", eyebrow: "Esmaabi", title: "Tea, mida teha enne abi saabumist", text: "Õpi hindama olukorda, kutsuma abi ja tegema esimesed õiged sammud.", shortLabel: "01", mediaLabel: "Praktiline õpe", videoStatus: "Õpetusvideo tulekul", href: "/esmaabi-kursus-tallinnas/", buttonLabel: "Vaata kursust", meta: ["Põhivõtted", "Tallinn"] },
    nightDriving: { key: "nightDriving", eyebrow: "Pimedasõit", title: "Märka pimedas rohkem", text: "Nähtavus, tuled ja ohutud otsused pimedal ajal.", shortLabel: "02", mediaLabel: "Videoformaat", videoStatus: "Lühivideod tulekul", href: "/pimedasoidu-koolitus-tallinnas/", buttonLabel: "Vaata kursust", meta: ["Teooria + praktika", "40 €"] },
    slipperyDriving: { key: "slipperyDriving", eyebrow: "Libedasõit", title: "Hoia auto üle kontrolli", text: "Mõista libeda tee mõju ja harjuta rahulikku tegutsemist.", shortLabel: "03", mediaLabel: "Videoformaat", videoStatus: "Lühivideod tulekul", href: "/libedasoidu-koolitus-tallinnas/", buttonLabel: "Vaata kursust", meta: ["Teooria + praktika", "90 €"] },
  },
  ru: {
    firstAid: { key: "firstAid", eyebrow: "Первая помощь", title: "Знайте, что делать до приезда помощи", text: "Оцените ситуацию, вызовите помощь и выполните первые правильные действия.", shortLabel: "01", mediaLabel: "Практическое обучение", videoStatus: "Видео скоро", href: "/ru/esmaabi-kursus-tallinnas/", buttonLabel: "Смотреть курс", meta: ["Основные навыки", "Таллин"] },
    nightDriving: { key: "nightDriving", eyebrow: "Ночное вождение", title: "Замечайте больше в темноте", text: "Видимость, свет и безопасные решения после наступления темноты.", shortLabel: "02", mediaLabel: "Видео-формат", videoStatus: "Короткие видео скоро", href: "/ru/nochnoye-vozhdeniye-tallinn/", buttonLabel: "Смотреть курс", meta: ["Теория + практика", "40 €"] },
    slipperyDriving: { key: "slipperyDriving", eyebrow: "Скользкое вождение", title: "Сохраняйте контроль над автомобилем", text: "Поймите влияние скользкой дороги и научитесь действовать спокойнее.", shortLabel: "03", mediaLabel: "Видео-формат", videoStatus: "Короткие видео скоро", href: "/ru/skolzkoe-vozhdenie-tallinn/", buttonLabel: "Смотреть курс", meta: ["Теория + практика", "90 €"] },
  },
  en: {
    firstAid: { key: "firstAid", eyebrow: "First aid", title: "Know what to do before help arrives", text: "Assess the situation, call for help and take the first correct steps.", shortLabel: "01", mediaLabel: "Practical training", videoStatus: "Video coming soon", href: "/en/esmaabi-kursus-tallinnas/", buttonLabel: "View course", meta: ["Core skills", "Tallinn"] },
    nightDriving: { key: "nightDriving", eyebrow: "Night driving", title: "Notice more after dark", text: "Visibility, lights and safer decisions when the light changes.", shortLabel: "02", mediaLabel: "Video format", videoStatus: "Short videos coming soon", href: "/en/night-driving-tallinn/", buttonLabel: "View course", meta: ["Theory + practice", "40 €"] },
    slipperyDriving: { key: "slipperyDriving", eyebrow: "Slippery driving", title: "Keep control of the vehicle", text: "Understand slippery roads and practise calmer responses.", shortLabel: "03", mediaLabel: "Video format", videoStatus: "Short videos coming soon", href: "/en/slippery-driving-tallinn/", buttonLabel: "View course", meta: ["Theory + practice", "90 €"] },
  },
};

export const additionalCourses: Record<Locale, SpecialCourse[]> = {
  et: Object.values(cards.et).map((card) => ({ ...card, page: coursePages.et[card.key] })),
  ru: Object.values(cards.ru).map((card) => ({ ...card, page: coursePages.ru[card.key] })),
  en: Object.values(cards.en).map((card) => ({ ...card, page: coursePages.en[card.key] })),
};

export const getSpecialCourse = (locale: Locale, key: SpecialCourseKey) => additionalCourses[locale].find((course) => course.key === key)!;
