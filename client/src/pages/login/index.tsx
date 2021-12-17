import { Grid } from '@material-ui/core';

import { LoginForm } from 'src/components';
import logo from './weatherlog-logo.svg';
import useStyles from './styles';

export const LoginPage = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.container}>
			{/* om inloggad */}
			<img src={logo} alt="Logo" className={classes.image} />
			<LoginForm />
		</Grid>
	);
};

export default LoginPage;
