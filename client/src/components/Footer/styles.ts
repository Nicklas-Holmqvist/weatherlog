import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: theme.palette.grey[100],
		position: 'fixed',
		bottom: 0,
		boxShadow: '0px -4px 8px rgba(180, 180, 180, 0.27)',
		padding: '0 100px',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
		[theme.breakpoints.down(800)]: {
			padding: '0 24px',
		},
		[theme.breakpoints.down(450)]: {
			padding: '0 16px',
			height: 40,
		},
	},
	link: {
		margin: '0 10px',
		textDecoration: 'none',
		[theme.breakpoints.down(450)]: {
			margin: '0 14px',
		},
	},
	text: {
		margin: '0 10px',
		[theme.breakpoints.down(450)]: {
			fontSize: 13,
			margin: 0,
		},
	},
}));
