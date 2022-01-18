import { windFeelEnum } from './enums';

export const getWindFeelName = (windFeel: string) => {
	switch (windFeel) {
		case 'cold':
			return windFeelEnum.COLD;
		case 'cool':
			return windFeelEnum.COOL;
		case 'neutral':
			return windFeelEnum.NEUTRAL;
		case 'mild':
			return windFeelEnum.MILD;
		case 'warm':
			return windFeelEnum.WARM;
		default:
			return '';
	}
};
