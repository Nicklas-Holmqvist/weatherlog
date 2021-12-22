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
	},
	link: {
		margin: '0 30px',
		textDecoration: 'none',
	},
}));