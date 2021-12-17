import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		height: 70,
		backgroundColor: theme.palette.grey[100],
		// position: 'fixed',
		// top: 0,
		boxShadow: '0px 4px 8px rgba(180, 180, 180, 0.27)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapper: {
		maxWidth: 1400,
		padding: '0 40px',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	left: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	name: {
		marginLeft: 16,
	},
	link: {
		margin: '0 30px',
		textDecoration: 'none',
	},
}));