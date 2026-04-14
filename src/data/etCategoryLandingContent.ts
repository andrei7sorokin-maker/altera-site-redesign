export type ETCategoryLandingKey = "a" | "am" | "be" | "esmaabi";

export type ETCategoryLandingContent = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  metaCards: Array<{ label: string; value: string }>;
  topSections: Array<{
    eyebrow: string;
    title: string;
    text?: string;
    list?: string[];
  }>;
  midSections?: Array<{
    eyebrow: string;
    title: string;
    text?: string;
    list?: string[];
  }>;
  priceSection: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Array<{
      eyebrow: string;
      title: string;
      price: string;
      text: string;
    }>;
  };
  faqItems: Array<{ question: string; answer: string }>;
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

export const etCategoryLandingContent: Record<ETCategoryLandingKey, ETCategoryLandingContent> = {
  a: {
    seoTitle: "A-kategooria kursus Tallinnas | Altera Autokool",
    seoDescription:
      "A-kategooria motokoolitus Tallinnas. Vaata kursuse sisu, nõudeid, hindu ja registreerimise infot Altera Autokoolis.",
    eyebrow: "A-kategooria",
    title: "A-kategooria kursus Tallinnas",
    description:
      "A-kategooria koolitus on mõeldud mootorrattahuvilistele, kes soovivad omandada vajalikud teadmised ja praktilised oskused turvaliseks liiklemiseks. Altera Autokoolis saad õppida selge süsteemi järgi ja valmistuda eksamiks rahulikus tempos.",
    imageSrc: "/images/categories/a/a.png",
    imageAlt: "A-kategooria kursus Tallinnas",
    imageCaption: "Mootorrattaõpe kindla süsteemi järgi",
    primaryCta: "Registreeru A-kategooria kursusele",
    secondaryCta: "Vaata hindu",
    secondaryHref: "/hinnad/",
    metaCards: [
      { label: "Hind alates", value: "590 €" },
      { label: "Kestus", value: "10h teooria / 10h praktika" },
      { label: "Vanus", value: "Alates 24 a" },
      { label: "Asukoht", value: "Tallinn" },
    ],
    topSections: [
      {
        eyebrow: "Tingimused ja nõuded",
        title: "Kursus eeldab varasemat juhiloa olemasolu",
        text:
          "A-kategooria kursusele registreerimiseks on vajalik kehtiv juhiluba mis tahes kategoorias. Koolitus sobib õppijale, kes soovib liikuda suurema võimsusega mootorrattale ning omandada vajalikud teadmised ja praktilise ettevalmistuse.",
      },
      {
        eyebrow: "Mida kursus sisaldab",
        title: "Põhisisu on selgelt välja toodud",
        list: [
          "Teooriaõpe vastavalt kehtivale õppekavale",
          "Praktilised sõidutunnid koos instruktoriga",
          "Kaitsevarustus õpingute ajaks",
          "Ettevalmistus eksamiks ja liikluses turvaliseks osalemiseks",
          "Selged juhised järgmiste sammude kohta",
        ],
      },
    ],
    midSections: [
      {
        eyebrow: "Praktika ja tehnika",
        title: "Õpe keskendub kontrollile ja ohutusele",
        text:
          "Praktiline osa aitab õppijal harjuda mootorratta valdamise, manöövrite, aeglase sõidu, pidurdamise ja liikluses käitumisega. Eesmärk ei ole ainult eksam, vaid oskus liikuda teadlikult ja turvaliselt.",
      },
      {
        eyebrow: "Kellele sobib",
        title: "Hea valik juhile, kes liigub järgmisele tasemele",
        text:
          "A-kategooria kursus sobib juhile, kes soovib laiendada oma võimalusi ja omandada suurema mootorratta juhtimiseks vajalikud teadmised. Õpe on üles ehitatud nii, et ka pikema pausi järel saaks enesekindluse samm-sammult tagasi.",
      },
    ],
    priceSection: {
      eyebrow: "Hinnad",
      title: "Põhiinfo enne registreerimist",
      text:
        "Kursuse baashind, praktilise osa maht ja õppeks vajalikud tingimused peaksid olema enne alustamist selged. Oleme toonud peamised punktid siia kokku, et otsustamine oleks lihtsam.",
      cards: [
        { eyebrow: "A-kategooria", title: "Kursus", price: "590 €", text: "10 teooriatundi ja 10 praktikatundi." },
        { eyebrow: "Varustus", title: "Kaitsevarustus", price: "Hinna sees", text: "Kool pakub õppe ajaks vajalikku kaitsevarustust." },
        { eyebrow: "Juhiluba", title: "Eeltingimus", price: "Vajalik", text: "Registreerimiseks on vaja kehtivat juhiluba." },
        { eyebrow: "Lisainfo", title: "Maksmine", price: "Küsi infot", text: "Täpsustame sobiva makselahenduse registreerimisel." },
      ],
    },
    faqItems: [
      {
        question: "Kas A-kategooria kursusele saab tulla ilma varasema juhiloata?",
        answer: "Ei, A-kategooria kursusele registreerimiseks on vajalik kehtiv juhiluba mis tahes kategoorias.",
      },
      {
        question: "Kas kool annab õppimise ajaks kaitsevarustuse?",
        answer: "Jah, õpingute ajaks pakub kool vajalikku kaitsevarustust.",
      },
      {
        question: "Kui pikk on A-kategooria kursus?",
        answer: "Kursus sisaldab 10 teooriatundi ja 10 praktikatundi. Täpne kestus sõltub tundide ajakavast.",
      },
      {
        question: "Kas sõidutunde saab planeerida paindlikult?",
        answer: "Jah, praktiliste tundide ajad lepitakse kokku vastavalt võimalustele ja õppija tempole.",
      },
    ],
    cta: {
      eyebrow: "CTA",
      title: "Soovid alustada A-kategooria kursust Tallinnas?",
      text:
        "Võta meiega ühendust või registreeru otse kursusele. Aitame valida sobiva alguse ja anname ülevaate järgmistest sammudest.",
      primary: "Registreeru kohe",
      secondary: "Helista +372 511 47 40",
    },
  },
  am: {
    seoTitle: "AM-kategooria kursus Tallinnas | Altera Autokool",
    seoDescription:
      "AM-kategooria koolitus Tallinnas noortele juhtidele. Kursuse maht, tingimused, hind ja registreerimine ühes kohas.",
    eyebrow: "AM-kategooria",
    title: "AM-kategooria kursus Tallinnas",
    description:
      "AM-kategooria kursus aitab noorel juhil alustada liikluses õigete teadmiste ja ohutute võtetega. Altera Autokoolis on kursuse ülesehitus selge, registreerimine lihtne ja õppija saab tuge igas etapis.",
    imageSrc: "/images/categories/am/am.png",
    imageAlt: "AM-kategooria kursus Tallinnas",
    imageCaption: "Turvaline algus noorele juhile",
    primaryCta: "Registreeru AM-kategooria kursusele",
    secondaryCta: "Vaata hindu",
    secondaryHref: "/hinnad/",
    metaCards: [
      { label: "Hind alates", value: "690 €" },
      { label: "Kestus", value: "24h teooria / 12h praktika" },
      { label: "Vanus", value: "Alates 14 a" },
      { label: "Asukoht", value: "Tallinn" },
    ],
    topSections: [
      {
        eyebrow: "Kellele sobib",
        title: "Hea valik noorele juhile esimeseks sammuks",
        text:
          "AM-kategooria kursus sobib noorele õppijale, kes soovib alustada liikluses osalemist mopeediga ning teha seda kindla süsteemi ja turvalise juhendamisega. Kursus aitab üles ehitada õiged harjumused juba alguses.",
      },
      {
        eyebrow: "Õppeprogramm",
        title: "Teooria ja praktika liiguvad koos",
        list: [
          "24 teooriatundi vastavalt õppekavale",
          "12 praktikatundi juhendajaga",
          "Liiklusreeglid, ohutu käitumine ja riskide märkamine",
          "Praktilised harjutused mopeedi valdamiseks",
          "Ettevalmistus eksamiks ja iseseisvaks liiklemiseks",
        ],
      },
    ],
    midSections: [
      {
        eyebrow: "Vanus ja tingimused",
        title: "Olulised nõuded enne registreerimist",
        text:
          "Minimaalne juhiloa saamise vanus on 14 aastat. Registreerimisel on vaja vanemate luba, kehtivat arstitõendit ning digifotot. Vajadusel aitame täpsustada, millised dokumendid tuleb enne kursuse algust ette valmistada.",
      },
      {
        eyebrow: "Õppekorraldus",
        title: "Selge plaan aitab õppijal enesekindlust hoida",
        text:
          "AM-kategooria õppes on oluline, et noor õppija saaks aru nii liiklusreeglitest kui ka enda vastutusest. Seepärast on kursus üles ehitatud samm-sammult, et uusi teadmisi oleks lihtsam siduda praktikaga.",
      },
    ],
    priceSection: {
      eyebrow: "Hind",
      title: "Peamine info enne alustamist",
      text:
        "Enne registreerimist tasub teada kursuse mahtu, vajalikke dokumente ja seda, mis kuulub hinna sisse. Nii on otsus lihtsam ja kogu protsess läbipaistvam.",
      cards: [
        { eyebrow: "AM-kategooria", title: "Kursus", price: "690 €", text: "24 teooriatundi ja 12 praktikatundi." },
        { eyebrow: "Varustus", title: "Kaitsevarustus", price: "Hinna sees", text: "Kool annab õppe ajaks vajaliku kaitsevarustuse." },
        { eyebrow: "Vanus", title: "Minimaalne vanus", price: "14 a", text: "Juhiloa saamise minimaalne vanus on 14 aastat." },
        { eyebrow: "Dokumendid", title: "Registreerimine", price: "Valmis", text: "Vajalikud on vanemate luba, arstitõend ja digifoto." },
      ],
    },
    faqItems: [
      {
        question: "Mis vanusest saab AM-kategooria kursusele tulla?",
        answer: "Juhiloa saamise minimaalne vanus on 14 aastat.",
      },
      {
        question: "Kas kool annab kaitsevarustuse?",
        answer: "Jah, kool pakub õpingute ajaks vajalikku kaitsevarustust.",
      },
      {
        question: "Milliseid dokumente on vaja?",
        answer: "Vajalikud on vanemate luba, kehtiv arstitõend perearstilt ja digifoto.",
      },
      {
        question: "Kas AM-kategooria kursus sobib täiesti algajale?",
        answer: "Jah, kursus on üles ehitatud noorele juhile, kes alustab liikluses osalemist esimest korda.",
      },
    ],
    cta: {
      eyebrow: "CTA",
      title: "Soovid alustada AM-kategooria kursust Tallinnas?",
      text:
        "Saada päring või võta ühendust, kui soovid täpsustada kursuse algust, tingimusi või registreerimist. Aitame kogu protsessi rahulikult läbi teha.",
      primary: "Registreeru kohe",
      secondary: "Helista +372 511 47 40",
    },
  },
  be: {
    seoTitle: "BE-kategooria kursus Tallinnas | Altera Autokool",
    seoDescription:
      "BE-kategooria koolitus Tallinnas. Praktiline õpe, selged tingimused ja kiire registreerimine Altera Autokoolis.",
    eyebrow: "BE-kategooria",
    title: "BE-kategooria kursus Tallinnas",
    description:
      "BE-kategooria koolitus sobib juhtidele, kes vajavad haagisega sõitmiseks vajalikku kategooriat ja praktilist ettevalmistust. Altera Autokoolis saad läbida kursuse arusaadava süsteemi järgi ja registreeruda kiiresti.",
    imageSrc: "/images/categories/be/be.png",
    imageAlt: "BE-kategooria kursus Tallinnas",
    imageCaption: "Praktiline ettevalmistus haagisega sõiduks",
    primaryCta: "Registreeru BE-kategooria kursusele",
    secondaryCta: "Vaata hindu",
    secondaryHref: "/hinnad/",
    metaCards: [
      { label: "Hind alates", value: "350 €" },
      { label: "Kestus", value: "4h teooria / 4h praktika" },
      { label: "Nõue", value: "B-kategooria olemasolu" },
      { label: "Asukoht", value: "Tallinn" },
    ],
    topSections: [
      {
        eyebrow: "Kellele vajalik",
        title: "Sobib juhile, kes vajab haagisega sõiduks lisakategooriat",
        text:
          "BE-kategooria kursus on mõeldud juhile, kellel on vaja vedada haagist, mille lubatud täismass ületab 750 kilogrammi. See on asjakohane nii tööks, veoks kui ka paadihaagise kasutamiseks.",
      },
      {
        eyebrow: "Programm",
        title: "Lühike ja konkreetne õpe",
        list: [
          "4 teooriatundi",
          "4 praktikatundi",
          "Praktiline ettevalmistus haagisega manööverdamiseks",
          "Liiklusolukorrad, pidurdamine ja ohutus",
          "Selgitused eksamiks valmistumise kohta",
        ],
      },
    ],
    midSections: [
      {
        eyebrow: "Nõuded õppijale",
        title: "Registreerimiseks peab olema olemas B-kategooria juhiluba",
        text:
          "BE-kategooria kursusele registreerumiseks on vaja kehtivat B-kategooria juhiluba. Samuti peab õppijal olema kehtiv elamisluba Eestis vähemalt viimased 6 kuud, kui see tingimus talle kohaldub.",
      },
      {
        eyebrow: "Praktiline ettevalmistus",
        title: "Fookus on kindlal kontrollil ja ohutul manööverdamisel",
        text:
          "Praktilises osas harjutad haagisega sõiduki valdamist, tagurdamist, pöördeid, parkimist ja liikluses osalemist. Eesmärk on anda kindlus olukordades, mis haagisega sõites kõige sagedamini küsimusi tekitavad.",
      },
    ],
    priceSection: {
      eyebrow: "Hind",
      title: "Kiire ülevaade enne kursuse algust",
      text:
        "BE-kategooria kursus on lühike ja konkreetne, seega on oluline, et õppija näeks kohe ära põhimahtu ja tingimused. Allpool on peamine info koondatud ühte plokki.",
      cards: [
        { eyebrow: "BE-kategooria", title: "Kursus", price: "350 €", text: "4 teooriatundi ja 4 praktikatundi." },
        { eyebrow: "Eeltingimus", title: "B-kategooria", price: "Vajalik", text: "Registreerimiseks on vaja kehtivat B-kategooria juhiluba." },
        { eyebrow: "Kasutus", title: "Haagis", price: "Üle 750 kg", text: "Sobib ka paadihaagise ja raskema haagise vedamiseks." },
        { eyebrow: "Lisainfo", title: "Maksmine", price: "Küsi infot", text: "Täpsustame sobiva makselahenduse registreerimisel." },
      ],
    },
    faqItems: [
      {
        question: "Kas BE-kategooria sobib ka paadihaagise jaoks?",
        answer: "Jah, kursus sobib ka paadihaagise vedamiseks, kui sõiduki ja haagise kombinatsioon seda nõuab.",
      },
      {
        question: "Kas enne kursust peab olema B-kategooria olemas?",
        answer: "Jah, BE-kategooria kursusele registreerimiseks on vajalik kehtiv B-kategooria juhiluba.",
      },
      {
        question: "Kui pikk on BE-kategooria kursus?",
        answer: "Kursus sisaldab 4 teooriatundi ja 4 praktikatundi.",
      },
      {
        question: "Kas kursus keskendub praktilistele olukordadele?",
        answer: "Jah, suur rõhk on haagisega manööverdamisel, ohutusel ja eksamiks vajalikul ettevalmistusel.",
      },
    ],
    cta: {
      eyebrow: "CTA",
      title: "Soovid alustada BE-kategooria kursust Tallinnas?",
      text:
        "Võta meiega ühendust või saada registreerimispäring. Aitame Sul täpsustada tingimused, algusaja ja järgmised sammud.",
      primary: "Registreeru kohe",
      secondary: "Helista +372 511 47 40",
    },
  },
  esmaabi: {
    seoTitle: "Esmaabi kursus Tallinnas | Altera Autokool",
    seoDescription:
      "Esmaabi kursus Tallinnas autojuhtidele ja õppijatele. Vaata aega, sisu ja registreerimise võimalusi.",
    eyebrow: "Esmaabi",
    title: "Esmaabi kursus Tallinnas",
    description:
      "Esmaabi kursus sobib autojuhtidele ja õppijatele, kes vajavad praktilist ja arusaadavat ülevaadet sellest, kuidas õnnetusolukorras tegutseda. Altera Autokoolis saad vajaliku põhiteadmise ühes kohas koos selge registreerimisvõimalusega.",
    imageSrc: "/images/hero/altera-hero.png",
    imageAlt: "Esmaabi kursus Tallinnas",
    imageCaption: "Olulised oskused liikluses ja igapäevaelus",
    primaryCta: "Registreeru esmaabi kursusele",
    secondaryCta: "Võta ühendust",
    secondaryHref: "/kontakt/",
    metaCards: [
      { label: "Hind", value: "Küsi infot" },
      { label: "Kestus", value: "Täpsustub registreerimisel" },
      { label: "Formaat", value: "Klassiõpe" },
      { label: "Asukoht", value: "Tallinn" },
    ],
    topSections: [
      {
        eyebrow: "Kellele vajalik",
        title: "Sobib nii õppijale kui ka juhile",
        text:
          "Esmaabi kursus on vajalik neile, kes alustavad juhiõpinguid, uuendavad oma teadmisi või soovivad saada rohkem kindlust selles, kuidas hädaolukorras käituda. Kursus keskendub selgele, praktilisele ja arusaadavale infole.",
      },
      {
        eyebrow: "Kursuse teemad",
        title: "Peamised olukorrad ja tegevused",
        list: [
          "Esmaabi alused ja abi kutsumine",
          "Kannatanu seisundi hindamine",
          "Tegutsemine teadvusekao korral",
          "Verejooksud, traumad ja põletused",
          "Liiklusõnnetuse korral esmased tegevused",
        ],
      },
    ],
    midSections: [
      {
        eyebrow: "Kestus ja formaat",
        title: "Kursus on üles ehitatud praktilise mõtteviisiga",
        text:
          "Esmaabi kursus toimub klassiõppes ning keskendub tegevustele, mida on vaja päriselus kõige kiiremini rakendada. Täpne aeg ja kursuse maht täpsustatakse registreerimisel või ühenduse võtmise käigus.",
      },
      {
        eyebrow: "Miks see on oluline",
        title: "Esmaabi oskus annab rohkem kindlust",
        text:
          "Liikluses ja igapäevaelus võib tekkida olukordi, kus kiire ja rahulik tegutsemine aitab vältida suuremaid tagajärgi. Seetõttu on esmaabi kursus oluline mitte ainult eksami või nõude pärast, vaid päriselt kasuliku oskusena.",
      },
    ],
    priceSection: {
      eyebrow: "Hind",
      title: "Info enne registreerimist",
      text:
        "Kuna esmaabi kursuse ajad ja formaadid võivad sõltuda grupist, on kõige mõistlikum täpsustada hind ja lähim võimalik algus otse ühendust võttes.",
      cards: [
        { eyebrow: "Esmaabi", title: "Kursus", price: "Küsi infot", text: "Hind täpsustatakse registreerimisel." },
        { eyebrow: "Aeg", title: "Toimumine", price: "Tallinn", text: "Kursuse aeg ja formaat lepitakse kokku vastavalt grupile." },
        { eyebrow: "Sisu", title: "Praktiline fookus", price: "Põhiteemad", text: "Kursus keskendub esmasele tegutsemisele ja õigetele võtetele." },
        { eyebrow: "Registreerimine", title: "Kiire kontakt", price: "Veebis / telefon", text: "Saada päring ja täpsustame järgmise võimaluse." },
      ],
    },
    faqItems: [
      {
        question: "Kellele esmaabi kursus sobib?",
        answer: "Kursus sobib autojuhtidele, õppijatele ja kõigile, kes soovivad värskendada oma esmaabiteadmisi.",
      },
      {
        question: "Kas kursusel käsitletakse liiklusõnnetuse olukordi?",
        answer: "Jah, ühe teemana käsitletakse ka tegevusi liiklusõnnetuse korral.",
      },
      {
        question: "Kas kursuse hind on lehel kohe näha?",
        answer: "Kursuse hind täpsustatakse registreerimisel või meiega ühendust võttes.",
      },
      {
        question: "Kuidas registreeruda esmaabi kursusele?",
        answer: "Registreeruda saab veebis, telefoni või e-posti teel.",
      },
    ],
    cta: {
      eyebrow: "CTA",
      title: "Soovid osaleda esmaabi kursusel Tallinnas?",
      text:
        "Võta meiega ühendust ja küsi lähima võimaliku kursuse, toimumisaja ja registreerimise kohta. Aitame Sul valida sobiva lahenduse.",
      primary: "Registreeru kohe",
      secondary: "Helista +372 511 47 40",
    },
  },
};
