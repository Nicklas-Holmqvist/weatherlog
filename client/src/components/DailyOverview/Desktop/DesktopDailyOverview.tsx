import { useParams } from 'react-router-dom';
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

import { ILogs } from '../../../types/Logs'
import { IUsers } from '../../../types/Users'
import { useLogsContext } from 'src/context/logs';
import { useUsersContext } from 'src/context/users';
import { DataCard } from './DataCard';
import {
	dataEnum,
	directionEnum,
	dotToCommaConverter,
	GetBottomInfo,
	getTempColor,
	Overcast,
	SemiClear,
	WarmBar,
	Wind,
} from 'src/utils';
import getMonthName from '../../../utils/getMonthName'
import useStyles from './styles';
import { windFeelEnum, GetWeatherIcon } from 'src/utils';
import theme from 'src/theme';

export const DesktopDailyOverview = () => {
	const classes = useStyles();
	const laptopScreen = useMediaQuery(theme.breakpoints.down(1281));
	const { log } = useLogsContext()
	const { user } = useUsersContext()

	const id = useParams().id
	const [userLog, setUserLog] = useState<ILogs>(log)
	const [userInfo, setUserInfo] = useState<IUsers>({
		firstName: '',
		lastName: '',
		city: ''
	})

	const getLog = useLogsContext().getLog

	const month:string | undefined = getMonthName(userLog.date.substring(4,6))
	const day:string = userLog.date.substring(6,8)

	useEffect(() => {
		setUserInfo(user)
		setUserLog(log)
		console.log(log)
	})
	
	useEffect(()=> {
		getLog(id)
	},[userInfo])

	return (
		<Grid item container className={classes.root}>
			{/* huvudcontainer */}
			<Grid item container direction="column" className={classes.leftContainer}>
				{/* vänstersidan */}
				<Grid item container className={classes.dateContainer}>
					<IconButton className={classes.arrow}>
						<ArrowBackRounded />
					</IconButton>
					<Typography variant="h3" className={classes.date}>
						{day} {month?.substring(0,3)}
					</Typography>
					<IconButton className={classes.arrow}>
						<ArrowForwardRounded />
					</IconButton>
				</Grid>
				{laptopScreen && <Divider className={classes.divider} />}
				{!laptopScreen && GetWeatherIcon(userLog.weather, 'large')}
				<Grid item container direction="column">
					<Grid item container className={classes.tempAndColorContainer}>
						<Typography variant="h3" className={classes.temp}>
							{`${userLog.temperature}°C`}
						</Typography>
						{laptopScreen && GetWeatherIcon(userLog.weather, 'large')}
						{!laptopScreen && (
							<Grid
								className={classes.tempColor}
								style={{ backgroundColor: getTempColor(parseInt(userLog.temperature)) }}
							/>
						)}
					</Grid>
					<Divider className={classes.divider} />
					<List dense className={classes.list}>
						<ListItem className={classes.location}>
							<ListItemIcon>
								<PlaceRounded color="secondary" />
							</ListItemIcon>
							<Typography variant="subtitle1">{userInfo.city}</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemIcon>								
									{GetWeatherIcon(userLog.weather, 'small')}
							</ListItemIcon>
							<ListItemText secondary={userLog.weather !== '' ? dotToCommaConverter((userLog.weather)) : 'Ej angivit'} />
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemIcon>
								<Wind className={classes.listIcon} />
							</ListItemIcon>
							<ListItemText secondary={userLog.airFeeling !== '' ? dotToCommaConverter((userLog.airFeeling)) : 'Ingen'} />
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
							{userLog.description}
						</Typography>
					</Grid>
					<Grid item className={classes.iconButtons}>
						<IconButton className={classes.iconButton}>
							<EditRounded />
						</IconButton>
						<IconButton className={classes.iconButton}>
							<DeleteRounded />
						</IconButton>
					</Grid>
				</Grid>
				<Grid item container className={classes.cardContainer}>
					<DataCard
						label={dataEnum.WIND_DIRECTION}
						windDirection={directionEnum.SE}
						bottomInfo={
							GetBottomInfo(dataEnum.WIND_DIRECTION, dataEnum.WIND_DIRECTION)!
						}
					/>
					<DataCard
						label={dataEnum.WIND_SPEED}
						data={userLog.windSpeed !== '' ? userLog.windSpeed : 0}
						unit="m/s"
						bottomInfo={GetBottomInfo(dataEnum.WIND_SPEED, userLog.windSpeed)!}
					/>
					<DataCard
						label={dataEnum.WIND_FEEL}
						data={userLog.airFeeling !== '' ? dotToCommaConverter((userLog.airFeeling)) : 'Ingen'}
						bottomInfo={GetBottomInfo(dataEnum.WIND_FEEL, userLog.airFeeling !== '' ? dotToCommaConverter((userLog.airFeeling)) : 0)!}
					/>
					<DataCard
						label={dataEnum.PRECIPITATION}
						data={userLog.precipitation !== '' ? dotToCommaConverter((userLog.precipitation)) : 0}
						unit="mm"
						bottomInfo={GetBottomInfo(dataEnum.PRECIPITATION, userLog.precipitation)!}
					/>
					<DataCard
						label={dataEnum.AIR_PRESSURE}
						data={userLog.airpressure !== '' ? userLog.airpressure : 0}
						unit="hPa"
						bottomInfo={GetBottomInfo(dataEnum.AIR_PRESSURE, userLog.airpressure !== '' ? userLog.airpressure : '0')!}
					/>
					<DataCard
						label={dataEnum.HUMIDITY}
						data={userLog.humidity !== '' ? userLog.humidity : 0}
						unit="%"
						bottomInfo={GetBottomInfo(dataEnum.HUMIDITY, userLog.humidity !== '' ? userLog.humidity : 0)!}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default DesktopDailyOverview;
