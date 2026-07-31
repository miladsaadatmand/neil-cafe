export const CATEGORIES = [
  { id: "breakfast", name: "صبحانه", emoji: "🍳" },
  { id: "snack", name: " میان‌وعده فیت", emoji: "🥪" },
  { id: "hot-coffee", name: "قهوه های گرم", emoji: "☕" },
  { id: "cold-coffee", name: "قهوه های سرد", emoji: "🧋" },
  { id: "hot-drinks", name: "نوشیدنی های گرم", emoji: "🍵" },
  { id: "mocktail-smoothie", name: "ماکتیل‌ها و اسموتی", emoji: "🍹" },
  { id: "traditional-iced-tea", name: "نوشیدنی‌های سنتی و آیس تی", emoji: "🍋" },
  { id: "milkshakes", name: "میلک شیک‌ها", emoji: "🥤" },
  { id: "herbal-tea", name: "دمنوش‌ها", emoji: "🫖" },
];

export const MENU_ITEMS = [
  // ── صبحانه ──
  {
    id: "1",
    name: "املت ایرانی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "قیمت:", amount: "220" }],
    categoryId: "breakfast",
  },
  {
    id: "2",
    name: "املت مخصوص نیل",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "قینت", amount: "280" }],
    categoryId: "breakfast",
  },
  {
    id: "3",
    name: "نیمرو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "breakfast",
  },
  {
    id: "4",
    name: "سوسیس تخم مرغ",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "260" }],
    categoryId: "breakfast",
  },
  {
    id: "5",
    name: "پنکیک",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "250" }],
    categoryId: "breakfast",
  },
  {
    id: "6",
    name: "وافل",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "320" }],
    categoryId: "breakfast",
  },
  {
    id: "7",
    name: "صبحانه فیت",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "265" }],
    categoryId: "breakfast",
  },

  // ── میان‌وعده ──

  {
    id: "8",
    name: "سیب زمینی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "300" }],
    categoryId: "snack",
  },
  {
    id: "9",
    name: "سیب زمینی ویژه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "360" }],
    categoryId: "snack",
  },
  {
    id: "10",
    name: "کلاب ژامبون",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "210" }],
    categoryId: "snack",
  },
  {
    id: "11",
    name: "کلاب مرغ",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "210" }],
    categoryId: "snack",
  },
  {
    id: "12",
    name: "میان‌وعده رژیمی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "290" }],
    categoryId: "snack",
  },

  // ── گرم بر پایه قهوه ──

  {
    id: "13",
    name: "اسپرسو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "130" },
          { label: "دبل", amount: "135" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "95" },
          { label: "دبل", amount: "100" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "14",
    name: "آمریکانو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "135" },
          { label: "دبل", amount: "155" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "115" },
          { label: "دبل", amount: "135" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "15",
    name: "لاته",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "175" },
          { label: "دبل", amount: "195" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "165" },
          { label: "دبل", amount: "185" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "16",
    name: "موکا",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "190" },
          { label: "دبل", amount: "210" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "180" },
          { label: "دبل", amount: "200" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "17",
    name: "کارامل ماکیاتو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "190" },
          { label: "دبل", amount: "210" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "155" },
          { label: "دبل", amount: "175" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "18",
    name: "اسپرسو ماکیاتو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "165" },
          { label: "دبل", amount: "185" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "155" },
          { label: "دبل", amount: "175" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "19",
    name: "کورتادو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "175" },
          { label: "دبل", amount: "195" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "185" },
          { label: "دبل", amount: "165" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "20",
    name: "کاپوچینو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "175" },
          { label: "دبل", amount: "195" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "165" },
          { label: "دبل", amount: "185" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "21",
    name: "فلت وایت",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "175" },
          { label: "دبل", amount: "195" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "165" },
          { label: "دبل", amount: "185" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "22",
    name: "لاته دارچین عسل",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "260" },
          { label: "دبل", amount: "280" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "240" },
          { label: "دبل", amount: "260" },
        ],
      },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "23",
    name: "نسکافه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "195" }],
    categoryId: "hot-coffee",
  },
  {
    id: "24",
    name: "قهوه ترک",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "160" }],
    categoryId: "hot-coffee",
  },
  {
    id: "25",
    name: "قهوه یونانی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "hot-coffee",
  },
  {
    id: "82",
    name: "سیروپ اضافه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "40" }],
    categoryId: "hot-coffee",
  },

  // ── سرد بر پایه قهوه ──

  {
    id: "26",
    name: "آیس اسپرسو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "145" },
          { label: "دبل", amount: "150" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "110" },
          { label: "دبل", amount: "115" },
        ],
      },
    ],
    categoryId: "cold-coffee",
  },
  {
    id: "27",
    name: "آیس آمریکانو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "140" },
          { label: "دبل", amount: "160" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "130" },
          { label: "دبل", amount: "150" },
        ],
      },
    ],
    categoryId: "cold-coffee",
  },
  {
    id: "28",
    name: "آیس لاته",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "185" },
          { label: "دبل", amount: "205" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "175" },
          { label: "دبل", amount: "195" },
        ],
      },
    ],
    categoryId: "cold-coffee",
  },
  {
    id: "29",
    name: "آیس موکا",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "200" },
          { label: "دبل", amount: "220" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "190" },
          { label: "دبل", amount: "210" },
        ],
      },
    ],
    categoryId: "cold-coffee",
  },
  {
    id: "30",
    name: "آیس کارامل ماکیاتو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "200" },
          { label: "دبل", amount: "220" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "190" },
          { label: "دبل", amount: "210" },
        ],
      },
    ],
    categoryId: "cold-coffee",
  },

  {
    id: "31",
    name: "فراپه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "245" }],
    categoryId: "cold-coffee",
  },
  {
    id: "32",
    name: "آفوگاتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "220" }],
    categoryId: "cold-coffee",
  },
  {
    id: "33",
    name: "موکا چیلو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "270" }],
    categoryId: "cold-coffee",
  },
  {
    id: "34",
    name: "تونیک اسپرسو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "200" },
          { label: "دبل", amount: "220" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "190" },
          { label: "دبل", amount: "210" },
        ],
      },
    ],

    categoryId: "cold-coffee",
  },
  {
    id: "83",
    name: "سیروپ اضافه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "40" }],
    categoryId: "cold-coffee",
  },

  // ── نوشیدنی های گرم ──

  {
    id: "35",
    name: "هات چاکلت",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "200" }],
    categoryId: "hot-drinks",
  },
  {
    id: "36",
    name: "وایت چاکلت",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "210" }],
    categoryId: "hot-drinks",
  },
  {
    id: "37",
    name: "پینک چاکلت",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "195" }],
    categoryId: "hot-drinks",
  },
  {
    id: "38",
    name: "چای ماسالا",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "200" }],
    categoryId: "hot-drinks",
  },
  {
    id: "39",
    name: "چای ماسالا رژیمی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "hot-drinks",
  },
  {
    id: "40",
    name: "چای کرک",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "200" }],
    categoryId: "hot-drinks",
  },
  {
    id: "41",
    name: "پسته زعفران",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "220" }],
    categoryId: "hot-drinks",
  },
  {
    id: "42",
    name: "بیسکوییت کارامل",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "210" }],
    categoryId: "hot-drinks",
  },
  {
    id: "43",
    name: "ماچا لته با سیروپ دلخواه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "240" }],
    categoryId: "hot-drinks",
  },
  {
    id: "44",
    name: "ماچا لته",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "200" }],
    categoryId: "hot-drinks",
  },

  // ماکتیل ها
  {
    id: "45",
    name: "چری بری",
    description: "ترکیبی از میوه های قرمز",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "250" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "46",
    name: "موهیتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "230" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "47",
    name: "لیدی اسمارت",
    description: "ترکیبات: موز، توت فرنگی، بستنی وانیل، شکلات فندقی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "265" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "48",
    name: "پرپل",
    description: "ترکیبات: عصاره پرتقال، لیمو، پشن فروت، شاه توت، تخم شربتی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "220" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "49",
    name: "کوکونات",
    description: "ترکیبات: موز، خامه،عصاره نارگیل ،سیروپ نارگیل، پودر نارگیل",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "260" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "50",
    name: "نیل مِیل",
    description: "ترکیبات: آلبالو، کرن بری، توت فرنگی، عصاره انار",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "255" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "51",
    name: "هاوایی",
    description: "ترکیبات: آناناس، انبه، بلوبری، بلو کاراسائو",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "260" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "52",
    name: "بلو موهیتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "240" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "53",
    name: "آب طالبی",
    description: "آبمیوه طبیعی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "150" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "54",
    name: "آب هندوانه",
    description: "آبمیوه طبیعی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "150" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "55",
    name: "آیس ماچا لته با سیروپ دلخواه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  // {
  //   id: "56",
  //   name: "سیروپ اضافه",
  //   description: "",
  //   image: "/images/nil.webp",
  //   prices: [{ label: "", amount: "" }],
  //   categoryId: "mocktail-smoothie",
  // }, 
  {
    id: "57",
    name: "شرابه زعفران",
    description: "ترکیبات: عصاره زعفران،عرق نسترن، گلاب، بیدمشک، خاکشیر",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "200" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "58",
    name: "آیس تی نیل",
    description: "ترکیبات: هلو، سیب، چای خشک، پشن فروت، لیمو",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "220" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "59",
    name: "شرابه لیمو",
    description: "ترکیبات: لیمو، چای ترش، تخم شربتی، عرق شاطره",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "80",
    name: "آیس تی لیمو نعنا ",
    description: "لیمو ،چای ترش ،تخم شربتی،عرق شاطره",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "60",
    name: "آیس تی هلو",
    description: "ترکیبات: آب هلو، لیمو، چای سرد، یخ",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "190" }],
    categoryId: "traditional-iced-tea",
  },



  // میلک شیک ها 
  {
    id: "61",
    name: "دبل چاکلت",
    description: "ترکیبات: : بورانی،شکلات ،بستنی شکلاتی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "315" }],
    categoryId: "milkshakes",
  },
  {
    id: "62",
    name: "موز شکلات",
    description: "ترکیبات: میکس بستنی، شکلات، موز، فندق",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "320" }],
    categoryId: "milkshakes",
  },
  {
    id: "63",
    name: "بادام زمینی",
    description: "ترکیبات: کره بادام زمینی، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "320" }],
    categoryId: "milkshakes",
  },
  {
    id: "64",
    name: "تیرامیسو",
    description: "ترکیبات: بیسکویت مخصوص، بستنی، پودر قهوه",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "310" }],
    categoryId: "milkshakes",
  },
  {
    id: "65",
    name: "پسته",
    description: "ترکیبات: کره پسته، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "335" }],
    categoryId: "milkshakes",
  },
  {
    id: "66",
    name: "لوتوس",
    description: "ترکیبات: کره بیسکویت، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "310" }],
    categoryId: "milkshakes",
  },
  {
    id: "81",
    name: "توت فرنگی",
    description: "ترکیبات: توت فرنگی،بستنی وانیل",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "315" }],
    categoryId: "milkshakes",
  },
  {
    id: "67",
    name: "نوتلا",
    description: "ترکیبات: شکلات فندقی، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "310" }],
    categoryId: "milkshakes",
  },
  {
    id: "68",
    name: "وانیل",
    description: "ترکیبات: بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "300" }],
    categoryId: "milkshakes",
  },
  {
    id: "69",
    name: "تافی",
    description: "ترکیبات: کارامل، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "300" }],
    categoryId: "milkshakes",
  },
  {
    id: "70",
    name: "اسنیکرز",
    description: "ترکیبات: بستنی وانیلی، شکلات، کارامل، کره بادام زمینی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "320" }],
    categoryId: "milkshakes",
  },
  {
    id: "71",
    name: "آرامش",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "72",
    name: "سیب دارچین",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "73",
    name: "به",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "74",
    name: "چای سبز",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "75",
    name: "زنجبیل لیمو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "76",
    name: "بانو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "77",
    name: "سرماخوردگی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "78",
    name: "آویشن",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "170" }],
    categoryId: "herbal-tea",
  },
  {
    id: "79",
    name: "چای سیاه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "85" }],
    categoryId: "herbal-tea",
  },
];

export const INFO_CONTENT = {
about: {
  title: "درباره ما",
  text: "\n\nبه نیل کافه خوش آمدید. ☕\n\nدر نیل کافه تلاش می‌کنیم با سرو قهوه‌های باکیفیت، نوشیدنی‌های خاص و فضایی آرام و دلنشین، لحظاتی خوش و به‌یادماندنی برای شما رقم بزنیم.\n\nاز اینکه نیل کافه را برای سپری کردن اوقات خود انتخاب کرده‌اید، سپاسگزاریم و امیدواریم تجربه‌ای لذت‌بخش در کنار ما داشته باشید.\n\n🕘 ساعت کاری:\nهمه‌روزه از ساعت ۷:۰۰ صبح تا ۱۲:۰۰ شب\n\n",
},};

// ─── ۴) تنظیمات عمومی کافه ───────────────────────────────────
export const CAFE_CONFIG = {
  name: "نیل کافه",
  phone: "02112345678", // برای دکمه تماس (بدون خط تیره)
  primaryColor: "#1B9AD2", // رنگ اصلی برند
  backgroundColor: "#F0F7FF", // رنگ پس‌زمینه
};

// ─── ۵) آیتم‌های منوی کشویی (سایدبار) ───────────────────────
// id: 'menu' و 'share' رفتار ویژه دارن، بقیه باید کلیدی از INFO_CONTENT باشن
export const DRAWER_ITEMS = [
  { id: "menu", label: "منو", icon: "⊞" },
  { id: "about", label: "درباره ما", icon: "ℹ" },
  { id: "share", label: "معرفی به دوستان", icon: "↗" },
  // { id: "rules", label: "قوانین و مقررات", icon: "📖" },
  // { id: "complaint", label: "ثبت شکایت", icon: "📢" },
];
