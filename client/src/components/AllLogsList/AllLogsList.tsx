import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { ChevronRightRounded } from '@material-ui/icons';

import { useLogsContext } from 'src/context/logs';
import getMonthName from 'src/utils/getMonthName';
import { CompactWeatherCard } from './CompactWeatherCard';

import useStyles from './styles';
import { Pagination } from './Pagination';
import { dummyLogs } from 'src/utils/dummyLogs';
import { StatsList } from './StatsList';

export const AllLogsList = () => {
	const classes = useStyles();
	const getLogs = useLogsContext().getLogs;
	const allLogs = useLogsContext().logs;

	const [active, setActive] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [logsPerPage] = useState(50);

	useEffect(() => {
		getLogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const indexOfLastLog = currentPage * logsPerPage;
	const indexOfFirstLog = indexOfLastLog - logsPerPage;
	// const currentLogs = dummyLogs.slice(indexOfFirstLog, indexOfLastLog);
	const currentLogs = allLogs.slice(indexOfFirstLog, indexOfLastLog);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handleToggleActive = () => {
		setActive(!active);
	};

	return (
		<>
			<Grid item container direction="column" className={classes.root}>
				<Grid
					item
					container
					direction="column"
					className={classes.logs}
					id="logListContainer"
				>
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
				<StatsList isActive={active} toggleActive={handleToggleActive} />
			</Grid>
			<Grid item container className={classes.paginationAndButtonContainer}>
				<Pagination
					logsPerPage={logsPerPage}
					totalLogs={allLogs.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
				<Button
					disableElevation
					variant="contained"
					aria-label="se statistik"
					className={classes.statsButton}
					onClick={() => setActive(true)}
					endIcon={<ChevronRightRounded />}
				>
					Se statistik
				</Button>
			</Grid>
		</>
	);
};

export default AllLogsList;
