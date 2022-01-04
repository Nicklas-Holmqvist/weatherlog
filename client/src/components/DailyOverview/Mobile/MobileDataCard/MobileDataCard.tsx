import { Grid, Typography } from '@material-ui/core';
import { directionEnum, GetWindDirection, windFeelEnum } from 'src/utils';

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
}

export const MobileDataCard = ({
	label,
	windDirection,
	data,
	unit,
}: IDataCard) => {
	const classes = useStyles();

	return (
		<Grid item container className={classes.root}>
			<Typography variant="subtitle1" className={classes.label}>
				{label}
			</Typography>
			<Grid container item direction="column" className={classes.container}>
				<Grid container item className={classes.data}>
					{windDirection ? (
						GetWindDirection(windDirection)
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
