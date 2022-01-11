import {
	Button,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { ModalPopup } from 'src/components';

import { useUsersContext } from '../../../context/users';
import useStyles from './styles';

export const SettingsUser = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const editUser = useUsersContext().editUser;
	const { user } = useUsersContext();

	const [showModal, setShowModal] = useState(false);

	const handleEditAccount = () => {

		if (user.firstName === '' && user.firstName.length <= 2)  {
			console.log(user.firstName)
			return
		}
		if (user.lastName === '')  {
			console.log(user.lastName)
			return
		}
		if (user.city === '')  {
			console.log(user.city)
			return
		}
		if (!user.email?.toString().includes('@' && '.')) {
			console.log(2, user.email)
			return
		}
		if (user.email === '')  {
			console.log(1, user.email)
			return
		}
		
		editUser()
	}

	return (
		<>
			{showModal && (
				<ModalPopup open={true} handleClose={() => setShowModal(false)} />
			)}
			<Grid container direction="column" className={classes.root}>
				<Typography variant="h5" className={classes.title}>
					Konto
				</Typography>
				<Grid container item className={classes.textFieldContainer}>
					<Grid item>
						<Typography variant="subtitle1">Förnamn</Typography>
						<TextField
							fullWidth
							name="firstName"
							value={user?.firstName}
							helperText=""
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={classes.textField}
						/>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1">Efternamn</Typography>
						<TextField
							fullWidth
							name="lastName"
							value={user?.lastName}
							helperText=""
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={classes.textField}
						/>
					</Grid>
					<Grid item className={classes.marginTop}>
						<Typography variant="subtitle1">Ort</Typography>
						<TextField
							fullWidth
							name="city"
							value={user?.city}
							helperText=""
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={`${classes.textField} ${classes.marginTop}`}
						/>
					</Grid>
					<Grid item className={classes.marginTop}>
						<Typography variant="subtitle1">Email</Typography>
						<TextField
							fullWidth
							name="email"
							value={user?.email}
							helperText=""
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={classes.textField}
						/>
					</Grid>
				</Grid>
				<Divider className={classes.divider} />
				<Grid item container className={classes.removeAccountContainer}>
					<Grid item>
						<Typography variant="subtitle1">Ta bort konto</Typography>
						<Typography variant="body2" className={classes.removeAccountText}>
							När du tar bort ditt konto försvinner det och datan du sparat för
							alltid! Detta kan inte ångras
						</Typography>
					</Grid>
					<Button
						onClick={() => setShowModal(!showModal)}
						variant="contained"
						disableElevation
						className={classes.removeAccountButton}
					>
						Ta bort konto
					</Button>
				</Grid>
				<Divider className={classes.divider} />
				<Button
					onClick={handleEditAccount}
					variant="contained"
					disableElevation
					className={classes.button}
				>
					Bekräfta ändringar
				</Button>
			</Grid>
		</>
	);
};

export default SettingsUser;
