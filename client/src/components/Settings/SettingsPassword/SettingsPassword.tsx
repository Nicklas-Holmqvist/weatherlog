import { Button, Grid, TextField, Typography } from '@material-ui/core';

import { useUsersContext } from '../../../context/users';
import useStyles from './styles';

export const SettingsPassword = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const changePassword = useUsersContext().changePassword;
	const { password } = useUsersContext();

	return (
		<Grid container direction="column" className={classes.root}>
			<Typography variant="h5" className={classes.title}>
				Lösenord
			</Typography>
			<Grid container item className={classes.textFieldContainer}>
				<Grid item>
					<Typography variant="subtitle1">Nuvarande lösenord</Typography>
					<TextField
						fullWidth
						name="oldPassword"
						value={password.oldPassword}
						helperText=""
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
						name="newPassword"
						value={password.newPassword}
						helperText=""
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
				onClick={changePassword}
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
