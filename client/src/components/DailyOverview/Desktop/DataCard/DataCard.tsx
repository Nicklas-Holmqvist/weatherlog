import { Grid, Typography } from '@material-ui/core';
import {
	directionEnum,
	North,
	NorthWest,
	West,
	SouthWest,
	South,
	SouthEast,
	East,
	NorthEast,
	NoData,
} from 'src/utils';

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

	const getWindDirection = () => {
		switch (windDirection) {
			case directionEnum.N:
				return <North className={classes.arrowIcon} />;
			case directionEnum.NW:
				return <NorthWest className={classes.arrowIcon} />;
			case directionEnum.W:
				return <West className={classes.arrowIcon} />;
			case directionEnum.SW:
				return <SouthWest className={classes.arrowIcon} />;
			case directionEnum.S:
				return <South className={classes.arrowIcon} />;
			case directionEnum.SE:
				return <SouthEast className={classes.arrowIcon} />;
			case directionEnum.E:
				return <East className={classes.arrowIcon} />;
			case directionEnum.NE:
				return <NorthEast className={classes.arrowIcon} />;
			default:
				return <NoData />;
		}
	};

	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="subtitle1" className={classes.label}>
				{label}
			</Typography>
			<Grid container item className={classes.data}>
				{windDirection ? (
					<Grid item className={classes.windBackground}>
						{getWindDirection()}
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
