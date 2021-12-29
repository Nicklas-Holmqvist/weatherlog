import { Grid, Typography } from '@material-ui/core';
import { directionEnum, GetWindDirection } from 'src/utils';

import useStyles from './styles';

interface IDataCard {
	label: string;
	windDirection?:
		| directionEnum.N
		| directionEnum.NW
		| directionEnum.W
		| directionEnum.SW
		| directionEnum.S
		| directionEnum.SE
		| directionEnum.E
		| directionEnum.NE;
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

	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="subtitle1" className={classes.label}>
				{label}
			</Typography>
			<Grid container item className={classes.data}>
				{windDirection ? (
					<Grid item className={classes.windBackground}>
						{GetWindDirection(windDirection)}
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
			<Typography variant="subtitle2">{bottomInfo}</Typography>
		</Grid>
	);
};

export default DataCard;
