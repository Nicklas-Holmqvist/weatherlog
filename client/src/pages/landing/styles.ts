import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		margin: '0 auto',
		maxWidth: 1400,
		padding: '0 40px',
		marginTop: 40,
	},
	pageHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	disableUnderline: {
		textDecoration: 'none',
	},
	mr: {
		marginRight: 10,
	},
	tableHeader: {
		margin: '20px 100px 5px 60px',
		width: '100%',
		color: theme.palette.grey[500],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
}));
