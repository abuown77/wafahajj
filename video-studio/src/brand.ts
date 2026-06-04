// هوية وفاء الحج البصرية — مصدر واحد للألوان والنصوص الثابتة
export const COLORS = {
  gold: '#C89B3C',
  goldLight: '#E7C77A',
  green: '#1E4D2B',
  greenDeep: '#143820',
  beige: '#F5F1E8',
  ink: '#2C2C2C',
  burgundy: '#8B2D2D',
};

export const BRAND = {
  nameEn: 'Wafa Hajj',
  nameAr: 'وفاء الحج',
  taglineEn: 'A promise kept. A duty fulfilled.',
  taglineAr: 'وعدٌ يُوفى، وفريضةٌ تُؤدّى.',
  website: 'wafahajj.com',
  telegram: '@wafahajj',
};

// تدرّج ذهبي معدني للنصوص البطلة
export const GOLD_GRADIENT = `linear-gradient(180deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 55%, #A87F2C 100%)`;
// خلفية خضراء عميقة بإضاءة لطيفة
export const GREEN_BG = `radial-gradient(120% 120% at 50% 35%, ${COLORS.green} 0%, ${COLORS.greenDeep} 70%, #0E2916 100%)`;
