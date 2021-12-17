import { Button, Grid, Typography } from '@material-ui/core';
import { ExitToAppRounded } from '@material-ui/icons';

import useStyles from './styles';
import logo from './weatherlog-mini-logo.svg';

export const Header = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.container}>
			<Grid item container className={classes.wrapper}>
				<Grid item className={classes.left}>
					<img src={logo} alt="Logo" />
					<Typography variant="body1" className={classes.name}>
						Hans Gustavsson, Göteborg
					</Typography>
				</Grid>
				<Grid item>
					<Button endIcon={<ExitToAppRounded />}>Logga ut</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Header;
