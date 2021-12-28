import theme from '../theme';

export const getTempColor = (temp: number) => {
	if (temp <= -25) return theme.palette.temp.minus25orLess;
	if (temp < -19 && temp > -25) return theme.palette.temp.minus20to24;
	if (temp < -14 && temp > -20) return theme.palette.temp.minus15to19;
	if (temp < -9 && temp > -15) return theme.palette.temp.minus10to14;
	if (temp < -4 && temp > -10) return theme.palette.temp.minus5to9;
	if (temp <= 0 && temp > -5) return theme.palette.temp.minus5to0;
	if (temp < 5 && temp > 0) return theme.palette.temp.plus0to4;
	if (temp < 10 && temp > 4) return theme.palette.temp.plus5to9;
	if (temp < 15 && temp > 9) return theme.palette.temp.plus10to14;
	if (temp < 20 && temp > 14) return theme.palette.temp.plus15to19;
	if (temp < 25 && temp > 19) return theme.palette.temp.plus20to24;
	if (temp < 30 && temp > 24) return theme.palette.temp.plus25to29;
	if (temp < 35 && temp > 29) return theme.palette.temp.plus30to34;
	if (temp >= 35) return theme.palette.temp.plus35orMore;
};

export default getTempColor;
