import { useState } from 'react';
import {
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';
import {
	AccountCircleRounded,
	ArrowForwardRounded,
	LockOutlined,
} from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../context/auth';

import useStyles from './styles';
import {
	getEmailError,
	getEmailErrorText,
	getPasswordError,
	getPasswordErrorText,
} from 'src/utils';
import { Helmet } from 'react-helmet-async';

export const RegisterForm = () => {
	const classes = useStyles();
	const navigateTo = useNavigate();
	const handleAuth = useAuthContext().handleAuth;

	const [user, setUser] = useState({
		email: '',
		password: '',
		passwordToConfirm: '',
	});
	const [emailError, setEmailError] = useState({
		empty: false,
		format: false,
		alreadyRegistered: false,
	});
	const [passwordError, setPasswordError] = useState({
		empty: false,
		tooShort: false,
		format: false,
		notMatching: false,
	});

	const formData = { email: user.email.toLowerCase(), password: user.password };

	const handleCreateAccount = () => {
		setEmailError({ empty: false, format: false, alreadyRegistered: false });
		setPasswordError({
			empty: false,
			tooShort: false,
			format: false,
			notMatching: false,
		});

		const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!user.email.match(regexEmail)) {
			setEmailError((oldstate) => ({
				...oldstate,
				format: true,
			}));
			return;
		}

		if (user.password === '') {
			setPasswordError((oldstate) => ({
				...oldstate,
				empty: true,
			}));
			return;
		}
		if (user.password.length < 6) {
			setPasswordError((oldstate) => ({
				...oldstate,
				tooShort: true,
			}));
			return;
		}
		if (!/([A-Za-z._-]{0,})\d\w+/.test(user.password)) {
			setPasswordError((oldstate) => ({
				...oldstate,
				format: true,
			}));
			return;
		}
		if (user.password !== user.passwordToConfirm) {
			setPasswordError((oldstate) => ({
				...oldstate,
				notMatching: true,
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
			const res = await fetch('api/user/register', options);
			const data = await res.json();

			if (data.errors) {
				console.log('Anv??ndaren finns redan!');
				if (data.errors.email) {
					setEmailError((oldstate) => ({
						...oldstate,
						alreadyRegistered: true,
					}));
				}
			} else {
				navigateTo('/home', { replace: true });
				handleAuth(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container item direction="column" className={classes.container}>
			<Helmet>
				<title>Skapa konto | V??derdagboken</title>
				<meta
					name="skapa konto"
					content="Skapa ett konto f??r att logga ditt v??der"
				/>
			</Helmet>
			<Typography variant="h4" className={classes.title}>
				Skapa konto
			</Typography>
			<TextField
				error={getEmailError(emailError)}
				helperText={getEmailErrorText(emailError)}
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
				type="email"
				className={classes.input}
				placeholder="Email*"
				onChange={(event: any) =>
					setUser((oldstate) => ({
						...oldstate,
						email: event.target.value,
					}))
				}
				required
			/>
			<TextField
				error={getPasswordError(passwordError)!}
				helperText={getPasswordErrorText(passwordError)!}
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
				placeholder="L??senord*"
				onChange={(event: any) =>
					setUser((oldstate) => ({
						...oldstate,
						password: event.target.value,
					}))
				}
				required
			/>
			<TextField
				error={passwordError.notMatching}
				helperText={
					passwordError.notMatching ? getPasswordErrorText(passwordError) : null
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
				placeholder="Bekr??fta l??senord*"
				onChange={(event: any) =>
					setUser((oldstate) => ({
						...oldstate,
						passwordToConfirm: event.target.value,
					}))
				}
				required
			/>
			<Button
				name="skapa konto"
				variant="contained"
				color="secondary"
				className={classes.button}
				onClick={() => handleCreateAccount()}
				disableElevation
			>
				Skapa konto
			</Button>
			<Grid item className={classes.link}>
				<Typography variant="subtitle1" className={classes.bottomText}>
					Har du redan ett konto?
				</Typography>
				<ArrowForwardRounded className={classes.arrow} />
				<Link to="/login">
					<Typography variant="subtitle1" className={classes.clickableLink}>
						Logga in h??r
					</Typography>
				</Link>
			</Grid>
		</Grid>
	);
};

export default RegisterForm;
