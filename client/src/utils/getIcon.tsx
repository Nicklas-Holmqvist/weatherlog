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

export const GetWeatherIcon = (weather: string, size: string) => {
	const classes = useStyles();
	switch (weather) {
		case weatherEnum.SUN:
			return <Sun className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.SEMI_CLEAR:
			return <SemiClear className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.OVERCAST:
			return <Overcast className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.FOG:
			return <Fog className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.RAIN_SHOWER:
			return <RainShower className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.RAIN:
			return <Rain className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon}/>;
		case weatherEnum.SNOWFALL:
			return <Snowfall className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.SNOW_SHOWER:
			return <SnowShower className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.SNOWY_RAIN:
			return <SnowyRain className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.THUNDER:
			return <Thunder className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		case weatherEnum.HAIL:
			return <Hail className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
		default:
			return <NoData className={size === 'small' ? classes.listIcon : size === 'normal' ? classes.icon : size === 'large' ? classes.weatherIcon :  classes.icon} />;
	}
};

export const GetWindDirection = (direction: string, size: string) => {
	
	switch (direction) {
		case directionEnum.N:
			return (
				<North />
			);
		case directionEnum.NW:
			return (
				<NorthWest />
			);
		case directionEnum.W:
			return (
				<West />
			);
		case directionEnum.SW:
			return (
				<SouthWest />
			);
		case directionEnum.S:
			return (
				<South />
			);
		case directionEnum.SE:
			return (
				<SouthEast />
			);
		case directionEnum.E:
			return (
				<East />
			);
		case directionEnum.NE:
			return (
				<NorthEast />
			);
		default:
			return (
				<NoData />
			);
	}
};
