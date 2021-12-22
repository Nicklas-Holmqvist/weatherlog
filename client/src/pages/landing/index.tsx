import { Button, Grid, Typography } from '@material-ui/core';
import { AddRounded, HistoryRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { WeatherCard } from 'src/components';
import useStyles from './styles';

export const LandingPage = () => {
	const classes = useStyles();
	// header ska ha space-between el space-evenly precis som kortet, sen marginRight lika mycket som temp-rutan är bred
	return (
		<Grid item container className={classes.container}>
			<Grid item container className={classes.pageHeader}>
				<Typography variant="h2">Senaste dagarna</Typography>
				<Grid item>
					<Link to="/example" className={classes.disableUnderline}>
						<Button
							variant="text"
							endIcon={<HistoryRounded />}
							disableElevation
							className={`${classes.disableUnderline} ${classes.mr}`}
						>
							Visa historik
						</Button>
					</Link>
					<Link to="/" className={classes.disableUnderline}>
						<Button
							variant="contained"
							endIcon={<AddRounded />}
							disableElevation
						>
							Skapa
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid item container className={classes.tableHeader}>
				<Typography variant="body1">Datum</Typography>
				<Typography variant="body1">Temperatur</Typography>
				<Typography variant="body1">Väder</Typography>
				<Typography variant="body1">Vind</Typography>
				<Typography variant="body1">Nederbörd</Typography>
			</Grid>
			<Grid item container direction="column">
				<WeatherCard
					temp={17}
					date={{ day: 26, month: 'april' }}
					weather="Sol"
					wind={4}
					precipitation={0.5}
				/>
			</Grid>
		</Grid>
	);
};

export default LandingPage;
