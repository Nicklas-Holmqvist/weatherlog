import { createTheme } from '@material-ui/core';

const FONT_PRIMARY = 'Outfit';
const FONT_SECONDARY = 'Amiri';

// primary och secondary färger?

interface TemperatruePaletteOptions {
	minus25orLess: string;
	minus20to25: string;
	minus15to20: string;
	minus10to15: string;
	minus5to10: string;
	minus5to0: string;
	plus0to5: string;
	plus5to10: string;
	plus10to15: string;
	plus15to20: string;
	plus20to25: string;
	plus25to30: string;
	plus30to35: string;
	plus35orMore: string;
}
declare module '@material-ui/core/styles/createPalette' {
	interface Palette {
		temp: TemperatruePaletteOptions;
	}
	interface PaletteOptions {
		temp?: TemperatruePaletteOptions;
	}
}

export const theme = createTheme({
	typography: {
		fontFamily: [FONT_PRIMARY, 'sans-serif'].join(','),
		fontWeightRegular: 400,
		h1: {
			fontWeight: 600,
			fontSize: 60,
			color: '#333',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h2: {
			fontWeight: 600,
			fontSize: 52,
			color: '#333',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h3: {
			fontWeight: 600,
			fontSize: 44,
			color: '#333',
			zIndex: 1,
		},
		h4: {
			fontWeight: 600,
			fontSize: 36,
			color: '#333',
			zIndex: 1,
		},
		h5: {
			fontWeight: 600,
			fontSize: 28,
			color: '#333',
			zIndex: 1,
		},
		h6: {
			fontWeight: 600,
			fontSize: 20,
			color: '#333',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 18,
			color: '#333',
			zIndex: 1,
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: 16,
			color: '#333',
			zIndex: 1,
		},
		body1: {
			fontWeight: 300,
			fontSize: 18,
			color: '#333',
			zIndex: 1,
		},
		body2: {
			fontWeight: 300,
			fontSize: 16,
			color: '#333',
			zIndex: 1,
		},
	},
	palette: {
		common: {
			white: '#fefefe',
			black: '#333333',
		},
		temp: {
			minus25orLess: '#00009E',
			minus20to25: '#0000CC',
			minus15to20: '#0000FF',
			minus10to15: '#3355FF',
			minus5to10: '#66AAFF',
			minus5to0: '#99FFFF',
			plus0to5: '#FFFF00',
			plus5to10: '#FFE500',
			plus10to15: '#FFCC00',
			plus15to20: '#FF9900',
			plus20to25: '#FF6600',
			plus25to30: '#FF3300',
			plus30to35: '#FF1900',
			plus35orMore: '#FF1900',
		},
	},
});

export default theme;
