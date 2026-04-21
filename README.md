# Wafa Hajj — Site

مجلد كود موقع **wafahajj.com**. المرحلة الحالية: ما قبل استلام Design Handoff من Claude Design.

---

## الحالة الآن

✅ هيكل المجلد جاهز
✅ نظام التصميم الأولي (`styles/design-system.css`) مبني على الألوان والخطوط المحددة في `Brief_for_Claude_Design.md`
✅ صفحة هبوط عربية مرجعية (`index-ar-reference.html`) للمراجعة الداخلية — نصوصها مأخوذة حرفياً من `Wafa_Hajj_Landing_Page_AR.md`

⏳ **بانتظار**: handoff من Claude Design (هوية بصرية، شعار، صور hero، تصميم نهائي)
⏳ **بانتظار**: قرار الـ stack النهائي (Astro أو HTML خالص)
⏳ **بانتظار**: الترجمات الثلاث (EN / SE / NO) من Claude Cowork
⏳ **بانتظار**: رقم WhatsApp النهائي

---

## كيف تراجع الصفحة العربية

افتح `index-ar-reference.html` مباشرة في المتصفح (double-click). لا حاجة لـ build أو server.

الصفحة تستعرض كامل البنية المقترحة:
Hero → Problem → Solution → Proof → Pricing → Process → Final CTA → Footer

---

## الأصول المطلوبة من المالك

ضع الملفات التالية في `assets/images/` بنفس الأسماء ليظهرا تلقائياً في قسم الإثبات:

| الملف المتوقّع | الوصف |
|---|---|
| `certificate.jpg` | شهادة حج البدل الرسمية (ذهبية) |
| `hady-receipt.jpg` | صك الهدي الرسمي (الصورة الزرقاء) |
| `arafa-thumb.jpg` | ثمبنيل من فيديو يوم عرفة |

أسماء إضافية ستُطلب عند بناء النسخ الدولية: `founder-portrait.jpg`، `hero-makkah-dawn.jpg` (إن وُجدت).

---

## هيكل المجلد

```
wafahajj/
├── index.html                 ← صفحة الهبوط الرئيسية (شاشة واحدة + CTA واتساب)
├── index-ar-reference.html    ← المسودة العربية المفصّلة للمراجعة الداخلية
├── styles/
│   └── design-system.css      ← متغيرات CSS (ألوان، خطوط، مسافات)
├── assets/
│   ├── images/                ← يضع المالك الأصول البصرية هنا
│   └── fonts/                 ← اختياري (الخطوط تُحمَّل من Google Fonts حالياً)
├── docs/                      ← Briefs محلية فقط (مُتجاهَلة في .gitignore)
├── CLAUDE.md                  ← ذاكرة المشروع ومتابعة العمل
├── README.md
└── .gitignore
```

---

## بعد استلام Design Handoff — الخطوات التالية

المرحلة القادمة (اليوم 2–4 من الجدول الزمني):

1. **اختيار stack**: Astro (إن كانت الترجمات جاهزة ونحتاج i18n نظيف) أو HTML خالص (إن كانت المهلة ضيقة)
2. **ترقية نظام التصميم** بناءً على handoff (قد تُعدّل بعض المتغيرات)
3. **بناء 4 صفحات الدول**:
   - `/us` (EN)
   - `/ca` (EN)
   - `/se` (SE + EN toggle)
   - `/no` (NO + EN toggle)
4. **صفحات دعم**: `/about`، `/faq`، `/contact`
5. **تركيب القياس**: Google Analytics 4 + UTM parameters لكل صفحة
6. **WhatsApp integration**: أزرار بـ preset messages لكل دولة
7. **SEO**: meta tags، Open Graph، Twitter Cards، sitemap.xml، robots.txt، schema.org (Service)
8. **النشر**: Cloudflare Pages أو Vercel، ربط wafahajj.com، SSL
9. **اختبار Lighthouse** (الهدف: ≥95 في كل الأقسام)

---

## القيود (من `Brief_for_Claude_Code.md`)

- ❌ لا قواعد بيانات، لا backend، لا تسجيل دخول
- ❌ لا chatbots، لا نماذج دفع (القناة = واتساب حصراً)
- ❌ لا analytics غير Google/Cloudflare
- ❌ لا خدمات مدفوعة بدون إذن مسبق
- ✅ الصفحة الواحدة ≤ 500KB إجمالي
- ✅ WCAG AA على الأقل
- ✅ Lighthouse ≥ 95

---

## القيود التحريرية (من `Wafa_Hajj_Master_Taskboard.md`)

- لا عقود شرعية أو فتاوى — المرجع الشرعي هو مالك المشروع حصراً
- لا صور أشخاص غير الأصول المعتمدة من المالك
- لا ذكر لأسعار أقل من $2,000 للحج أو $150 للعمرة
- التوازن العاطفي: الخدمة تمكين من الوفاء، لا استثمار في الحزن

---

*آخر تحديث: 21 أبريل 2026*
