# CLAUDE.md — ذاكرة مشروع وفاء الحج

> هذا الملف يُقرأ في بداية كل محادثة جديدة.
> يُحدّث باستمرار مع تقدم العمل.
> **آخر تحديث**: 22 أبريل 2026 — اعتماد AR handoff + تحديث الأسعار إلى $1,990 + تصميم Pledge و Hadith Card

---

## 🎯 المشروع في سطرين

**Wafa Hajj** — خدمة حج وعمرة بالنيابة عن المتوفين للمسلمين في الدول الغربية (US/CA/SE/NO). الإطلاق **السبت 26 أبريل 2026**.

---

## 📌 الثوابت (لا تتغيّر)

### التواصل
- **WhatsApp**: `+1 (234) 280-0554` → `https://wa.me/12342800554`
- **Domain**: `wafahajj.com` — ✅ مسجَّل في Cloudflare Registrar (21 أبريل 2026)
  - انتهاء: **21 أبريل 2027**
  - Nameservers: `LARA.NS.CLOUDFLARE.COM`, `REMY.NS.CLOUDFLARE.COM` (نشطة)
  - DNSSEC: غير مفعّل (سنفعّله لاحقاً)
- **Registrar Owner Email**: `abuown@gmail.com`
- **الاستضافة المختارة**: Cloudflare Pages (لم يُربط بعد — بانتظار أول build)
- **البريد الموحَّد المخطَّط**: `info@wafahajj.com` عبر Cloudflare Email Routing → Gmail
- **القناة الأساسية**: WhatsApp حصراً (لا نماذج دفع، لا chatbot، لا تسجيل دخول)

### الأسعار (لا تُخفَّض)
- **حج البدل**: $1,990 (شامل) — *محدَّث 22 أبريل 2026*
- **عمرة البدل**: $150 (شامل)

### الدفع
- Citibank أمريكي عبر Payoneer
- تحويل بنكي دولي

### الأسواق
- 🇺🇸 أمريكا (EN)
- 🇨🇦 كندا (EN)
- 🇸🇪 السويد (SE + EN)
- 🇳🇴 النرويج (NO + EN)

### الهوية البصرية
- `#C89B3C` ذهبي · `#1E4D2B` أخضر داكن · `#F5F1E8` بيج · `#2C2C2C` نص · `#8B2D2D` برغندي
- **خطوط (3 فقط)**: IBM Plex Sans (EN body) · IBM Plex Sans Arabic (AR body) · Playfair Display (headlines — EN only)
- محذوفة: Cormorant Garamond, JetBrains Mono, Italiana

---

## 📂 مسارات المشروع

| الموقع | الغرض |
|---|---|
| `C:\Users\mubar\wafahajj\` | **المجلد الرئيسي الوحيد** — الكود + الوثائق |
| `C:\Users\mubar\wafahajj\docs\` | الـ Briefs والمستندات الاستراتيجية (محلية فقط — في `.gitignore`) |
| `https://github.com/abuown77/wafahajj` | المستودع العام (الكود فقط، بلا docs) |

**ملاحظة**: تم توحيد المسار في 2026-04-21 — المجلد العربي القديم `D:\نيابة\وفاء للحج\` أُلغي بالكامل.

---

## 🗂️ مكتبة الأدوار (من Master Taskboard)

| الأداة | دورها |
|---|---|
| **Claude Code** (أنا) | البناء التقني، الموقع، GA4، WhatsApp integration |
| **Claude Design** | الشعار، الهوية، صفحات الهبوط، السوشيال |
| **Claude Cowork** | WhatsApp Business، الشبكة الدافئة، الترجمات، المتابعة |
| **المالك** | القرارات الشرعية، المرجعية، الأصول الأصلية |

---

## ✅ ما أُنجز

- [x] قراءة جميع ملفات الـ Briefs والمسودة العربية
- [x] بناء نظام التصميم الأولي (`styles/design-system.css`)
- [x] بناء الصفحة العربية المرجعية المفصّلة (`index-ar-reference.html`) — 8 أقسام كاملة
- [x] بناء صفحة الهبوط الرئيسية الموجزة (`index.html`) — شاشة واحدة، CTA واحد
- [x] ربط رقم واتساب الحقيقي `+1 (234) 280-0554` في الصفحتين مع رسالة عربية معبّأة
- [x] كتابة README.md + .gitignore
- [x] إنشاء Git repo ودفعه إلى GitHub (`abuown77/wafahajj`) — public
- [x] توحيد المجلد في `C:\Users\mubar\wafahajj\` وحذف المجلد العربي القديم
- [x] شراء نطاق `wafahajj.com` من Cloudflare Registrar (21 أبريل 2026، سنة كاملة)
- [x] اعتماد Cloudflare Pages كمنصة استضافة

---

## ⏳ ما بانتظاره من المالك

- [ ] وضع الأصول البصرية في `site/assets/images/`:
  - `certificate.jpg` (شهادة حج البدل)
  - `hady-receipt.jpg` (صك الهدي)
  - `arafa-thumb.jpg` (ثمبنيل فيديو عرفة)
- [ ] **Handoff من Claude Design** (هوية، شعار، تصميم نهائي)
- [ ] **الترجمات من Claude Cowork**: EN / SE / NO
- [ ] ربط Cloudflare Pages بمستودع GitHub (بعد أول build)
- [ ] ربط النطاق `wafahajj.com` بمشروع Pages + شهادة SSL
- [ ] تفعيل Cloudflare Email Routing لـ `info@wafahajj.com`
- [ ] تفعيل DNSSEC (أمان إضافي)

---

## 🚀 المرحلة التالية (بعد الـ handoff)

1. **تحديث نظام التصميم** بناءً على ما يرسله Claude Design
2. **بناء 4 صفحات الدول**: `/us`، `/ca`، `/se`، `/no` — كل واحدة برسالة WhatsApp مُعبّأة بلغة الدولة
3. **صفحات دعم**: `/about`، `/faq`، `/contact`
4. **القياس**: Google Analytics 4 + UTM لكل دولة
5. **SEO**: meta tags، Open Graph، sitemap.xml، robots.txt، schema.org Service
6. **النشر**: Cloudflare Pages أو Vercel → ربط wafahajj.com → SSL تلقائي
7. **Lighthouse target**: ≥ 95 في كل الأقسام
8. **Facebook Pixel**: جاهز للتفعيل بعد أول عقد

---

## 📅 الجدول الزمني المتبقي

| اليوم | التاريخ | المهام المتوقعة |
|---|---|---|
| اليوم 2 | أربعاء 22 أبريل | استلام handoff، اختيار stack، بدء صفحات الدول |
| اليوم 3 | خميس 23 أبريل | نشر 4 صفحات + GA4 + UTM |
| اليوم 4 | جمعة 24 أبريل | WhatsApp integration كامل + نموذج اتصال + اختبار |
| اليوم 5 | **السبت 26 أبريل — الإطلاق** | bug fixes + تحسين سرعة + pixel |

---

## 🚨 قيود صارمة

### تقنية (من Brief_for_Claude_Code.md)
- ❌ لا قواعد بيانات، لا backend، لا تسجيل دخول
- ❌ لا خدمات مدفوعة بدون إذن
- ❌ لا analytics غير Google/Cloudflare
- ❌ لا chatbots أو نماذج دفع (القناة = واتساب حصراً)
- ✅ كل صفحة ≤ 500KB إجمالي
- ✅ WCAG AA كحد أدنى
- ✅ Lighthouse ≥ 95

### تحريرية (من Master Taskboard)
- ❌ لا فتاوى أو عقود شرعية — المرجع الشرعي = المالك حصراً
- ❌ لا صور أشخاص خارج الأصول المعتمدة
- ❌ لا أسعار أقل من $2,000 حج أو $150 عمرة
- ❌ لا رموز تجارية فجة للكعبة/الحرم
- ✅ التوازن العاطفي: تمكين من الوفاء، لا استثمار في الحزن

### تصميمية (من Brief_for_Claude_Design.md)
- ❌ لا أيقونات رمزية للكعبة — صور حقيقية فقط
- ❌ لا نقوش إسلامية زخرفية مبالغة
- ❌ لا تدرجات صارخة أو ألوان فاقعة
- ❌ لا خطوط رقعة/ديواني إلا في الشعار
- ✅ Typography-first، whitespace كثيف، بساطة موقرة

---

## 📝 سجل القرارات

| التاريخ | القرار | السبب |
|---|---|---|
| 2026-04-21 | العمل بـ HTML/CSS خالص مؤقتاً، تأجيل اختيار Astro | ننتظر handoff من Claude Design قبل الالتزام بـ stack |
| 2026-04-21 | البدء بالمسودة العربية كمرجع داخلي | طُلب من المالك — للمراجعة قبل الترجمة |
| 2026-04-21 | نسخة العمل في `C:\Users\mubar\wafahajj\` | Git على Windows لا يدعم المسارات العربية |
| 2026-04-21 | GitHub repo: `abuown77/wafahajj` public | اختيار المالك |
| 2026-04-21 | صفحة `index.html` مختصرة بشاشة واحدة | طلب المالك: لا أقسام، CTA واحد لواتساب |
| 2026-04-21 | توحيد المجلد في `C:\Users\mubar\wafahajj\` + حذف `D:\نيابة\وفاء للحج\` | طلب المالك: مصدر واحد للحقيقة، لا ازدواج |
| 2026-04-21 | الـ Briefs في `docs/` محلياً فقط (في `.gitignore`) | الـ repo عام — الـ Briefs تحوي معلومات مالية/استراتيجية |
| 2026-04-21 | اعتماد Astro كـ stack نهائي | i18n نظيف + type-safe content + 0 JS افتراضياً |
| 2026-04-21 | شراء `wafahajj.com` من Cloudflare Registrar ($10.44/سنة at-cost) | أرخص سعر ثابت + DNS + CDN + email في لوحة واحدة |
| 2026-04-21 | Cloudflare Pages كمنصة استضافة | أداء CDN متفوق في US/CA/SE/NO + مجاني + تكامل مع النطاق |

---

## 🧾 الملفات المرجعية الأساسية

في `C:\Users\mubar\wafahajj\docs\` (محلياً فقط — مُتجاهلة في Git):
- `Brief_for_Claude_Code.md` — التعليمات التقنية
- `Brief_for_Claude_Design.md` — نظام التصميم
- `Brief_for_Claude_Cowork.md` — تنسيق المحتوى والترجمة
- `Wafa_Hajj_Landing_Page_AR.md` — النص العربي المعتمد
- `Wafa_Hajj_Master_Taskboard.md` — توزيع الأدوار والجدول

---

*لتحديث هذا الملف: عدّل القسم المناسب، أو أضف إدخالاً جديداً في "سجل القرارات" أو "ما أُنجز".*
