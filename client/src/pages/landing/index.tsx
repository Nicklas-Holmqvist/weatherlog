import { useEffect, useState } from 'react';
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
import useStyles from './styles';

import { useLogsContext } from '../../context/logs';
import { ILogs } from 'src/types/Logs';
import GetMonthName from '../../utils/getMonthName';

export const LandingPage = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.down(540));

	const getAllLogs = useLogsContext().getAllLogs
	const { landingLogs, logs } = useLogsContext()

	const [logList, setLogList] = useState<ILogs[]>(landingLogs)

	useEffect(() => {
		setLogList(landingLogs)
		getAllLogs()
	},[landingLogs])	

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
				{logList.map((d:ILogs) => 
					<WeatherCard
						key={d._id?.toString()} 
						temp={parseInt(d.temperature)}
						date={{ day:d.date.substring(6,8).toString(), month: GetMonthName(d.date.substring(4,6).toString())! }}
						weather={d.weather.toString()}
						wind={{ speed: d.windSpeed.toString(), direction: d.windDirection.toString() }}
						precipitation={Number(d.precipitation)}
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default LandingPage;
