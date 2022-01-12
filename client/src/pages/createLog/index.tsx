import { Grid } from '@material-ui/core';
import { CreateLog } from 'src/components';

import useStyles from './styles';

export const CreateLogPage = () => {
	const classes = useStyles();

	return (
		<Grid container item className={classes.root}>
			<CreateLog />
		</Grid>
	);
};

export default CreateLogPage;
