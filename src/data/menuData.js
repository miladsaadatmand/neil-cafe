export const CATEGORIES = [
  { id: "breakfast", name: "صبحانه", emoji: "🍳" },
  { id: "snack", name: "میان‌وعده", emoji: "🥪" },
  { id: "hot-coffee", name: "قهوه های گرم", emoji: "☕" },
  { id: "cold-coffee", name: "قهوه های سرد", emoji: "🧋" },
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
    prices: [{ label: "قیمت:", amount: "100000" }],
    categoryId: "breakfast",
  },
  {
    id: "2",
    name: "املت مخصوص نیل",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },
  {
    id: "3",
    name: "نیمرو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },
  {
    id: "4",
    name: "سوسیس تخم مرغ",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },
  {
    id: "5",
    name: "پنکیک",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },
  {
    id: "6",
    name: "وافل",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },
  {
    id: "7",
    name: "صبحانه فیت",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "breakfast",
  },

  // ── میان‌وعده ──

  {
    id: "8",
    name: "سیب زمینی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "snack",
  },
  {
    id: "9",
    name: "سیب زمینی ویژه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "snack",
  },
  {
    id: "10",
    name: "کلاب ژامبون",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "snack",
  },
  {
    id: "11",
    name: "کلاب مرغ",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "snack",
  },
  {
    id: "12",
    name: "میان‌وعده رژیمی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
    prices: [{ label: "", amount: "" }],
    categoryId: "hot-coffee",
  },
  {
    id: "24",
    name: "قهوه ترک",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "hot-coffee",
  },
  {
    id: "25",
    name: "قهوه یونانی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "hot-coffee",
  },  // ── سرد بر پایه قهوه ──

  {
    id: "26",
    name: "آیس اسپرسو",
    description: "",
    image: "/images/nil.webp",
    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: "" },
          { label: "دبل", amount: "" },
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
    prices: [{ label: "", amount: "" }],
    categoryId: "cold-coffee",
  },
  {
    id: "32",
    name: "آفوگاتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "cold-coffee",
  },
  {
    id: "33",
    name: "موکا چیلو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "cold-coffee",
  },
  {
    id: "34",
    name: "تونیک اسپرسو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "cold-coffee",
  },
  {
    id: "35",
    name: "چری بری",
    description: "ترکیبی از میوه های قرمز",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "36",
    name: "موهیتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "38",
    name: "لیدی اسمارت",
    description: "ترکیبات: موز، توت فرنگی، بستنی وانیل، شکلات فندقی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "39",
    name: "پرپل",
    description: "ترکیبات: عصاره پرتقال، لیمو، پشن فروت، شاه توت، تخم شربتی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "40",
    name: "کوکونات",
    description: "ترکیبات: موز، خامه، سیروپ نارگیل، پودر نارگیل",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "41",
    name: "نیل میل",
    description: "ترکیبات: آلبالو، کرن بری، توت فرنگی، عصاره انار",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "42",
    name: "هاوایی",
    description: "ترکیبات: آناناس، انبه، بلوبری، بلو کاراسائو",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "43",
    name: "بلو موهیتو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "44",
    name: "آب طالبی",
    description: "آبمیوه طبیعی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "45",
    name: "آب هندوانه",
    description: "آبمیوه طبیعی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "46",
    name: "آیس ماچا لاته",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  },
  {
    id: "47",
    name: "سیروپ اضافه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "mocktail-smoothie",
  }, {
    id: "48",
    name: "شربت زعفران",
    description: "ترکیبات: عصاره زعفران، گلاب، بیدمشک، خاکشیر",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "49",
    name: "آیس تی نیل",
    description: "ترکیبات: هلو، سیب، چای خشک، پشن فروت، لیمو",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "50",
    name: "شرابه لیمو",
    description: "ترکیبات: لیمو، چای ترش، تخم شربتی، عرق شاطره",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "51",
    name: "آیس تی هلو",
    description: "ترکیبات: آب هلو، لیمو، چای سرد، یخ",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "traditional-iced-tea",
  },
  {
    id: "52",
    name: "دبل چاکلت",
    description: "ترکیبات: پودر شکلات، بستنی شکلاتی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "53",
    name: "موز شکلات",
    description: "ترکیبات: میکس بستنی، شکلات، موز، فندق",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "54",
    name: "بادام زمینی",
    description: "ترکیبات: کره بادام زمینی، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "55",
    name: "تیرامیسو",
    description: "ترکیبات: بیسکویت مخصوص، بستنی، پودر قهوه",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "56",
    name: "پسته",
    description: "ترکیبات: کره پسته، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "57",
    name: "لوتوس",
    description: "ترکیبات: کره بیسکویت، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "58",
    name: "نوتلا",
    description: "ترکیبات: شکلات فندقی، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "59",
    name: "وانیل",
    description: "ترکیبات: بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "60",
    name: "تافی",
    description: "ترکیبات: کارامل، بستنی وانیلی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "61",
    name: "اسنیکرز",
    description: "ترکیبات: بستنی وانیلی، شکلات، کارامل، کره بادام زمینی",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "milkshakes",
  },
  {
    id: "62",
    name: "آرامش",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "63",
    name: "سیب دارچین",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "64",
    name: "به",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "65",
    name: "چای سبز",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "66",
    name: "زنجبیل لیمو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "67",
    name: "بانو",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "68",
    name: "سرماخوردگی",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "69",
    name: "آویشن",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
  {
    id: "70",
    name: "چای سیاه",
    description: "",
    image: "/images/nil.webp",
    prices: [{ label: "", amount: "" }],
    categoryId: "herbal-tea",
  },
];

// ─── ۳) محتوای صفحات اطلاعاتی (منوی کشویی) ─────────────────────
// از \n برای رفتن به خط بعد داخل text استفاده کن.
export const INFO_CONTENT = {
  about: {
    title: "درباره ما",
    text: "نیل کافه با هدف ارائه بهترین تجربه قهوه‌نوشی در فضایی دنج و آرام تأسیس شده است.\n\nما از دانه‌های قهوه تخصصی از بهترین مزارع دنیا استفاده می‌کنیم.\n\nساعت کاری: روزهای هفته ۸ صبح تا ۱۱ شب\nتلفن: ۰۲۱-۱۲۳۴۵۶۷۸",
  },
  rules: {
    title: "قوانین و مقررات",
    text: "۱. رزرو میز حداقل ۲ ساعت قبل از ورود\n۲. رعایت آرامش دیگران\n۳. هر میز حداکثر ۲ ساعت\n۴. پرداخت صورت‌حساب پیش از ترک میز الزامی است\n۵. ورود با حیوانات خانگی ممنوع است\n۶. سیگار در فضای داخلی ممنوع است",
  },
  complaint: {
    title: "ثبت شکایت",
    text: "نظرات شما برای ما ارزشمند است.\n\n📧 ایمیل: info@neilcafe.ir\n📞 تلفن: ۰۲۱-۱۲۳۴۵۶۷۸\n📱 اینستاگرام: @l_cafe\n\nدر اسرع وقت پاسخگو خواهیم بود.",
  },
};

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
  { id: "rules", label: "قوانین و مقررات", icon: "📖" },
  { id: "complaint", label: "ثبت شکایت", icon: "📢" },
];
