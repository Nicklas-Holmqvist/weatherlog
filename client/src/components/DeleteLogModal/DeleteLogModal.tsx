import { Box, Typography, Modal, Button } from '@material-ui/core';

// import { useUsersContext } from 'src/context/users';
import useStyles from './styles';

interface IModalPopup {
	// title: string;
	// body: string;
	// buttonText: string;
	// onClick: () => void;
	open: boolean;
	handleClose: () => void;
}

export const DeleteLogModal = ({ open, handleClose }: IModalPopup) => {
	const classes = useStyles();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box className={classes.container}>
				<Typography variant="subtitle1" className={classes.title}>
					Är du säker på att du vill ta bort inlägget?
				</Typography>
				<Typography variant="body2">Detta kan inte ångras.</Typography>
				<Button
					variant="contained"
					onClick={() => console.log('trycktes på')}
					className={classes.button}
					disableElevation
				>
					Ta bort inlägg
				</Button>
			</Box>
		</Modal>
		// <Modal
		// 	open={open}
		// 	onClose={handleClose}
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

export default DeleteLogModal;
