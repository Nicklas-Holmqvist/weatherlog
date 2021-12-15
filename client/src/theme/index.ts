import { createTheme } from '@material-ui/core';

const FONT_PRIMARY = 'Roboto';
const FONT_SECONDARY = 'Amiri';

export const theme = createTheme({
	typography: {
		fontFamily: [
			FONT_PRIMARY,
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontWeightRegular: 400,
		h1: {
			fontWeight: 600,
			fontSize: 40,
			color: '#fff',
			zIndex: 1,
		},
		h2: {
			fontWeight: 600,
			fontSize: 34,
			color: '#fff',
			zIndex: 1,
		},
		h3: {
			fontWeight: 600,
			fontSize: 30,
			color: '#fff',
			zIndex: 1,
		},
		h4: {
			fontWeight: 600,
			fontSize: 26,
			color: '#fff',
			zIndex: 1,
		},
		h5: {
			fontWeight: 600,
			fontSize: 24,
			color: '#fff',
			zIndex: 1,
		},
		h6: {
			fontWeight: 600,
			fontSize: 22,
			color: '#fff',
			zIndex: 1,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 18,
			color: '#fff',
			zIndex: 1,
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: 16,
			color: '#fff',
			zIndex: 1,
		},
		body1: {
			fontWeight: 300,
			fontSize: 16,
			color: '#fff',
			zIndex: 1,
		},
		body2: {
			fontWeight: 300,
			fontSize: 14,
			color: '#fff',
			zIndex: 1,
		},
	},
	palette: {
		primary: {
			light: '#373737',
			main: '#212121',
			dark: '#121212',
		},
		secondary: {
			light: '#ed3b3b',
			main: '#F33737',
			dark: '#c21f1f',
		},
		common: {
			white: '#fff',
			black: '#000',
		},
		info: {
			main: '#fff',
		},
	},
});
