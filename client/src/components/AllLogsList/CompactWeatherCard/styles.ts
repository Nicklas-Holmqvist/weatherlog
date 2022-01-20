import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		width: '100%',
		height: 52,
		minHeight: 52,
		backgroundColor: '#f2f2f2',
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
		marginBottom: 8,
		marginRight: 4,
		cursor: 'pointer',
	},
	firstCardContainer: {
		marginTop: 6,
		width: '100%',
		height: 52,
		minHeight: 52,
		backgroundColor: '#f2f2f2',
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
		marginBottom: 8,
		marginRight: 4,
		cursor: 'pointer',
	},
	tempBox: {
		height: '100%',
		width: 12,
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6,
		position: 'absolute',
		left: 0,
		[theme.breakpoints.down('sm')]: {
			width: 16,
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
		},
		[theme.breakpoints.down(450)]: {
			width: 10,
			borderTopLeftRadius: 6,
			borderBottomLeftRadius: 6,
		},
	},
	info: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 30,
		height: '100%',
	},
	date: {
		fontSize: 20,
	},
	month: {
		marginTop: '-3px',
		[theme.breakpoints.down(450)]: {
			fontSize: 13,
		},
	},
	temp: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		left: 320,
		fontSize: 24,
	},
	iconContainer: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		left: 250,
	},
	icon: {
		width: 50,
		[theme.breakpoints.only('sm')]: {
			width: 44,
		},
		[theme.breakpoints.only('xs')]: {
			width: 32,
		},
		[theme.breakpoints.down(450)]: {
			width: 26,
		},
	},
	listIcon: {
		[theme.breakpoints.down(1281)]: {
			width: 22,
		},
	},
	weatherIcon: {
		width: '70%',
		margin: '30px auto 70px auto',
		[theme.breakpoints.down(1281)]: {
			width: 50,
			margin: 0,
		},
	},
	arrowButton: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		right: 5,
		padding: 8,
	},
	arrowIcon: {
		color: theme.palette.common.black,
	},
}));
