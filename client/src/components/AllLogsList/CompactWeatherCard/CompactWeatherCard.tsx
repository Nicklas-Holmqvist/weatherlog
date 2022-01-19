import {
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import { ChevronRightRounded } from '@material-ui/icons';
import theme from 'src/theme';

import {
	dotToCommaConverter,
	GetWeatherIcon,
	GetWindDirection,
	getTempColor,
} from 'src/utils';
import useStyles from './styles';

interface ICompactWeatherCard {
	temp: number;
	date: {
		day: string;
		month: string;
		year: string;
	};
	weather: string;
}

export const CompactWeatherCard = ({
	temp,
	date: { day, month, year },
	weather,
}: ICompactWeatherCard) => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.down(540));

	const dateString = `${day} ${month} ${year}`;
	const tempString = `${temp}°C`;

	return (
		<Grid item container className={classes.container}>
			<Grid
				className={classes.tempBox}
				style={{ backgroundColor: getTempColor(temp)! }}
			/>
			<Grid item container className={classes.info}>
				<Typography variant="subtitle1" className={classes.date}>
					{dateString}
				</Typography>
				<Typography
					variant={mobile ? 'subtitle1' : 'h5'}
					className={classes.temp}
				>
					{tempString}
				</Typography>
				<Grid item className={classes.iconContainer}>
					{GetWeatherIcon(weather, 'small')}
				</Grid>
				{/* {speed ? (
					<Grid item className={classes.wind}>
						<Typography variant="body1">{windSpeedString}</Typography>
					</Grid>
				) : direction ? (
					<Grid item className={classes.wind}>
						{GetWindDirection(direction, 'small')}
					</Grid>
				) : (
					<Grid item className={classes.wind}>
						<Typography variant="body1">-</Typography>
					</Grid>
				)} */}
				{/* <Typography variant="body1">
					{speed || GetWindDirection(direction, 'small')}
				</Typography> */}
				<Typography variant="body1"></Typography>
			</Grid>
			<Button
				className={classes.arrowButton}
				endIcon={<ChevronRightRounded className={classes.arrowIcon} />}
			>
				Läs mer
			</Button>
		</Grid>
	);
};

export default CompactWeatherCard;
