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

import { ILogs } from '../../../types/Logs';
import { useLogsContext } from 'src/context/logs';
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
import useStyles from './styles';
import { windFeelEnum } from 'src/utils';
import theme from 'src/theme';
import EditLogModal from 'src/components/EditLogModal/EditLogModal';
import { DeleteLogModal } from 'src/components/DeleteLogModal';

export const DesktopDailyOverview = () => {
	const classes = useStyles();
	const laptopScreen = useMediaQuery(theme.breakpoints.down(1281));
	const { log } = useLogsContext();

	const id = useParams().id;
	const [userLog, setUserLog] = useState<ILogs>(log);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const getLog = useLogsContext().getLog;

	useEffect(() => {
		console.log(log)
		console.log(userLog)
		getLog(id);
		setUserLog(log);
	}, [userLog, showEditModal]);

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
						<IconButton className={classes.arrow}>
							<ArrowBackRounded />
						</IconButton>
						<Typography variant="h3" className={classes.date}>
							23 maj
						</Typography>
						<IconButton className={classes.arrow}>
							<ArrowForwardRounded />
						</IconButton>
					</Grid>
					{laptopScreen && <Divider className={classes.divider} />}
					{!laptopScreen && <SemiClear className={classes.weatherIcon} />}
					<Grid item container direction="column">
						<Grid item container className={classes.tempAndColorContainer}>
							<Typography variant="h3" className={classes.temp}>
								17°C
							</Typography>
							{laptopScreen && <SemiClear className={classes.weatherIcon} />}
							{!laptopScreen && (
								<Grid
									className={classes.tempColor}
									style={{ backgroundColor: getTempColor(17) }}
								/>
							)}
						</Grid>
						<Divider className={classes.divider} />
						<List dense className={classes.list}>
							<ListItem className={classes.location}>
								<ListItemIcon>
									<PlaceRounded color="secondary" />
								</ListItemIcon>
								<Typography variant="subtitle1">Göteborg</Typography>
							</ListItem>
							<ListItem className={classes.listItem}>
								<ListItemIcon>
									<SemiClear className={classes.listIcon} />
								</ListItemIcon>
								<ListItemText secondary="Halvklart" />
							</ListItem>
							<ListItem className={classes.listItem}>
								<ListItemIcon>
									<Wind className={classes.listIcon} />
								</ListItemIcon>
								<ListItemText secondary="Varm" />
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
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Necessitatibus, eos qui quam velit labore molestias, libero
								explicabo, temporibus deleniti sint sapiente et vel. Repellat
								eum, ea mollitia rem facere exercitationem.
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
							windDirection={directionEnum.SE}
							bottomInfo={
								GetBottomInfo(dataEnum.WIND_DIRECTION, directionEnum.SE)!
							}
						/>
						<DataCard
							label={dataEnum.WIND_SPEED}
							data={5}
							unit="m/s"
							bottomInfo={GetBottomInfo(dataEnum.WIND_SPEED, 5)!}
						/>
						<DataCard
							label={dataEnum.WIND_FEEL}
							data={windFeelEnum.NEUTRAL}
							bottomInfo={
								GetBottomInfo(dataEnum.WIND_FEEL, windFeelEnum.NEUTRAL)!
							}
						/>
						<DataCard
							label={dataEnum.PRECIPITATION}
							data={dotToCommaConverter((1.2).toString())}
							unit="mm"
							bottomInfo={GetBottomInfo(dataEnum.PRECIPITATION, 1.2)!}
						/>
						<DataCard
							label={dataEnum.AIR_PRESSURE}
							data={1001}
							unit="hPa"
							bottomInfo={GetBottomInfo(dataEnum.AIR_PRESSURE, 1001)!}
						/>
						<DataCard
							label={dataEnum.HUMIDITY}
							data={96}
							unit="%"
							bottomInfo={GetBottomInfo(dataEnum.HUMIDITY, 96)!}
						/>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DesktopDailyOverview;
