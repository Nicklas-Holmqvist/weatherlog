import { Box, Typography, Modal, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom"

import { useUsersContext } from 'src/context/users';
import { useAuthContext } from 'src/context/auth';
import useStyles from './styles';

interface IModalPopup {
	open: boolean;
	handleClose: () => void;
}

export const ModalPopup = ({ open, handleClose }: IModalPopup) => {
	const classes = useStyles();

	const navigateTo = useNavigate()
	const deleteAccount = useUsersContext().deleteUser
	const logout = useAuthContext().logout

	const handleDeleteAccount = () => {
		handleClose()
		deleteAccount()
		navigateTo('/login', { replace: true })
		logout()
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box className={classes.container}>
				<Typography variant="subtitle1" className={classes.title}>
					Är du säker på att du vill ta bort ditt konto?
				</Typography>
				<Typography variant="body2">
					Detta kan inte ångras. Tar du bort ditt konto försvinner även all data
					kopplat till ditt konto, för alltid!
				</Typography>
				<Button
					variant="contained"
					onClick={handleDeleteAccount}
					className={classes.button}
					disableElevation
				>
					Ta bort konto
				</Button>
			</Box>
		</Modal>
	);
};

export default ModalPopup;
