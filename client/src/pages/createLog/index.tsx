import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { CreateLog } from 'src/components';

import useStyles from './styles';

export const CreateLogPage = () => {
	const classes = useStyles();

	return (
		<Grid container item className={classes.root}>
			<Helmet>
				<title>Skapa väderlogg | Väderdagboken</title>
				<meta name="skapa väderlogg" content="Logga dagens väder" />
			</Helmet>
			<CreateLog />
		</Grid>
	);
};

export default CreateLogPage;
