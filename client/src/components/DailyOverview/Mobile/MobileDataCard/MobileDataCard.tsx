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
	windFeelEnum,
} from 'src/utils';
import useStyles from './styles';

interface IDataCard {
	label: string;
	windDirection?: string;
	data?: string | number;
	unit?: string;
}

export const MobileDataCard = ({
	label,
	windDirection,
	data,
	unit,
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
		<Grid item container className={classes.root}>
			<Typography variant="subtitle1" className={classes.label}>
				{label}
			</Typography>
			<Grid container item direction="column" className={classes.container}>
				<Grid container item className={classes.data}>
					{windDirection ? (
						getWindDirection()
					) : (
						<>
							<Typography
								variant="h3"
								className={
									data === windFeelEnum.COLD ||
									data === windFeelEnum.COOL ||
									data === windFeelEnum.NEUTRAL ||
									data === windFeelEnum.MILD ||
									data === windFeelEnum.WARM
										? classes.windFeelValue
										: classes.value
								}
							>
								{data}
							</Typography>
							<Typography variant="h5" className={classes.unit}>
								{unit}
							</Typography>
						</>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MobileDataCard;
