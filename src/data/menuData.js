// ═══════════════════════════════════════════════════════════════
// 📋 فایل داده‌های منو — نیل کافه
// این تنها فایلی‌ست که برای تغییر محتوای منو لازمه ویرایش کنی.
// ═══════════════════════════════════════════════════════════════

// ─── ۱) دسته‌بندی‌ها ──────────────────────────────────────────
// هر دسته یک آیتم در نوار کناری می‌سازه.
// id: شناسه یکتا (باید با categoryId آیتم‌های منو مطابقت داشته باشه)
export const CATEGORIES = [
  { id: "hot-coffee", name: "گرم بر پایه قهوه", emoji: "☕" },
  { id: "sweet-cafe", name: "سوییت کافی", emoji: "🍰" },
  { id: "cold-coffee", name: "سرد بر پایه قهوه", emoji: "🧊" },
  { id: "spanish-latte", name: "اسپنیش لاته", emoji: "🥛" },
  { id: "matcha", name: "ماچالاورز", emoji: "🍵" },
];

// ─── ۲) آیتم‌های منو ──────────────────────────────────────────
// prices: آرایه‌ای از { label, amount } — می‌تونه یک یا چند قیمت داشته باشه
// categoryId: باید دقیقا با یکی از id های بالا یکی باشه
export const MENU_ITEMS = [
  // ── گرم بر پایه قهوه ──
  {
    id: "1",
    name: "اسپرسو پریمیوم",
    description: "قهوه تخصصی با دانه‌های انتخابی، تلخی متعادل و عطر بی‌نظیر",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80",
    prices: [
      { label: "۱۰۰ گرم", amount: 225000 },
      { label: "۶۰/۴۰", amount: 215000 },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "2",
    name: "قهوه تک‌خواستگاه",
    description: "ویلارزیتا از ارتفاعات کلمبیا، فراوری طبیعی با طعم میوه‌ای",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
    prices: [{ label: "یک نفره", amount: 500000 }],
    categoryId: "hot-coffee",
  },



  {
    id: "3",
    name: "لاته",
    description: "اسپرسو، شیر فوم داده شده با بافت کرمی و لطیف",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&q=80",

    priceGroups: [
      {
        title: "عربیکا",
        prices: [
          { label: "سینگل", amount: 185000 },
          { label: "دبل", amount: 210000 },
        ],
      },
      {
        title: "روبوستا",
        prices: [
          { label: "سینگل", amount: 170000 },
          { label: "دبل", amount: 195000 },
        ],
      },
    ],

    categoryId: "hot-coffee",
  },
  {
    id: "4",
    name: "کاپوچینو",
    description: "اسپرسو با فوم شیر غلیظ و پودر کاکائو روی آن",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80",
    prices: [
      { label: "متوسط", amount: 175000 },
      { label: "بزرگ", amount: 200000 },
    ],
    categoryId: "hot-coffee",
  },
  {
    id: "5",
    name: "فلت وایت",
    description: "دو شات اسپرسو با میکرو فوم شیر، قوی‌تر از لاته",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
    prices: [{ label: "استاندارد", amount: 195000 }],
    categoryId: "hot-coffee",
  },

  // ── سوییت کافی ──
  {
    id: "6",
    name: "موکا شکلاتی",
    description: "ترکیب اسپرسو و شکلات تلخ با شیر بخار داده شده",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&q=80",
    prices: [
      { label: "متوسط", amount: 220000 },
      { label: "بزرگ", amount: 245000 },
    ],
    categoryId: "sweet-cafe",
  },
  {
    id: "7",
    name: "کارامل ماکیاتو",
    description: "وانیل، شیر بخار، اسپرسو و سس کارامل",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80",
    prices: [
      { label: "متوسط", amount: 235000 },
      { label: "بزرگ", amount: 260000 },
    ],
    categoryId: "sweet-cafe",
  },
  {
    id: "8",
    name: "وایت موکا",
    description: "شکلات سفید با اسپرسو و شیر بخار، ملایم و شیرین",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
    prices: [{ label: "متوسط", amount: 230000 }],
    categoryId: "sweet-cafe",
  },

  // ── سرد بر پایه قهوه ──
  {
    id: "9",
    name: "آیس لاته",
    description: "اسپرسو سرد با شیر و یخ، رفرش‌کننده و خوشمزه",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    prices: [
      { label: "متوسط", amount: 195000 },
      { label: "بزرگ", amount: 225000 },
    ],
    categoryId: "cold-coffee",
  },
  {
    id: "10",
    name: "کولد برو",
    description: "قهوه دم‌کشیده سرد به مدت ۱۲ ساعت، طعم ملایم و غنی",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
    prices: [{ label: "استاندارد", amount: 245000 }],
    categoryId: "cold-coffee",
  },
  {
    id: "11",
    name: "فراپه",
    description: "اسپرسو، شیر، یخ و کرم فرم گرفته، خامه‌ای و خنک",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80",
    prices: [
      { label: "متوسط", amount: 270000 },
      { label: "بزرگ", amount: 295000 },
    ],
    categoryId: "cold-coffee",
  },

  // ── اسپنیش لاته ──
  {
    id: "12",
    name: "اسپنیش لاته کلاسیک",
    description: "اسپرسو با شیر تغلیظ‌شده و شیر بخار، طعم شیرین طبیعی",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=500&q=80",
    prices: [
      { label: "گرم", amount: 210000 },
      { label: "سرد", amount: 225000 },
    ],
    categoryId: "spanish-latte",
  },
  {
    id: "13",
    name: "اسپنیش وانیل",
    description: "اسپنیش لاته با طعم وانیل و شیر تغلیظ‌شده",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&q=80",
    prices: [
      { label: "گرم", amount: 225000 },
      { label: "سرد", amount: 240000 },
    ],
    categoryId: "spanish-latte",
  },

  // ── ماچالاورز ──
  {
    id: "14",
    name: "ماچا لاته",
    description: "پودر ماچای ژاپنی اصل با شیر بخار، سبز و سرشار از آنتی‌اکسیدان",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&q=80",
    prices: [
      { label: "گرم", amount: 240000 },
      { label: "سرد", amount: 255000 },
    ],
    categoryId: "matcha",
  },
  {
    id: "15",
    name: "ماچا فراپه",
    description: "ماچا، شیر، یخ و خامه، خنک و سرشار از انرژی",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
    prices: [{ label: "بزرگ", amount: 280000 }],
    categoryId: "matcha",
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
