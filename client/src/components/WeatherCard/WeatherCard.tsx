import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import {
	directionEnum,
	North,
	NorthWest,
	West,
	SouthWest,
	South,
	SouthEast,
	East,
	NorthEast,
	NoData,
} from '../../utils';

import theme from 'src/theme';

import {
	dotToCommaConverter,
	GetWeatherIcon,
	// GetWindDirection,
	getTempColor,
} from 'src/utils';
import useStyles from './styles';

interface IWeatherCard {
	temp: number;
	date: {
		day: string;
		month: string;
	};
	weather: string;
	wind: {
		speed?: string;
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

	const getWindDirection = () => {
		switch (direction) {
			case directionEnum.N:
				return <North className={classes.arrowIcon} />;
			case directionEnum.NW:
				return <NorthWest className={classes.arrowIcon} />;
			case directionEnum.W:
				return <West className={classes.arrowIcon} />;
			case directionEnum.SW:
				return <SouthWest className={classes.arrowIcon} />;
			case directionEnum.S:
				return <South className={classes.arrowIcon} />;
			case directionEnum.SE:
				return <SouthEast className={classes.arrowIcon} />;
			case directionEnum.E:
				return <East className={classes.arrowIcon} />;
			case directionEnum.NE:
				return <NorthEast className={classes.arrowIcon} />;
			default:
				return <NoData />;
		}
	};

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
					{smallMobile ? month.substring(0, 3) : month}
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
				{GetWeatherIcon(weather, 'normal')}
			</Grid>
			<Grid item className={classes.wind}>
				{speed ? (
					<>
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
							{speed}
						</Typography>
						<Typography variant="h5" className={classes.unit}>
							m/s
						</Typography>
					</>
				) : (
					getWindDirection()
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
