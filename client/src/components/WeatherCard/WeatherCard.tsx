import { Grid, Typography } from '@material-ui/core';
import { WbSunnyOutlined } from '@material-ui/icons';

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
			<WbSunnyOutlined fontSize="large" />
			<Grid item className={classes.unitContainer}>
				<Typography variant="h3">{wind}</Typography>
				<Typography variant="h5" className={classes.unit}>
					m/s
				</Typography>
			</Grid>
			<Grid item className={classes.unitContainer}>
				<Typography variant="h3">{precipitation}</Typography>
				<Typography variant="h5" className={classes.unit}>
					mm
				</Typography>
			</Grid>
		</Grid>
	);
};

export default WeatherCard;
