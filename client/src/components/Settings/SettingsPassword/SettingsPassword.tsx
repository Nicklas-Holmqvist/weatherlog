import { Button, Grid, Snackbar, TextField, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { setTimeout } from 'timers/promises';

import { useUsersContext } from '../../../context/users';

import useStyles from './styles';


export const SettingsPassword = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const changePassword = useUsersContext().changePassword;
	const { password, error, errorMessage, changePasswordSuccess } = useUsersContext();
	const [open, setOpen] = useState<boolean>(false)

	const resetSnackbar = () => {
		return setOpen(false)
	}
	console.log(changePasswordSuccess)
	useEffect(() => {
		setOpen(changePasswordSuccess)
	},[password])

	setTimeout(() => {
		resetSnackbar();
	}, 400);

	const handleChangePassword = () => {
		changePassword()
	}

	return (
		<Grid container direction="column" className={classes.root}>
			<Snackbar
				open={open}
				autoHideDuration={500}
				message="Note archived"
				action={SettingsPassword}
			/>
			<Typography variant="h5" className={classes.title}>
				Lösenord
			</Typography>
			<Grid container item className={classes.textFieldContainer}>
				<Grid item>
					<Typography variant="subtitle1">Nuvarande lösenord</Typography>
					<TextField
						fullWidth
						error={error.oldPassword}
						name="oldPassword"
						value={password.oldPassword}
						helperText={errorMessage.oldPassword}
						variant="outlined"
						margin="dense"
						size="small"
						className={classes.textField}
						type="password"
						onChange={(e) => handleChange(e)}
					/>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1">Nytt lösenord</Typography>
					<TextField
						fullWidth
						error={error.newPassword}
						name="newPassword"
						value={password.newPassword}
						helperText={errorMessage.newPassword}
						variant="outlined"
						margin="dense"
						size="small"
						className={classes.textField}
						type="password"
						onChange={(e) => handleChange(e)}
					/>
				</Grid>
			</Grid>
			<Button
				onClick={handleChangePassword}
				variant="contained"
				disableElevation
				className={classes.button}
			>
				Ändra lösenord
			</Button>
		</Grid>
	);
};

export default SettingsPassword;
