import React, { useEffect } from 'react';
import {
	Button,
	Divider,
	Grid,
	IconButton,
	Snackbar,
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
	const handleAfterChangedEmailSuccess = useUsersContext().handleAfterChangedEmailSuccess;
	const editUser = useUsersContext().editUser;
	const { user, errorEmail } = useUsersContext();

	const [showModal, setShowModal] = useState(false);
	const [open, setOpen] = useState<boolean>(false)
	const [inputTouched, setInputTouched] = useState<boolean>(false)

	const handleClose = () => {
		return setOpen(false)
	}

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
		if (user.firstName !== undefined && user.firstName.length < 2 )  {
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
		if (user.firstName === '')  {
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
		if (user.lastName === undefined)  {
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
		if (user.city === undefined)  {
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
		if(!inputTouched)return
		editUser()
	}

	useEffect(() => {
		setInputTouched(false)
	},[open])

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

	useEffect(() => {
		if(errorEmail.success){
			if(inputTouched){
				setOpen(true)
				handleAfterChangedEmailSuccess()
			}
		}
	}, [errorEmail.success, handleAfterChangedEmailSuccess, inputTouched])

	const action = (
		<React.Fragment>
		  <IconButton
		  	name='ändring genomförd'
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		  >
		  </IconButton>
		</React.Fragment>
	);

	return (
		<>
			{showModal && (
				<ModalPopup open={true} handleClose={() => setShowModal(false)} />
			)}
			<Grid container direction="column" className={classes.root}>
				<Snackbar
					open={open}
					anchorOrigin={{ vertical:'top', horizontal:'center' }}
					autoHideDuration={1000}
					onClose={handleClose}
					message="Användaruppgifterna har uppdaterats!"
					action={action}
				/>
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
							onChange={(e) => {
								setInputTouched(true)
								handleChange(e)
							}}
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
							onChange={(e) => {
								setInputTouched(true)
								handleChange(e)
							}}
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
							onChange={(e) => {
								setInputTouched(true)
								handleChange(e)
							}}
							className={`${classes.textField} ${classes.marginTop}`}
							required
						/>
					</Grid>
					<Grid item className={classes.marginTop}>
						<Typography variant="subtitle1">Email</Typography>
						<TextField
							fullWidth
							error={errorEmail.boolean}
							name="email"
							value={user.email}
							placeholder='Fyll i email'
							helperText={errorEmail.msg}
							variant="outlined"
							margin="dense"
							size="small"
							onChange={(e) => {
								setInputTouched(true)
								handleChange(e)
							}}
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
						name='varning, ta bort konto'
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
					name='spara ändringar'
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
