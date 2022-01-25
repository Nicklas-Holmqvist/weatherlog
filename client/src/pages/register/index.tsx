import { Grid, Typography } from '@material-ui/core';
import { RegisterForm } from 'src/components';

import useStyles from './styles';

export const RegisterPage = () => {
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
				backgroundColor: '#000000',
			}}
		>
			<Grid item className={classes.content}>
				<Typography variant="h1" className={classes.title}>
					Väderdagboken
				</Typography>
				<Typography variant="h5" className={classes.subtitle}>
					Skapa din interaktiva väderdagbok
				</Typography>
			</Grid>
			<RegisterForm />
		</Grid>
	);
};

export default RegisterPage;
