import { Grid, Typography } from '@material-ui/core';

import { dotToCommaConverter, GetWeatherIcon } from 'src/utils';
import useStyles from './styles';

interface IWeatherCard {
	temp: number;
	date: {
		day: number;
		month: string;
	};
	weather: string;
	wind: number;
	precipitation: number;
}

export const WeatherCard = ({
	temp,
	date: { day, month },
	weather,
	wind,
	precipitation,
}: IWeatherCard) => {
	const classes = useStyles();

	return (
		<Grid item container className={classes.container}>
			<Grid className={classes.tempBox} />
			<Grid item className={classes.date}>
				<Typography variant="h3">{day}</Typography>
				<Typography variant="body1">{month}</Typography>
			</Grid>
			<Typography variant="h3">{`${temp}°C`}</Typography>
			{/* getWeatherIcon(weather) weather = weatherEnum.___, strängen som den returnerar används för att bestämma bild med switch */}
			{/* <Sun className={classes.icon} /> */}
			{GetWeatherIcon(weather)}
			<Grid item className={classes.unitContainer}>
				<Typography variant="h3">{wind}</Typography>
				<Typography variant="h5" className={classes.unit}>
					m/s
				</Typography>
			</Grid>
			<Grid item className={classes.unitContainer}>
				<Typography variant="h3">
					{dotToCommaConverter(precipitation.toString())}
				</Typography>
				<Typography variant="h5" className={classes.unit}>
					mm
				</Typography>
			</Grid>
		</Grid>
	);
};

export default WeatherCard;
