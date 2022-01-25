import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 16,
	},
	container: {
		backgroundColor: theme.palette.grey[300],
		padding: '12px',
		borderRadius: 12,
		width: '100%',
		height: '100%',
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down(450)]: {
			maxHeight: 95,
		},
	},
	label: {
		color: theme.palette.common.black,
		margin: '0 auto',
		[theme.breakpoints.down(450)]: {
			fontSize: 16,
		},
	},
	value: {
		fontWeight: 500,
		marginRight: 8,
		fontSize: 32,
		[theme.breakpoints.down(450)]: {
			marginRight: 0,
			fontSize: 28,
		},
	},
	windFeelValue: {
		fontSize: 22,
	},
	unit: {
		fontWeight: 300,
		fontSize: 24,
		marginBottom: 1,
		[theme.breakpoints.down(450)]: {
			fontSize: 20,
			marginBottom: 0,
		},
	},
	data: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		[theme.breakpoints.down(450)]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	arrowIcon: {
		width: 30,
		display: 'flex',
		alignContent: 'center',
		[theme.breakpoints.down(1281)]: {
			width: 24,
		},
		// [theme.breakpoints.only('xs')]: {
		// 	width: 22,
		// },
		// [theme.breakpoints.down(450)]: {
		// 	width: 16,
		// },
	},
}));
