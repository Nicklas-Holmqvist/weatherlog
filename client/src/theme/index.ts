import { createTheme } from '@material-ui/core';

const FONT_PRIMARY = 'Outfit';
const FONT_SECONDARY = 'Amiri';

// primary och secondary färger?

interface TemperatruePaletteOptions {
	minus25orLess: string;
	minus20to24: string;
	minus15to19: string;
	minus10to14: string;
	minus5to9: string;
	minus5to0: string;
	plus0to4: string;
	plus5to9: string;
	plus10to14: string;
	plus15to19: string;
	plus20to24: string;
	plus25to29: string;
	plus30to34: string;
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
			fontSize: 40,
			color: '#333',
			zIndex: 1,
			fontFamily: FONT_SECONDARY,
		},
		h3: {
			fontWeight: 500,
			fontSize: 44,
			color: '#333',
			zIndex: 1,
		},
		h4: {
			fontWeight: 500,
			fontSize: 36,
			color: '#333',
			zIndex: 1,
		},
		h5: {
			fontWeight: 400,
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
		primary: {
			main: '#fefefe',
			dark: '#ededed',
		},
		secondary: {
			light: '#444444',
			main: '#333333',
			dark: '#222222',
		},
		common: {
			white: '#fefefe',
			black: '#333333',
		},
		temp: {
			minus25orLess: '#00009E',
			minus20to24: '#0000CC',
			minus15to19: '#0000FF',
			minus10to14: '#3355FF',
			minus5to9: '#66AAFF',
			minus5to0: '#99FFFF',
			plus0to4: '#FFFF00',
			plus5to9: '#FFE500',
			plus10to14: '#FFCC00',
			plus15to19: '#FF9900',
			plus20to24: '#FF6600',
			plus25to29: '#FF3300',
			plus30to34: '#FF1900',
			plus35orMore: '#FF0000',
		},
	},
});

export default theme;
