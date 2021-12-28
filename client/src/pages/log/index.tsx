import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const LogPage = () => {
	const classes = useStyles();
	return (
		<Grid container item className={classes.container}>
			<Typography>Log</Typography>
		</Grid>
	);
};

export default LogPage;
