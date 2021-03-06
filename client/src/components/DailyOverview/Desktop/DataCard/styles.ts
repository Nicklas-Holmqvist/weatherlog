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
		alignSelf: 'stretch',
		[theme.breakpoints.down(1281)]: {
			maxHeight: 'unset',
			minHeight: 'unset',
			borderRadius: 10,
			padding: '4px 8px 8px 8px',
		},
	},
	label: {
		color: theme.palette.grey[600],
		letterSpacing: 0.5,
		[theme.breakpoints.down(1281)]: {
			fontSize: 16,
		},
	},
	number: {
		fontWeight: 200,
		marginRight: 8,
		[theme.breakpoints.down(1281)]: {
			fontSize: 30,
			marginRight: 5,
		},
	},
	unit: {
		fontWeight: 300,
		fontSize: 26,
		marginBottom: 1,
		[theme.breakpoints.down(1281)]: {
			fontSize: 21,
		},
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
		[theme.breakpoints.down(1281)]: {
			backgroundColor: '#fff',
			height: 60,
		},
	},
	bottomInfo: {
		[theme.breakpoints.down(1281)]: {
			fontSize: 14,
		},
	},
	arrowIcon: {
		width: 30,
		display: 'flex',
		alignContent: 'center',
		[theme.breakpoints.down(1281)]: {
			width: 24,
		},
		[theme.breakpoints.only('xs')]: {
			width: 22,
		},
		[theme.breakpoints.down(450)]: {
			width: 16,
		},
	},
}));
