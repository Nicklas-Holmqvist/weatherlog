import { MenuItem, ListItemIcon, Typography } from '@material-ui/core';

import {
	Fog,
	Hail,
	Overcast,
	Rain,
	RainShower,
	SemiClear,
	Snowfall,
	SnowShower,
	SnowyRain,
	Sun,
	Thunder,
} from '../../../utils';
import useStyles from './styles';

export const WeatherList = () => {
	const classes = useStyles();
	return (
		<>
			<MenuItem value={'clear'}>
				<ListItemIcon className={classes.iconContainer}>
					<Sun className={classes.icon} />
				</ListItemIcon>
				<Typography>Klart</Typography>
			</MenuItem>
			<MenuItem value={'semi-clear'}>
				<ListItemIcon className={classes.iconContainer}>
					<SemiClear className={classes.icon} />
				</ListItemIcon>
				<Typography>Halvklart</Typography>
			</MenuItem>
			<MenuItem value={'overcast'}>
				<ListItemIcon className={classes.iconContainer}>
					<Overcast className={classes.icon} />
				</ListItemIcon>
				<Typography>Mulet</Typography>
			</MenuItem>
			<MenuItem value={'rain-shower'}>
				<ListItemIcon className={classes.iconContainer}>
					<RainShower className={classes.icon} />
				</ListItemIcon>
				<Typography>Regnskurar</Typography>
			</MenuItem>
			<MenuItem value={'heavy-rain'}>
				<ListItemIcon className={classes.iconContainer}>
					<Rain className={classes.icon} />
				</ListItemIcon>
				<Typography>Regn</Typography>
			</MenuItem>
			<MenuItem value={'hail'}>
				<ListItemIcon className={classes.iconContainer}>
					<Hail className={classes.icon} />
				</ListItemIcon>
				<Typography>Hagel</Typography>
			</MenuItem>
			<MenuItem value={'thunder'}>
				<ListItemIcon className={classes.iconContainer}>
					<Thunder className={classes.icon} />
				</ListItemIcon>
				<Typography>Åska</Typography>
			</MenuItem>
			<MenuItem value={'snowy-rain'}>
				<ListItemIcon className={classes.iconContainer}>
					<SnowyRain className={classes.icon} />
				</ListItemIcon>
				<Typography>Snöblandat regn</Typography>
			</MenuItem>
			<MenuItem value={'snowfall'}>
				<ListItemIcon className={classes.iconContainer}>
					<Snowfall className={classes.icon} />
				</ListItemIcon>
				<Typography>Snö</Typography>
			</MenuItem>
			<MenuItem value={'snowfall'}>
				<ListItemIcon className={classes.iconContainer}>
					<SnowShower className={classes.icon} />
				</ListItemIcon>
				<Typography>Snöbyar</Typography>
			</MenuItem>
			<MenuItem value={'fog'}>
				<ListItemIcon className={classes.iconContainer}>
					<Fog className={classes.icon} />
				</ListItemIcon>
				<Typography>Dimma</Typography>
			</MenuItem>
		</>
	);
};

export default WeatherList;
