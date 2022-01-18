import { Button, Grid, IconButton, Snackbar, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';

import { useUsersContext } from '../../../context/users';

import useStyles from './styles';


export const SettingsPassword = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const changePassword = useUsersContext().changePassword;
	const handleChangePasswordSuccess = useUsersContext().handleChangePasswordSuccess;
	const { password, error, errorMessage, changePasswordSuccess } = useUsersContext();
	const [open, setOpen] = useState<boolean>(false)

	const handleClose = () => {
		return setOpen(false)
	}
	
	useEffect(() => {
		setOpen(changePasswordSuccess)
		handleChangePasswordSuccess()
	},[password])

	const handleChangePassword = () => {
		changePassword()
	}

	const action = (
		<React.Fragment>
		  <IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		  >
		  </IconButton>
		</React.Fragment>
	);

	return (
		<Grid container direction="column" className={classes.root}>
			<Snackbar
				open={open}
				anchorOrigin={{ vertical:'top', horizontal:'center' }}
				autoHideDuration={1000}
				onClose={handleClose}
				message="Lösenord har uppdaterats!"
				action={action}
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
