import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import {
	DesktopDailyOverview,
	MobileDailyOverview,
	NavigateBackButton,
} from 'src/components';
import theme from 'src/theme';
import useStyles from './styles';

export const DailyOverviewPage = () => {
	const classes = useStyles();
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container item className={classes.container}>
			<Helmet>
				<title>Dagsöversikt | Väderdagboken</title>
				<meta name="dagsöversikt" content="Din dagsöversikt" />
			</Helmet>
			<Grid item container className={classes.titleContainer}>
				<NavigateBackButton page="/" />
				<Typography variant="h2" className={classes.title}>
					Dagsöversikt
				</Typography>
			</Grid>
			{smallScreen ? <MobileDailyOverview /> : <DesktopDailyOverview />}
		</Grid>
	);
};

export default DailyOverviewPage;
