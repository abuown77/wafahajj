import {loadFont as loadPlayfair} from '@remotion/google-fonts/PlayfairDisplay';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {loadFont as loadArabic} from '@remotion/google-fonts/IBMPlexSansArabic';

export const playfair = loadPlayfair('normal', {weights: ['600', '700']});
export const inter = loadInter('normal', {weights: ['400', '500', '600']});
export const arabic = loadArabic('normal', {weights: ['400', '600', '700']});

export const FONT_PLAYFAIR = playfair.fontFamily;
export const FONT_INTER = inter.fontFamily;
export const FONT_ARABIC = arabic.fontFamily;
