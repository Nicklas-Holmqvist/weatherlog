import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import { useLogsContext } from 'src/context/logs';
import getMonthName from 'src/utils/getMonthName';
import { CompactWeatherCard } from './CompactWeatherCard';

import useStyles from './styles';
import { Pagination } from './Pagination';

export const AllLogsList = () => {
	const classes = useStyles();
	const getLogs = useLogsContext().getLogs;
	const allLogs = useLogsContext().logs;

	// const [logs, setLogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [logsPerPage] = useState(10);

	useEffect(() => {
		getLogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const indexOfLastLog = currentPage * logsPerPage;
	const indexOfFirstLog = indexOfLastLog - logsPerPage;
	const currentLogs = allLogs.slice(indexOfFirstLog, indexOfLastLog);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		// console.log(pageNumber);
	};

	return (
		<Grid item container direction="column" className={classes.root}>
			<Grid item container direction="column" className={classes.logs}>
				{currentLogs.map((log, index) => (
					<Link to={`/log/${log.date}`} className={classes.disableUnderline}>
						<CompactWeatherCard
							date={{
								day: log.date.substring(6, 8),
								month: getMonthName(log.date.substring(4, 6))!,
								year: log.date.substring(0, 4),
							}}
							temp={parseInt(log.temperature)}
							weather={log.weather}
							key={log._id}
							index={index}
						/>
					</Link>
				))}
			</Grid>
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
						{allLogs.length}
					</Typography>
				</Grid>
				<Grid item container className={classes.statString}>
					<Typography variant="subtitle1">Varmaste dag: </Typography>
					<Typography variant="body1" className={classes.data}>
						33°C (12 juli 2021)
					</Typography>
				</Grid>
				<Grid item container className={classes.statString}>
					<Typography variant="subtitle1">Kallaste dag: </Typography>
					<Typography variant="body1" className={classes.data}>
						-15°C (14 januari 2020)
					</Typography>
				</Grid>
				<Grid item container className={classes.statString}>
					<Typography variant="subtitle1">Blåsigaste dag: </Typography>
					<Typography variant="body1" className={classes.data}>
						22 m/s (29 november 2020)
					</Typography>
				</Grid>
			</Grid>
			<Pagination
				logsPerPage={logsPerPage}
				totalLogs={allLogs.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</Grid>
	);
};

export default AllLogsList;
