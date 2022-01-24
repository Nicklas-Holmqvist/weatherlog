import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import { useLogsContext } from 'src/context/logs';
import theme from 'src/theme';
import {
	getAveragePrecipitation,
	getAverageTemp,
	getColdestDay,
	getNumberOfSunnyDays,
	getRainiestDay,
	getTotalPrecipitation,
	getWarmestDay,
	getWindiestDay,
} from 'src/utils';
import useStyles from './styles';

interface IStatsList {
	isActive: boolean;
	toggleActive: () => void;
}

export const StatsList = ({ isActive, toggleActive }: IStatsList) => {
	const classes = useStyles();
	const allLogs = useLogsContext().logs;
	const mediumScreen = useMediaQuery(theme.breakpoints.down(1200));

	return (
		<Grid
			item
			container
			direction="column"
			className={
				isActive && mediumScreen
					? classes.smallScreenStatsActive
					: !isActive && mediumScreen
					? classes.smallScreenStatsInactive
					: classes.stats
			}
		>
			<Typography variant="h5" className={classes.statsTitle}>
				Statistik
			</Typography>
			{allLogs.length < 2 ? (
				<Typography variant="body1">
					Skapa minst två inlägg för att se statistik
				</Typography>
			) : (
				<>
					<Grid
						item
						container
						className={`${classes.statString} ${classes.marginBottom}`}
					>
						<Typography variant="subtitle1">Totalt antal inlägg: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length}
						</Typography>
					</Grid>
					<Grid item container className={classes.statString}>
						<Typography variant="subtitle1">Varmaste dag: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getWarmestDay(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid item container className={classes.statString}>
						<Typography variant="subtitle1">Kallaste dag: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getColdestDay(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid
						item
						container
						className={`${classes.statString} ${classes.marginBottom}`}
					>
						<Typography variant="subtitle1">Medeltemperatur: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getAverageTemp(allLogs)! : '-'}
						</Typography>
					</Grid>
					<Grid
						item
						container
						className={`${classes.statString} ${classes.marginBottom}`}
					>
						<Typography variant="subtitle1">Blåsigaste dag: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getWindiestDay(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid item container className={classes.statString}>
						<Typography variant="subtitle1">Regnigaste dag: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getRainiestDay(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid item container className={classes.statString}>
						<Typography variant="subtitle1">Total nederbörd: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getTotalPrecipitation(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid
						item
						container
						className={`${classes.statString} ${classes.marginBottom}`}
					>
						<Typography variant="subtitle1">Medelnederbörd: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getAveragePrecipitation(allLogs) : '-'}
						</Typography>
					</Grid>
					<Grid item container className={classes.statString}>
						<Typography variant="subtitle1">Antal soldagar: </Typography>
						<Typography variant="body1" className={classes.data}>
							{allLogs.length > 1 ? getNumberOfSunnyDays(allLogs) : '-'}
						</Typography>
					</Grid>
				</>
			)}
			{isActive && mediumScreen ? (
				<Button
					endIcon={<CloseRounded />}
					className={classes.closeDrawerButton}
					onClick={toggleActive}
				>
					Dölj
				</Button>
			) : null}
		</Grid>
	);
};

export default StatsList;
