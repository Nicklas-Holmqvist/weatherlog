import { Grid, IconButton, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
	ArrowBackRounded,
	ArrowForwardRounded,
	DeleteRounded,
	EditRounded,
	PlaceRounded,
} from '@material-ui/icons';

import { useLogsContext } from 'src/context/logs';
import { useUsersContext } from 'src/context/users';

import { ILogs } from 'src/types/Logs';
import { IUsers } from '../../../types/Users';

import getMonthName from '../../../utils/getMonthName';
import {
	dataEnum,
	dotToCommaConverter,
	getTempColor,
	getWindFeelName,
	Wind,
} from 'src/utils';
import { GetWeatherIcon } from 'src/utils';

import { MobileDataCard } from './MobileDataCard';
import { ErrorPage } from '../../ErrorPage';
import { DeleteLogModal } from 'src/components/DeleteLogModal';
import EditLogModal from 'src/components/EditLogModal/EditLogModal';

import useStyles from './styles';

export const MobileDailyOverview = () => {
	const classes = useStyles();
	const { log, logs } = useLogsContext();
	const { user } = useUsersContext();
	const navigateTo = useNavigate();
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const { id }: any = useParams();

	const [userLog, setUserLog] = useState<ILogs>({
		airFeeling: '',
		airpressure: '',
		date: '',
		description: '',
		humidity: '',
		precipitation: '',
		temperature: '',
		user: '',
		windDirection: '',
		windSpeed: '',
		weather: '',
	});
	const [userInfo, setUserInfo] = useState<IUsers>({
		firstName: '',
		lastName: '',
		city: '',
	});
	const [year, setYear] = useState<string | undefined>('');
	const [month, setMonth] = useState<string | undefined>('');
	const [day, setDay] = useState<string | undefined>('');

	const getLog = useLogsContext().getLog;

	const logsLength = logs.length;

	const findDate: any = logs.find((e) => e.date === id);
	const findOld = logs.indexOf(findDate);

	/** Change to earlier day */
	const prevDay = () => {
		if (findOld === logsLength - 1) return;
		if (findOld !== -1) return navigateTo(`/log/${logs[findOld + 1].date}`);
	};

	/** Change to next day */
	const nextDay = () => {
		if (findOld === 0) return;
		if (findOld !== -1) return navigateTo(`/log/${logs[findOld - 1].date}`);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setUserInfo(user);
		setUserLog(log);
		setYear(userLog?.date.substring(0, 4));
		setMonth(getMonthName(userLog?.date.substring(4, 6)));
		setDay(userLog?.date.substring(6, 8));
	});

	useEffect(() => {
		getLog(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, showEditModal]);

	return (
		<>
			{showEditModal && (
				<EditLogModal open={true} handleClose={() => setShowEditModal(false)} />
			)}
			{showDeleteModal && (
				<DeleteLogModal
					open={true}
					handleClose={() => setShowDeleteModal(false)}
					logID={log._id}
				/>
			)}
			{findDate === undefined ? (
				<ErrorPage />
			) : (
				<Grid container item>
					<Grid container item className={classes.header}>
						<Grid container item className={classes.dateContainer}>
							<IconButton
								onClick={prevDay}
								className={classes.arrow}
								disabled={findOld === logsLength - 1}
							>
								<ArrowBackRounded />
							</IconButton>
							<Typography variant="h5" className={classes.date}>
								{day} {month?.substring(0, 3)} {year}
							</Typography>
							<IconButton
								onClick={nextDay}
								className={classes.arrow}
								disabled={findOld === 0}
							>
								<ArrowForwardRounded />
							</IconButton>
						</Grid>
						<Grid item className={classes.iconButtons}>
							<IconButton
								className={classes.iconButton}
								onClick={() => setShowEditModal(true)}
								size="small"
							>
								<EditRounded fontSize="small" />
							</IconButton>
							<IconButton
								className={classes.iconButton}
								onClick={() => setShowDeleteModal(true)}
								size="small"
							>
								<DeleteRounded fontSize="small" />
							</IconButton>
						</Grid>
					</Grid>
					<Grid container item className={classes.weatherAndTempContainer}>
						<Grid item className={classes.tempContainer}>
							{GetWeatherIcon(userLog?.weather, 'large')}
							<Typography variant="h3" className={classes.temp}>
								{`${dotToCommaConverter(userLog?.temperature)}°C`}
							</Typography>
							<Grid
								className={classes.tempColor}
								style={{
									backgroundColor: getTempColor(parseInt(userLog?.temperature)),
								}}
							/>
						</Grid>
						<Grid
							item
							container
							direction="column"
							className={classes.dataContainer}
						>
							<Grid item container className={classes.dataTextContainer}>
								{userLog.airFeeling !== '' && (
									<>
										<Wind />
										<Typography variant="body2" className={classes.windFeel}>
											{getWindFeelName(userLog.airFeeling)}
										</Typography>
									</>
								)}
							</Grid>
							<Grid item container className={classes.dataTextContainer}>
								<PlaceRounded />
								<Typography variant="body2" className={classes.cityName}>
									{userInfo?.city}
								</Typography>
							</Grid>
						</Grid>
						{userLog.description && (
							<Grid
								container
								item
								direction="column"
								className={classes.notesContainer}
							>
								<Typography variant="subtitle1" className={classes.notesTitle}>
									Anteckningar
								</Typography>
								<Typography variant="body1" className={classes.notesBody}>
									{userLog?.description}
								</Typography>
							</Grid>
						)}
					</Grid>
					<Grid item container className={classes.cardContainer}>
						<MobileDataCard
							label={dataEnum.WIND_DIRECTION}
							windDirection={
								userLog.windDirection !== '' ? userLog.windDirection : 'noWind'
							}
						/>
						<MobileDataCard
							label={dataEnum.WIND_SPEED}
							data={userLog?.windSpeed !== '' ? userLog?.windSpeed : 0}
							unit="m/s"
						/>
						<MobileDataCard
							label={dataEnum.WIND_FEEL}
							data={
								userLog?.airFeeling !== ''
									? getWindFeelName(userLog.airFeeling)
									: 'Ingen'
							}
						/>
						<MobileDataCard
							label={dataEnum.PRECIPITATION}
							data={
								userLog?.precipitation !== ''
									? dotToCommaConverter(userLog?.precipitation)
									: 0
							}
							unit="mm"
						/>
						<MobileDataCard
							label={dataEnum.AIR_PRESSURE}
							data={userLog?.airpressure !== '' ? userLog?.airpressure : 0}
							unit="hPa"
						/>
						<MobileDataCard
							label={dataEnum.HUMIDITY}
							data={userLog?.humidity !== '' ? userLog?.humidity : 0}
							unit="%"
						/>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default MobileDailyOverview;
