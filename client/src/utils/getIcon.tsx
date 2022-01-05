import {
	Fog,
	Hail,
	Overcast,
	RainShower,
	SemiClear,
	Snowfall,
	SnowShower,
	SnowyRain,
	Sun,
	Thunder,
	Rain,
	North,
	West,
	SouthWest,
	NorthWest,
	South,
	SouthEast,
	East,
	NorthEast,
	NoData,
} from '.';
import { directionEnum, weatherEnum } from './enums';
import useStyles from '../components/WeatherCard/styles';

export const GetWeatherIcon = (weather: string) => {
	const classes = useStyles();
	switch (weather) {
		case weatherEnum.SUN:
			return <Sun className={classes.icon} />;
		case weatherEnum.SEMI_CLEAR:
			return <SemiClear className={classes.icon} />;
		case weatherEnum.OVERCAST:
			return <Overcast className={classes.icon} />;
		case weatherEnum.FOG:
			return <Fog className={classes.icon} />;
		case weatherEnum.RAIN_SHOWER:
			return <RainShower className={classes.icon} />;
		case weatherEnum.RAIN:
			return <Rain className={classes.icon} />;
		case weatherEnum.SNOWFALL:
			return <Snowfall className={classes.icon} />;
		case weatherEnum.SNOW_SHOWER:
			return <SnowShower className={classes.icon} />;
		case weatherEnum.SNOWY_RAIN:
			return <SnowyRain className={classes.icon} />;
		case weatherEnum.THUNDER:
			return <Thunder className={classes.icon} />;
		case weatherEnum.HAIL:
			return <Hail className={classes.icon} />;
		default:
			return <NoData className={classes.icon} />;
	}
};

export const GetWindDirection = (direction: string, size: string) => {
	const classes = useStyles();
	switch (direction) {
		case directionEnum.N:
			return (
				<North
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.NW:
			return (
				<NorthWest
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.W:
			return (
				<West
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.SW:
			return (
				<SouthWest
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.S:
			return (
				<South
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.SE:
			return (
				<SouthEast
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.E:
			return (
				<East
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		case directionEnum.NE:
			return (
				<NorthEast
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
		default:
			return (
				<NoData
					className={
						size === 'small' ? classes.arrowIcon : classes.bigArrowIcon
					}
				/>
			);
	}
};
