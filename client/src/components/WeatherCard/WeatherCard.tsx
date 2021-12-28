import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import theme from 'src/theme';

import {
	dotToCommaConverter,
	GetWeatherIcon,
	GetWindDirection,
	getTempColor,
} from 'src/utils';
import useStyles from './styles';

interface IWeatherCard {
	temp: number;
	date: {
		day: number;
		month: string;
	};
	weather: string;
	wind: {
		speed?: number;
		direction: string;
	};
	precipitation: number;
}

export const WeatherCard = ({
	temp,
	date: { day, month },
	weather,
	wind: { speed, direction },
	precipitation,
}: IWeatherCard) => {
	const classes = useStyles();
	const mediumScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const bigMobile = useMediaQuery(theme.breakpoints.down(540));
	const smallMobile = useMediaQuery(theme.breakpoints.down(450));

	return (
		<Grid item container className={classes.container}>
			<Grid
				className={classes.tempBox}
				style={{ backgroundColor: getTempColor(temp)! }}
			/>
			<Grid item className={classes.date}>
				<Typography
					variant={
						smallMobile
							? 'subtitle1'
							: bigMobile
							? 'h5'
							: mediumScreen
							? 'h4'
							: 'h3'
					}
					className={classes.day}
				>
					{day}
				</Typography>
				<Typography variant="body1" className={classes.month}>
					{month}
				</Typography>
			</Grid>
			<Typography
				variant={
					smallMobile
						? 'subtitle1'
						: bigMobile
						? 'h5'
						: mediumScreen
						? 'h4'
						: 'h3'
				}
				className={classes.temp}
			>{`${temp}°C`}</Typography>
			<Grid item className={classes.iconContainer}>
				{GetWeatherIcon(weather)}
			</Grid>
			<Grid item className={classes.wind}>
				<Typography
					variant={
						smallMobile
							? 'subtitle1'
							: bigMobile
							? 'h5'
							: mediumScreen
							? 'h4'
							: 'h3'
					}
				>
					{speed || GetWindDirection(direction)}
				</Typography>
				{speed && (
					<Typography variant="h5" className={classes.unit}>
						m/s
					</Typography>
				)}
			</Grid>
			<Grid item className={classes.precipitation}>
				<Typography
					variant={
						smallMobile
							? 'subtitle1'
							: bigMobile
							? 'h5'
							: mediumScreen
							? 'h4'
							: 'h3'
					}
				>
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
