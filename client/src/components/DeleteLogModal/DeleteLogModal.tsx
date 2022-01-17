import { Box, Typography, Modal, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { useLogsContext } from 'src/context/logs';
// import { useUsersContext } from 'src/context/users';
import useStyles from './styles';

interface IModalPopup {
	// title: string;
	// body: string;
	// buttonText: string;
	// onClick: () => void;
	open: boolean;
	handleClose: () => void;
	logID: any;
}

export const DeleteLogModal = ({ open, handleClose, logID }: IModalPopup) => {
	const classes = useStyles();
	const deleteLog = useLogsContext().deletePost;
	const navigateTo = useNavigate();

	const handleDeleteLog = () => {
		handleClose();
		deleteLog(logID);
		navigateTo('/home', { replace: true })
	};

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
					onClick={() => handleDeleteLog()}
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
