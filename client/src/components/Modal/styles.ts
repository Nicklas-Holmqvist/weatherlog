import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		background: theme.palette.common.white,
		padding: 24,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: 16,
		maxWidth: 450,
	},
	title: {
		marginBottom: 10,
	},
	button: {
		borderRadius: 6,
		marginTop: 26,
		backgroundColor: theme.palette.error.main,
		color: theme.palette.common.white,
		paddingLeft: 24,
		paddingRight: 24,
		width: '100%',
		'&:hover': {
			backgroundColor: theme.palette.grey[800],
		},
	},
}));
