import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: '#fff',
		padding: '12px 16px',
		borderRadius: 16,
		width: '100%',
		height: '100%',
		minHeight: 200,
		justifyContent: 'space-between',
	},
	label: {
		color: theme.palette.grey[400],
		letterSpacing: 0.5,
	},
	number: {
		fontWeight: 200,
		marginRight: 8,
	},
	unit: {
		fontWeight: 300,
		fontSize: 26,
		marginBottom: 1,
	},
	data: {
		display: 'flex',
		alignItems: 'flex-end',
	},
	windBackground: {
		width: '100%',
		height: 70,
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
	},
}));
