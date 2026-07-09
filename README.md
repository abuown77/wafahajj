# Wafa Hajj — Site

كود موقع **wafahajj.com** — خدمة عمرة/حج البدل عن المتوفّين للمسلمين في الغرب (US/CA/SE/NO).
الموقع **حيّ** على https://wafahajj.com (Astro static على Cloudflare Pages).

---

## الحالة الآن

✅ الموقع منشور حيّاً على https://wafahajj.com
✅ نظام تصميم كامل (`src/styles/design-system.css`) — الهوية المعتمدة (ذهبي/أخضر داكن/بيج)
✅ صفحة هبوط واحدة متعدّدة اللغات (EN / AR / SV / NB) عبر تبديل لغة فوري
✅ نموذج طلب على الموقع + دفع بالبطاقة (Visa/Mastercard) عبر Fourthwall
✅ قياس: Google Analytics 4 + Google Ads + Meta Pixel + عدّاد مراحل (funnel)

---

## المنتجات والأسعار

- **عمرة البدل**: $199 (المنتج الأساسي، متاح على مدار العام)
- **حج البدل**: $1,990 (للموسم القادم)

## قنوات التواصل

- **Telegram**: [@wafahajj](https://t.me/wafahajj)
- **WhatsApp**: [+1 (234) 280-0554](https://wa.me/12342800554)

---

## التشغيل محلياً

```
npm install
npm run dev      # معاينة محلية
npm run build    # بناء الإنتاج إلى dist/
```

النشر الحالي: رفع مباشر عبر wrangler إلى Cloudflare Pages (`npm run build` ثم `wrangler pages deploy dist --project-name wafahajj`).

---

## هيكل المجلد

```
wafahajj/
├── src/
│   ├── pages/          ← index / privacy / 404
│   ├── layouts/        ← BaseLayout (يحوي الخطوط + عدّادات القياس)
│   ├── components/     ← أقسام الصفحة + مكوّنات SEO + عناصر واجهة
│   ├── content/        ← site.json (كل النصوص، 4 لغات) — مصدر المحتوى الوحيد
│   ├── config/         ← site.ts (الثوابت: الأسعار، الروابط، النموذج)
│   ├── lib/            ← i18n + قراءة المحتوى
│   └── styles/         ← design-system.css
├── public/             ← أصول ثابتة (favicon، og، proof/)
├── docs/               ← وثائق داخلية محلية فقط (مُتجاهَلة في .gitignore)
├── CLAUDE.md           ← ذاكرة المشروع ومتابعة العمل
└── README.md
```

---

## القيود التحريرية

- لا عقود شرعية أو فتاوى — المرجع الشرعي هو مالك المشروع حصراً
- لا صور أشخاص غير الأصول المعتمدة من المالك
- الأسعار لا تُخفَّض دون سعرها المعتمد ($199 عمرة / $1,990 حج)
- التوازن العاطفي: الخدمة تمكين من الوفاء، لا استثمار في الحزن

---

*آخر تحديث: 9 يوليو 2026*
