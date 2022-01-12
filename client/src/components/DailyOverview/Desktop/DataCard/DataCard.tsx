import { Grid, Typography } from '@material-ui/core';
import { directionEnum, GetWindDirection } from 'src/utils';

import useStyles from './styles';

interface IDataCard {
	label: string;
	windDirection?: string;
	data?: string | number;
	unit?: string;
	bottomInfo: string | JSX.Element;
}

export const DataCard = ({
	label,
	windDirection,
	data,
	unit,
	bottomInfo,
}: IDataCard) => {
	const classes = useStyles();

	console.log(windDirection)

	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="subtitle1" className={classes.label}>
				{label}
			</Typography>
			<Grid container item className={classes.data}>
				{windDirection ? (
					<Grid item className={classes.windBackground}>
						{GetWindDirection(windDirection, 'large')}
					</Grid>
				) : (
					<>
						<Typography variant="h3" className={classes.number}>
							{data}
						</Typography>
						<Typography variant="h5" className={classes.unit}>
							{unit}
						</Typography>
					</>
				)}
			</Grid>
			<Typography variant="subtitle2" className={classes.bottomInfo}>
				{bottomInfo}
			</Typography>
		</Grid>
	);
};

export default DataCard;
