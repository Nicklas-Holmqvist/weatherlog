import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

import { useUsersContext } from '../../../context/users';

import useStyles from './styles';

export const SettingsPassword = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const changePassword = useUsersContext().changePassword;
	const { password } = useUsersContext();

	return (
		<Grid container direction="column" className={classes.settingsContainer}>
			<Grid container direction="column">
				<Typography variant="h4">Byt lösenord</Typography>
				<TextField
					name="oldPassword"
					value={password.oldPassword}
					helperText=""
					variant="standard"
					margin="dense"
					size="small"
					label="Gamla lösenordet"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="newPassword"
					value={password.newPassword}
					helperText=""
					variant="standard"
					margin="dense"
					size="small"
					label="Nya lösenordet"
					onChange={(e) => handleChange(e)}
				/>
				<Button onClick={changePassword}>Ändra lösenord</Button>
			</Grid>
		</Grid>
	);
};

export default SettingsPassword;
