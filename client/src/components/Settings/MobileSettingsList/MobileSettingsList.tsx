import { Chip, Grid } from '@material-ui/core';

import useStyles from './styles';

interface IMobileSettingsList {
	active: number;
	setActive: (number: number) => void;
}

export const MobileSettingsList = ({
	active,
	setActive,
}: IMobileSettingsList) => {
	const classes = useStyles();

	return (
		<Grid item container>
			<Chip
				label="Konto"
				variant={active === 1 ? 'default' : 'outlined'}
				onClick={() => setActive(1)}
				className={classes.chip}
			/>
			<Chip
				label="Lösenord"
				variant={active === 2 ? 'default' : 'outlined'}
				onClick={() => setActive(2)}
				className={classes.chip}
			/>
		</Grid>
	);
};

export default MobileSettingsList;
