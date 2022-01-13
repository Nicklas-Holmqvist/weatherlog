import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	Divider,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import {
	ArrowBackRounded,
	ArrowForwardRounded,
	DeleteRounded,
	EditRounded,
	PlaceRounded,
} from '@material-ui/icons';

import { useLogsContext } from 'src/context/logs';
import { useUsersContext } from 'src/context/users';

import { ILogs } from '../../../types/Logs'
import { IUsers } from '../../../types/Users'

import { DataCard } from './DataCard';
import {
	dataEnum,
	dotToCommaConverter,
	GetBottomInfo,
	getTempColor,
	Wind,
} from 'src/utils';
import { GetWeatherIcon } from 'src/utils';
import getMonthName from '../../../utils/getMonthName'

import EditLogModal from 'src/components/EditLogModal/EditLogModal';
import { DeleteLogModal } from 'src/components/DeleteLogModal';
import { ErrorPage } from '../../ErrorPage'

import theme from 'src/theme';
import useStyles from './styles';

export const DesktopDailyOverview = () => {
	const classes = useStyles();
	const laptopScreen = useMediaQuery(theme.breakpoints.down(1281));

	const { log, logs } = useLogsContext()
	const { user } = useUsersContext()
	
	const navigateTo = useNavigate(); 

	const {id}:any = useParams();
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const [userLog, setUserLog] = useState<ILogs>({
		airFeeling: "",
        airpressure: "",
        date: '',
        description: "",
        humidity: "",
        precipitation: "",
        temperature: "",
        user: "",
        windDirection: "",
        windSpeed: "",
        weather: ""
	})
	const [userInfo, setUserInfo] = useState<IUsers>({
		firstName: '',
		lastName: '',
		city: ''
	})
	const [month, setMonth] = useState<string | undefined>('')
	const [day, setDay] = useState<string | undefined>('')

	const getLog = useLogsContext().getLog;

	const logsLength = logs.length
	
	const findDate:any = logs.find(e => e.date === id)
    const findOld = logs.indexOf(findDate)

	/** Change to earlier day */
	const prevDay = () => {  		
		if(findOld === (logsLength-1)) return
		if(findOld !== -1) return navigateTo(`/log/${logs[findOld+1].date}`)      
	}
	
	/** Change to next day */
	const nextDay = () => {
		if(findOld === 0) return
		if(findOld !== -1) return navigateTo(`/log/${logs[findOld-1].date}`)      
	}	  

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setUserInfo(user)
		setUserLog(log)
		setMonth(getMonthName(userLog?.date.substring(4,6)))
		setDay(userLog?.date.substring(6,8))
	})
	
	useEffect(()=> {
		getLog(id)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[id, showEditModal])

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
			{findDate === undefined ? <ErrorPage /> :
			<Grid item container className={classes.root}>
				{/* huvudcontainer */}
				<Grid
					item
					container
					direction="column"
					className={classes.leftContainer}
				>
					{/* vänstersidan */}
					<Grid item container className={classes.dateContainer}>
						<IconButton onClick={prevDay} className={classes.arrow}>
							<ArrowBackRounded />
						</IconButton>
						<Typography variant="h3" className={classes.date}>
							{day} {month?.substring(0,3)}
						</Typography>
						<IconButton onClick={nextDay} className={classes.arrow}>
							<ArrowForwardRounded />
						</IconButton>
					</Grid>
					{laptopScreen && <Divider className={classes.divider} />}
					{!laptopScreen && GetWeatherIcon(userLog?.weather, 'large')}
					<Grid container direction="column">
						<Grid item container className={classes.tempAndColorContainer}>
							<Typography variant="h3" className={classes.temp}>
								{`${userLog?.temperature}°C`}
							</Typography>
							{laptopScreen && GetWeatherIcon(userLog?.weather, 'large')}
							{!laptopScreen && (
								<Grid
									className={classes.tempColor}
									style={{ backgroundColor: getTempColor(parseInt(userLog?.temperature)) }}
								/>
							)}
						</Grid>
						<Divider className={classes.divider} />
						<List dense className={classes.list}>
							<ListItem className={classes.location}>
								<ListItemIcon>
									<PlaceRounded color="secondary" />
								</ListItemIcon>
								<Typography variant="subtitle1">{userInfo?.city}</Typography>
							</ListItem>
							<ListItem className={classes.listItem}>
								<ListItemIcon>								
										{GetWeatherIcon(userLog.weather === undefined ? '' : userLog.weather, 'small')}
								</ListItemIcon>
								<ListItemText secondary={userLog.weather === undefined ? 'Ej angivit' : userLog?.weather} />
							</ListItem>
							<ListItem className={classes.listItem}>
								<ListItemIcon>
									<Wind className={classes.listIcon} />
								</ListItemIcon>
								<ListItemText secondary={userLog?.airFeeling !== '' ? dotToCommaConverter((userLog?.airFeeling)) : 'Ingen'} />
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Grid item container className={classes.rightContainer}>
					{/* högersidan */}
					<Grid item container className={classes.notesAndButtons}>
						{/* header (Anteckningar, iconbuttons) */}
						<Grid item className={classes.notes}>
							<Typography variant="subtitle1" className={classes.notesTitle}>
								Anteckningar
							</Typography>
							<Typography variant="body1" className={classes.notesBody}>
								{userLog?.description}
							</Typography>
						</Grid>
						<Grid item className={classes.iconButtons}>
							<IconButton
								className={classes.iconButton}
								onClick={() => setShowEditModal(true)}
							>
								<EditRounded />
							</IconButton>
							<IconButton
								className={classes.iconButton}
								onClick={() => setShowDeleteModal(true)}
							>
								<DeleteRounded />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item container className={classes.cardContainer}>
						<DataCard
							label={dataEnum.WIND_DIRECTION}
							windDirection={userLog.windDirection !== '' ? userLog.windDirection : 'noWind'}
							bottomInfo={
								GetBottomInfo(dataEnum.WIND_DIRECTION, userLog.windDirection !== '' ? userLog.windDirection : '')!
							}
						/>
						<DataCard
							label={dataEnum.WIND_SPEED}
							data={userLog?.windSpeed !== '' ? userLog?.windSpeed : 0}
							unit="m/s"
							bottomInfo={GetBottomInfo(dataEnum.WIND_SPEED, userLog?.windSpeed)!}
						/>
						<DataCard
							label={dataEnum.WIND_FEEL}
							data={userLog?.airFeeling !== '' ? dotToCommaConverter((userLog.airFeeling)) : 'Ingen'}
							bottomInfo={GetBottomInfo(dataEnum.WIND_FEEL, userLog?.airFeeling !== '' ? dotToCommaConverter((userLog?.airFeeling)) : 0)!}
						/>
						<DataCard
							label={dataEnum.PRECIPITATION}
							data={userLog?.precipitation !== '' ? dotToCommaConverter((userLog?.precipitation)) : 0}
							unit="mm"
							bottomInfo={GetBottomInfo(dataEnum.PRECIPITATION, userLog?.precipitation)!}
						/>
						<DataCard
							label={dataEnum.AIR_PRESSURE}
							data={userLog?.airpressure !== '' ? userLog?.airpressure : 0}
							unit="hPa"
							bottomInfo={GetBottomInfo(dataEnum.AIR_PRESSURE, userLog.airpressure !== '' ? userLog.airpressure : '0')!}
						/>
						<DataCard
							label={dataEnum.HUMIDITY}
							data={userLog?.humidity !== '' ? userLog?.humidity : 0}
							unit="%"
							bottomInfo={GetBottomInfo(dataEnum.HUMIDITY, userLog.humidity !== '' ? userLog.humidity : 0)!}
						/>
					</Grid>
				</Grid>
			</Grid>
			}
		</>
	);
};

export default DesktopDailyOverview;
