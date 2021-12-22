import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		height: 100,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
		paddingLeft: 60,
		paddingRight: 80,
	},
	tempBox: {
		height: '100%',
		width: 24,
		borderTopLeftRadius: 12,
		borderBottomLeftRadius: 12,
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
	icon: {
		width: 50,
	},
}));
