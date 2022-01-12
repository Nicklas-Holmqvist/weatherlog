import {
	Button,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { useState } from 'react';

import { useUsersContext } from '../../../context/users';
import { ModalPopup } from 'src/components';

import useStyles from './styles';

export const SettingsUser = () => {
	const classes = useStyles();

	const handleChange = useUsersContext().handleChange;
	const editUser = useUsersContext().editUser;
	const { user } = useUsersContext();

	const [showModal, setShowModal] = useState(false);

	const [errorMessage, setErrorMessage] = useState({
		firstName: '',
		lastName: '',
		city: '',
		
	});
	const [error, setError] = useState({
		firstName: false,
		lastName: false,
		city: false,
	});

	const handleEditAccount = () => {
		resetErrors()
		if (user.firstName === '' && user.firstName.length <= 2)  {
			setError((oldstate) => ({
				...oldstate,
				firstName: true,
			}));
			setErrorMessage((oldstate) => ({
				...oldstate,
				firstName: 'Fyll i förnamn, minst 2 tecken',
			}));
			return
		}
		if (user.lastName === '')  {
			setError((oldstate) => ({
				...oldstate,
				lastName: true,
			}));
			setErrorMessage((oldstate) => ({
				...oldstate,
				lastName: 'Fyll i efternamn',
			}));
			return
		}
		if (user.city === '')  {
			setError((oldstate) => ({
				...oldstate,
				city: true,
			}));
			setErrorMessage((oldstate) => ({
				...oldstate,
				city: 'Fyll i registreringsort',
			}));
			return
		}
		
		setErrorMessage({
			firstName: '',
			lastName: '',
			city: '',
			
		})
		setError({
			firstName: false,
			lastName: false,
			city: false,
			
		})		
		editUser()
	}

	const resetErrors = () => {
		setErrorMessage({
			firstName: '',
			lastName: '',
			city: '',
		})
		setError({
			firstName: false,
			lastName: false,
			city: false,
		})		
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
							error={error.firstName}
							name="firstName"
							value={user.firstName}
							placeholder='Fyll i ditt namn'
							helperText={errorMessage.firstName}
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={classes.textField}
							required
						/>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1">Efternamn</Typography>
						<TextField
							fullWidth
							error={error.lastName}
							name="lastName"
							value={user.lastName}
							placeholder='Fyll i ditt efternamn'
							helperText={errorMessage.lastName}
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={classes.textField}
							required
						/>
					</Grid>
					<Grid item className={classes.marginTop}>
						<Typography variant="subtitle1">Ort</Typography>
						<TextField
							fullWidth
							error={error.city}
							name="city"
							value={user.city}
							placeholder='Fyll i registreringsort'
							helperText={errorMessage.city}
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => handleChange(e)}
							className={`${classes.textField} ${classes.marginTop}`}
							required
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
