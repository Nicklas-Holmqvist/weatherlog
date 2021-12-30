import {
	Divider,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import {
	ArrowBackRounded,
	ArrowForwardRounded,
	DeleteRounded,
	EditRounded,
	PlaceRounded,
} from '@material-ui/icons';

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
import { windFeelEnum } from 'src/utils/enums';

export const DesktopDailyOverview = () => {
	const classes = useStyles();

	return (
		<Grid item container className={classes.root}>
			{/* huvudcontainer */}
			<Grid item container direction="column" className={classes.leftContainer}>
				{/* vänstersidan */}
				<Grid item container className={classes.dateContainer}>
					<IconButton className={classes.iconButton}>
						<ArrowBackRounded />
					</IconButton>
					<Typography variant="h3">23 maj</Typography>
					<IconButton className={classes.iconButton}>
						<ArrowForwardRounded />
					</IconButton>
				</Grid>
				<SemiClear className={classes.weatherIcon} />
				<Grid item container direction="column">
					<Grid item container className={classes.tempAndColorContainer}>
						<Typography variant="h3" className={classes.temp}>
							17°C
						</Typography>
						<Grid
							className={classes.tempColor}
							style={{ backgroundColor: getTempColor(17) }}
						/>
					</Grid>
					<Divider className={classes.divider} />
					<List dense>
						<ListItem className={classes.location}>
							<ListItemIcon>
								<PlaceRounded color="secondary" />
							</ListItemIcon>
							<Typography variant="subtitle1">Göteborg</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<SemiClear />
							</ListItemIcon>
							<ListItemText secondary="Halvklart" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<Wind />
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
						<Typography variant="body1">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Necessitatibus, eos qui quam velit labore molestias, libero
							explicabo, temporibus deleniti sint sapiente et vel. Repellat eum,
							ea mollitia rem facere exercitationem.
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
					{/* card container */}
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
						data={windFeelEnum.MILD}
						bottomInfo={GetBottomInfo(dataEnum.WIND_FEEL, windFeelEnum.MILD)!}
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
	);
};

export default DesktopDailyOverview;
