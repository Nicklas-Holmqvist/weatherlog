import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';
import { AccountCircleRounded, LockOutlined } from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useLogsContext } from '../../context/logs';
import { useAuthContext } from '../../context/auth';

import useStyles from './styles';

export const LoginForm = () => {
	const classes = useStyles();
	const navigateTo = useNavigate();

	const getLogs = useLogsContext().getLogs;
	const handleAuth = useAuthContext().handleAuth;

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
			return;
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

			if (data.errors) {
				console.log('Fel lösenord!')
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
				navigateTo('/', { replace: true })
				handleAuth(true);
				getLogs();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container item direction="column" className={classes.container}>
			<Helmet>
				<title>Logga in | Väderdagboken</title>
				<meta name="logga in" content="Logga in för att skapa din väderlog" />
			</Helmet>
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
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircleRounded className={classes.icon} />
						</InputAdornment>
					),
				}}
				variant="outlined"
				margin="dense"
				size="small"
				className={classes.input}
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
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockOutlined className={classes.icon} />
						</InputAdornment>
					),
				}}
				variant="outlined"
				margin="dense"
				size="small"
				type="password"
				className={classes.input}
				placeholder="Lösenord"
				onChange={(event: any) => setPassword(event.target.value)}
				required
			/>
			<Button
				name='logga in'
				variant="contained"
				color="secondary"
				className={classes.button}
				onClick={() => handleLogin()}
				disableElevation
			>
				Logga in
			</Button>
			<Link to="/register" className={classes.createAccount}>
				<Typography variant="subtitle1">Skapa konto</Typography>
			</Link>
		</Grid>
	);
};

export default LoginForm;
