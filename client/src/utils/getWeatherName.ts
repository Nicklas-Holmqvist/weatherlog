import { weatherEnum } from '.';

export const getWeatherName = (weather: string) => {
	switch (weather) {
		case weatherEnum.FOG:
			return 'Dimma';
		case weatherEnum.HAIL:
			return 'Hagel';
		case weatherEnum.OVERCAST:
			return 'Mulet';
		case weatherEnum.RAIN:
			return 'Regn';
		case weatherEnum.RAIN_SHOWER:
			return 'Regnskurar';
		case weatherEnum.SEMI_CLEAR:
			return 'Halvklart';
		case weatherEnum.SNOWFALL:
			return 'Snö';
		case weatherEnum.SNOWY_RAIN:
			return 'Snöblandat regn';
		case weatherEnum.SNOW_SHOWER:
			return 'Snöbyar';
		case weatherEnum.SUN:
			return 'Klart';
		case weatherEnum.THUNDER:
			return 'Åska';
		default:
			return '-';
	}
};
