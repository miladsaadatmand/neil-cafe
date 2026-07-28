# منوی نیل کافه

## ساختار پروژه

```
neil-cafe/
├── index.html                     ← HTML اصلی (نقطه ورود مرورگر)
├── package.json / vite.config.js  ← تنظیمات پروژه
└── src/
    ├── main.jsx                   ← JavaScript اصلی (رندر React روی صفحه)
    ├── App.jsx                    ← چیدمان کلی صفحه و state
    ├── data/
    │   └── menuData.js            ← 📋 محتوای منو (اینجا رو ویرایش کن)
    ├── styles/
    │   └── App.css                ← 🎨 همه‌ی CSS پروژه
    ├── utils/
    │   └── formatPrice.js         ← فرمت قیمت به تومان
    └── components/
        ├── Header.jsx             ← هدر بالای صفحه
        ├── CategorySidebar.jsx    ← نوار دسته‌بندی کناری
        ├── MenuCard.jsx           ← کارت هر محصول
        ├── EmptyState.jsx         ← حالت "محصولی یافت نشد"
        ├── SidebarDrawer.jsx      ← منوی کشویی (☰)
        ├── ProductModal.jsx       ← مودال جزئیات محصول
        ├── InfoModal.jsx          ← مودال درباره ما / قوانین / شکایت
        └── ContactFab.jsx         ← دکمه شناور تماس
```

## چی رو کجا تغییر بدم؟

| می‌خوام چی رو عوض کنم؟                          | فایل                                  |
| ------------------------------------------------ | -------------------------------------- |
| محصولات، قیمت‌ها، دسته‌بندی‌ها                    | `src/data/menuData.js`                 |
| متن «درباره ما»، «قوانین»، «ثبت شکایت»            | `src/data/menuData.js` (`INFO_CONTENT`)|
| نام کافه، شماره تماس، رنگ اصلی                    | `src/data/menuData.js` (`CAFE_CONFIG`) |
| رنگ‌بندی، فاصله‌ها، فونت، انیمیشن                  | `src/styles/App.css`                   |
| ظاهر یک بخش خاص (مثلاً فقط کارت محصول)            | فایل مربوطه در `src/components/`       |

## اجرای پروژه

```bash
npm install
npm run dev
```

سپس آدرسی که ترمینال نشون می‌ده (معمولاً `http://localhost:5173`) رو در مرورگر باز کن.

برای گرفتن نسخه‌ی نهایی برای آپلود روی هاست:

```bash
npm run build
```

خروجی در پوشه‌ی `dist/` ساخته می‌شه.
