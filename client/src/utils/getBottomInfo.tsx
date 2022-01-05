import {
	ColdBar,
	CoolBar,
	dataEnum,
	directionEnum,
	MildBar,
	NeutralBar,
	WarmBar,
} from '.';
import { windFeelEnum } from './enums/windFeelEnum';
import useStyles from 'src/components/DailyOverview/Desktop/styles';

export const GetBottomInfo = (field: string, value: number | string) => {
	const classes = useStyles();

	if (field === dataEnum.WIND_DIRECTION) {
		switch (value) {
			case directionEnum.N:
				return 'Nordlig';
			case directionEnum.NW:
				return 'Nordvästlig';
			case directionEnum.W:
				return 'Västlig';
			case directionEnum.SW:
				return 'Sydvästlig';
			case directionEnum.S:
				return 'Sydlig';
			case directionEnum.SE:
				return 'Sydöstlig';
			case directionEnum.E:
				return 'Östlig';
			case directionEnum.NE:
				return 'Nordöstlig';
			default:
				return '-';
		}
	}
	if (field === dataEnum.WIND_SPEED) {
		if (value > 7) return 'Över normalt';
		if (value >= 4 && value <= 7) return 'Normalt';
		if (value <= 3) return 'Under normalt';
	}
	if (field === dataEnum.WIND_FEEL) {
		switch (value) {
			case windFeelEnum.COLD:
				return <ColdBar className={classes.bar} />;
			case windFeelEnum.COOL:
				return <CoolBar className={classes.bar} />;
			case windFeelEnum.NEUTRAL:
				return <NeutralBar className={classes.bar} />;
			case windFeelEnum.MILD:
				return <MildBar className={classes.bar} />;
			case windFeelEnum.WARM:
				return <WarmBar className={classes.bar} />;
			default:
				return <NeutralBar className={classes.bar} />;
		}
	}
	if (field === dataEnum.PRECIPITATION) {
		if (value > 8) return 'Högt över normalt';
		if (value > 2) return 'Över normalt';
		if (value >= 1 && value <= 1.9) return 'Normalt';
		if (value <= 0.9) return 'Under normalt';
	}
	if (field === dataEnum.AIR_PRESSURE) {
		if (value > 1020) return 'Över normalt';
		if (value >= 985 && value <= 1019) return 'Normalt';
		if (value <= 984) return 'Under normalt';
	}
	if (field === dataEnum.HUMIDITY) {
		if (value > 95) return 'Över normalt';
		if (value >= 70 && value <= 94) return 'Normalt';
		if (value <= 69) return 'Under normalt';
	}
	return '';
};

export default GetBottomInfo;
