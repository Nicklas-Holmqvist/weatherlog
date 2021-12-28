import {
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import { AddRounded, HistoryRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { WeatherCard } from 'src/components';
import theme from 'src/theme';
import { weatherEnum } from 'src/utils';
import useStyles from './styles';

export const LandingPage = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.down(540));

	// header ska ha space-between el space-evenly precis som kortet, sen marginRight lika mycket som temp-rutan är bred
	return (
		<Grid item container className={classes.container}>
			<Grid item container className={classes.pageHeader}>
				<Typography variant="h2" className={classes.pageTitle}>
					Senaste dagarna
				</Typography>
				<Grid item>
					<Link to="/example" className={classes.disableUnderline}>
						{mobile ? (
							<IconButton>
								<HistoryRounded />
							</IconButton>
						) : (
							<Button
								variant="text"
								endIcon={<HistoryRounded />}
								disableElevation
								className={`${classes.disableUnderline} ${classes.mr}`}
							>
								Visa historik
							</Button>
						)}
					</Link>
					<Link to="/" className={classes.disableUnderline}>
						{mobile ? (
							<IconButton>
								<AddRounded />
							</IconButton>
						) : (
							<Button
								variant="contained"
								endIcon={<AddRounded />}
								disableElevation
							>
								Skapa
							</Button>
						)}
					</Link>
				</Grid>
			</Grid>
			<Grid item container className={classes.tableHeader}>
				<Grid item>
					<Typography variant="body1" className={classes.tableTitleText}>
						Datum
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" className={classes.tableTitleText}>
						Temperatur
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" className={classes.tableTitleText}>
						Väder
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" className={classes.tableTitleText}>
						Vind
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" className={classes.tableTitleText}>
						Nederbörd
					</Typography>
				</Grid>
			</Grid>
			<Grid item container direction="column">
				<WeatherCard
					temp={17}
					date={{ day: 7, month: 'april' }}
					weather={weatherEnum.OVERCAST}
					wind={4}
					precipitation={0.4}
				/>
				<WeatherCard
					temp={21}
					date={{ day: 27, month: 'april' }}
					weather={weatherEnum.SUN}
					wind={4}
					precipitation={0.4}
				/>
				<WeatherCard
					temp={20}
					date={{ day: 28, month: 'april' }}
					weather={weatherEnum.THUNDER}
					wind={4}
					precipitation={0.4}
				/>
				<WeatherCard
					temp={-16}
					date={{ day: 29, month: 'april' }}
					weather={weatherEnum.SNOWFALL}
					wind={4}
					precipitation={0.4}
				/>
				<WeatherCard
					temp={8}
					date={{ day: 30, month: 'april' }}
					weather={weatherEnum.RAIN_SHOWER}
					wind={4}
					precipitation={0.4}
				/>
			</Grid>
		</Grid>
	);
};

export default LandingPage;
