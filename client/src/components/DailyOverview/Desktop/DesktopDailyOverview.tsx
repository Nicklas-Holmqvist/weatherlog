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
	directionEnum,
	dotToCommaConverter,
	getTempColor,
	Overcast,
	SemiClear,
	WarmBar,
	Wind,
} from 'src/utils';
import useStyles from './styles';

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
						label="Vindriktning"
						windDirection={directionEnum.SW}
						bottomInfo="Över normalt" // getWindDirectionString(dataEnum.WIND_DIRECTION, data)
					/>
					<DataCard
						label="Vindstyrka"
						data={12}
						unit="m/s"
						bottomInfo="Över normalt" // getBottomInfo(dataEnum.WIND_SPEED, data)
					/>
					<DataCard
						label="Vindkänsla"
						data="Varm"
						bottomInfo={<WarmBar className={classes.bar} />} // getTempBar(windFeelEnum.COLD)
					/>
					<DataCard
						label="Nederbörd"
						data={dotToCommaConverter('0.5')}
						unit="mm"
						bottomInfo="Under normalt" // getBottomInfo(dataEnum.PRECIPITATION, data)
					/>
					<DataCard
						label="Lufttryck"
						data={1001}
						unit="hPa"
						bottomInfo="Normalt" // getBottomInfo(dataEnum.AIR_PRESSURE, data)
					/>
					<DataCard
						label="Luftfuktighet"
						data={92}
						unit="%"
						bottomInfo="Normalt" // getBottomInfo(dataEnum.HUMIDITY, data)
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default DesktopDailyOverview;
