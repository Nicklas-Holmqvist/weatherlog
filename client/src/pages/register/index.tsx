import { Grid } from '@material-ui/core';
import { RegisterForm } from 'src/components';

import useStyles from './styles';
import logo from './weatherlog-logo.svg';

export const RegisterPage = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.container}>
			{/* om inloggad */}
			<img src={logo} alt="Logo" className={classes.image} />
			<RegisterForm />
		</Grid>
	);
};

export default RegisterPage;
