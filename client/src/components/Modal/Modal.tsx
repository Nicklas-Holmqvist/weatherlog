import { Box, Typography, Modal, Button } from '@material-ui/core';
import { useState } from 'react';
// import { useUsersContext } from 'src/context/users';

import useStyles from './styles';

// interface IModalPopup {
// 	title: string;
// 	body: string;
// 	buttonText: string;
// 	onClick: () => void;
// }

export const ModalPopup = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	// const deleteAccount = useUsersContext().deleteUser

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
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
					onClick={() => console.log('trycktes på')}
					className={classes.button}
					disableElevation
				>
					Ta bort konto
				</Button>
			</Box>
		</Modal>
		// <Modal
		// 	open={open}
		// 	onClose={() => setOpen(false)}
		// 	aria-labelledby="modal-modal-title"
		// 	aria-describedby="modal-modal-description"
		// >
		// 	<Box>
		// 		<Typography variant="subtitle1">{title}</Typography>
		// 		<Typography variant="body2">{body}</Typography>
		// 		<Button variant="contained" onClick={onClick}>
		// 			{buttonText}
		// 		</Button>
		// 	</Box>
		// </Modal>
	);
};

// Är du säker på att du vill ta bort ditt konto?
// Detta kan inte ångras. Tar du bort ditt konto försvinner även all data kopplat till ditt konto, för alltid!
// Ta bort konto

export default ModalPopup;
