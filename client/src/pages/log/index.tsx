import { Grid, Typography } from '@material-ui/core';
import DesktopDailyOverview from 'src/components/DailyOverview/Desktop/DesktopDailyOverview';

import useStyles from './styles';

const DailyOverviewPage = () => {
	const classes = useStyles();
	return (
		<Grid container item className={classes.container}>
			<Typography variant="h2" className={classes.title}>
				Dagsöversikt
			</Typography>
			<DesktopDailyOverview />
			{/* kolla om mobil elr desktop */}
		</Grid>
	);
};

export default DailyOverviewPage;
