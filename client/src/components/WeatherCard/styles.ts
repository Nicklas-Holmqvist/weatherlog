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
		marginBottom: 12,
		[theme.breakpoints.down('sm')]: {
			height: 80,
			borderRadius: 8,
		},
		[theme.breakpoints.down(450)]: {
			height: 60,
			borderRadius: 6,
		},
	},
	tempBox: {
		height: '100%',
		width: 24,
		borderTopLeftRadius: 12,
		borderBottomLeftRadius: 12,
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
	date: {
		textAlign: 'center',
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	day: {
		marginBottom: '-3px',
	},
	month: {
		marginTop: '-3px',
		[theme.breakpoints.down(450)]: {
			fontSize: 13,
		},
	},
	temp: {
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
	},
	iconContainer: {
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
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
	wind: {
		display: 'flex',
		alignItems: 'flex-end',
		width: '20%',
		justifyContent: 'center',
		textAlign: 'center',
	},
	precipitation: {
		display: 'flex',
		alignItems: 'flex-end',
		width: '20%',
		justifyContent: 'center',
		textAlign: 'center',
	},
	unit: {
		color: theme.palette.grey[500],
		marginLeft: 8,
		[theme.breakpoints.down('sm')]: {
			fontSize: 22,
		},
		[theme.breakpoints.down(450)]: {
			marginLeft: 3,
			fontSize: 16,
			marginBottom: 3,
		},
	},
}));
