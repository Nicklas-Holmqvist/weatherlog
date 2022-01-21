import { Grid, Typography } from '@material-ui/core';

import { useLogsContext } from 'src/context/logs';
import { getAverageTemp, getColdestDay, getWarmestDay } from 'src/utils';
import { dummyLogs } from 'src/utils/dummyLogs';
import getMonthName from 'src/utils/getMonthName';
import useStyles from './styles';

export const StatsList = () => {
	const classes = useStyles();
	const allLogs = useLogsContext().logs;

	return (
		<Grid item container direction="column" className={classes.stats}>
			<Typography variant="h5" className={classes.statsTitle}>
				Statistik
			</Typography>
			<Grid
				item
				container
				className={`${classes.statString} ${classes.marginBottom}`}
			>
				<Typography variant="subtitle1">Totalt antal inlägg: </Typography>
				<Typography variant="body1" className={classes.data}>
					{/* {dummyLogs.length} */}
					{allLogs.length}
				</Typography>
			</Grid>
			<Grid item container className={classes.statString}>
				<Typography variant="subtitle1">Varmaste dag: </Typography>
				<Typography variant="body1" className={classes.data}>
					{allLogs.length > 0 ? getWarmestDay(allLogs) : '-'}
				</Typography>
			</Grid>
			<Grid item container className={classes.statString}>
				<Typography variant="subtitle1">Kallaste dag: </Typography>
				<Typography variant="body1" className={classes.data}>
					{allLogs.length > 0 ? getColdestDay(allLogs) : '-'}
				</Typography>
			</Grid>
			<Grid
				item
				container
				className={`${classes.statString} ${classes.marginBottom}`}
			>
				<Typography variant="subtitle1">Medeltemperatur: </Typography>
				<Typography variant="body1" className={classes.data}>
					{allLogs.length > 0 ? getAverageTemp(allLogs)! : '-'}
				</Typography>
			</Grid>
			<Grid
				item
				container
				className={`${classes.statString} ${classes.marginBottom}`}
			>
				<Typography variant="subtitle1">Blåsigaste dag: </Typography>
				<Typography variant="body1" className={classes.data}>
					22 m/s (29 november 2020)
				</Typography>
			</Grid>
			<Grid item container className={classes.statString}>
				<Typography variant="subtitle1">Regnigaste dag: </Typography>
				<Typography variant="body1" className={classes.data}>
					24,6 mm (13 oktober 2021)
				</Typography>
			</Grid>
			<Grid item container className={classes.statString}>
				<Typography variant="subtitle1">Total nederbörd: </Typography>
				<Typography variant="body1" className={classes.data}>
					5434 mm
				</Typography>
			</Grid>
			<Grid
				item
				container
				className={`${classes.statString} ${classes.marginBottom}`}
			>
				<Typography variant="subtitle1">Medelnederbörd: </Typography>
				<Typography variant="body1" className={classes.data}>
					1,3 mm
				</Typography>
			</Grid>
			<Grid item container className={classes.statString}>
				<Typography variant="subtitle1">Antal soldagar: </Typography>
				<Typography variant="body1" className={classes.data}>
					23
				</Typography>
			</Grid>
		</Grid>
	);
};

export default StatsList;
