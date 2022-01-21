import { Grid, Typography } from '@material-ui/core';

import { LoginForm } from 'src/components';
import useStyles from './styles';

export const LoginPage = () => {
	const classes = useStyles();

	return (
		<Grid 
			container 
			direction="column" 
			className={classes.container}
			style={{ 
				backgroundImage: 'url(/vladimir-anikeev-IM8ZyYaSW6g-unsplash.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',				
			}}
			>
			<Grid item className={classes.content}>
			<Typography variant="h1">
				Väderdagboken
			</Typography>
			<Typography variant="h5" className={classes.underTitle}>
				Skapa din interaktiva väderdagbok
			</Typography>
			</Grid>
			<LoginForm />
		</Grid>
	);
};

export default LoginPage;
