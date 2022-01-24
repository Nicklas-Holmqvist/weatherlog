import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noLog: {
		width: '25rem',
		display: 'flex',
		justifyContent: 'center',
	},
	header: {
		paddingTop: '5rem',
		paddingBottom: '2.5rem',
	},
	btn: {
		width: '8rem',
		marginBottom: 10,
	},
}));
