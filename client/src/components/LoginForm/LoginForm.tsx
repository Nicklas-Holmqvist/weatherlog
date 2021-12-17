import { useState } from 'react';
import {
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';
import { AccountCircleRounded, LockOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

export const LoginForm = () => {
	const classes = useStyles();
	const navigateTo = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState({
		format: false,
		notRegistered: false,
	});
	const [passwordError, setPasswordError] = useState({
		empty: false,
		invalid: false,
	});

	const formData = { email, password };

	const handleLogin = () => {
		setEmailError({ format: false, notRegistered: false });
		setPasswordError({ empty: false, invalid: false });

		if (!email.includes('@' && '.')) {
			setEmailError((oldstate) => ({
				...oldstate,
				format: true,
			}));
			return;
		}

		if (password === '') {
			setPasswordError((oldstate) => ({
				...oldstate,
				empty: true,
			}));
		}

		fetchUser();
	};

	const fetchUser = async () => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};

		try {
			const res = await fetch('api/user/login', options);
			const data = await res.json();

			console.log(data);

			if (data.errors) {
				if (data.errors.email) {
					setEmailError((oldstate) => ({
						...oldstate,
						notRegistered: true,
					}));
				}
				if (data.errors.password) {
					setPasswordError((oldstate) => ({
						...oldstate,
						invalid: true,
					}));
				}
			}

			if (data.user) {
				navigateTo('/example');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="h4" className={classes.title}>
				Logga in
			</Typography>
			<TextField
				error={emailError.format || emailError.notRegistered}
				helperText={
					emailError.format
						? 'Vänligen skriv in en korrekt email-adress'
						: emailError.notRegistered
						? 'Denna email-adress finns ej registrerad'
						: null
				}
				variant="outlined"
				margin="normal"
				className={classes.input}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircleRounded className={classes.icon} />
						</InputAdornment>
					),
				}}
				placeholder="Email"
				onChange={(event: any) => setEmail(event.target.value)}
				required
			/>
			<TextField
				error={passwordError.empty || passwordError.invalid}
				helperText={
					passwordError.empty
						? 'Vänligen skriv in ditt lösenord'
						: passwordError.invalid
						? 'Fel lösenord'
						: null
				}
				variant="outlined"
				margin="normal"
				type="password"
				className={classes.input}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockOutlined className={classes.icon} />
						</InputAdornment>
					),
				}}
				placeholder="Lösenord"
				onChange={(event: any) => setPassword(event.target.value)}
				required
			/>
			<Typography className={classes.forgotPassword}>
				Glömt lösenord?
			</Typography>
			<Button
				variant="contained"
				color="secondary"
				size="large"
				className={classes.button}
				onClick={() => handleLogin()}
				disableElevation
			>
				Logga in
			</Button>
			<Typography variant="subtitle1" className={classes.createAccount}>
				Skapa konto
			</Typography>
		</Grid>
	);
};

export default LoginForm;
