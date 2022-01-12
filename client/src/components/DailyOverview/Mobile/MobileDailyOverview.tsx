import { Grid, IconButton, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
	ArrowBackRounded,
	ArrowForwardRounded,
	DeleteRounded,
	EditRounded,
} from '@material-ui/icons';

import { useLogsContext } from '../../../context/logs';
import { ILogs } from 'src/types/Logs';

import {
	dataEnum,
	directionEnum,
	dotToCommaConverter,
	getTempColor,
	SemiClear,
	windFeelEnum,
} from 'src/utils';
import { MobileDataCard } from './MobileDataCard';
import useStyles from './styles';
import EditLogModal from 'src/components/EditLogModal/EditLogModal';
import { DeleteLogModal } from 'src/components/DeleteLogModal';

export const MobileDailyOverview = () => {
	const classes = useStyles();
	const { log } = useLogsContext();
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const id = useParams().id;
	const [userLog, setUserLog] = useState<ILogs>(log);

	const getLog = useLogsContext().getLog;

	useEffect(() => {
		getLog(id);
		setUserLog(log);
	}, [userLog]);

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
			<Grid container item>
				<Grid container item className={classes.header}>
					<Grid container item className={classes.dateContainer}>
						<IconButton className={classes.arrow}>
							<ArrowBackRounded />
						</IconButton>
						<Typography variant="h5" className={classes.date}>
							23 maj
						</Typography>
						<IconButton className={classes.arrow}>
							<ArrowForwardRounded />
						</IconButton>
					</Grid>
					<Grid item className={classes.iconButtons}>
						<IconButton className={classes.iconButton} size="small">
							<EditRounded
								fontSize="small"
								onClick={() => setShowEditModal(true)}
							/>
						</IconButton>
						<IconButton className={classes.iconButton} size="small">
							<DeleteRounded
								fontSize="small"
								onClick={() => setShowDeleteModal(true)}
							/>
						</IconButton>
					</Grid>
				</Grid>
				<Grid container item className={classes.weatherAndTempContainer}>
					<SemiClear className={classes.weatherIcon} />
					<Grid
						item
						container
						direction="column"
						className={classes.tempContainer}
					>
						<Grid item className={classes.tempContainer}>
							<Typography variant="h3" className={classes.temp}>
								27°C
							</Typography>
							<Grid
								className={classes.tempColor}
								style={{ backgroundColor: getTempColor(27) }}
							/>
						</Grid>
						<Typography variant="body2" className={classes.weatherName}>
							Halvklart
						</Typography>
					</Grid>
				</Grid>
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
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
						earum laboriosam ullam. Ducimus, placeat soluta?
					</Typography>
				</Grid>
				<Grid item container className={classes.cardContainer}>
					<MobileDataCard
						label={dataEnum.WIND_DIRECTION}
						windDirection={directionEnum.NE || '-'}
					/>
					<MobileDataCard label={dataEnum.WIND_SPEED} data={12} unit="m/s" />
					<MobileDataCard
						label={dataEnum.WIND_FEEL}
						data={windFeelEnum.NEUTRAL || '-'}
					/>
					<MobileDataCard
						label={dataEnum.PRECIPITATION}
						data={dotToCommaConverter((5.6).toString()) || '-'}
						unit="mm"
					/>
					<MobileDataCard
						label={dataEnum.AIR_PRESSURE}
						data={1000 || '-'}
						unit="hPa"
					/>
					<MobileDataCard label={dataEnum.HUMIDITY} data={93 || '-'} unit="%" />
				</Grid>
			</Grid>
		</>
	);
};

export default MobileDailyOverview;
