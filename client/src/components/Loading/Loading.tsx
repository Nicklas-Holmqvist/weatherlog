import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

export const Loading = () => {
	const classes = useStyles()

	return (
		<Grid container  className={classes.center}>
			<CircularProgress className={classes.circle}/>
		</Grid>
	);
};

export default Loading;
