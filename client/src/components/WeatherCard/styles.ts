import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		height: 100,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		position: 'relative',
		paddingLeft: 60,
		paddingRight: 80,
	},
	tempBox: {
		height: '100%',
		width: 30,
		borderTopLeftRadius: 16,
		borderBottomLeftRadius: 16,
		backgroundColor: theme.palette.temp.plus10to14,
		position: 'absolute',
		left: 0,
	},
	date: {
		textAlign: 'center',
	},
	unitContainer: {
		display: 'flex',
		alignItems: 'flex-end',
	},
	unit: {
		color: theme.palette.grey[500],
		marginLeft: 8,
	},
}));
