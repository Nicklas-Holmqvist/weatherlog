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
		flexWrap: 'nowrap',
		[theme.breakpoints.down(520)]: {
			height: 44,
			minHeight: 44,
		},
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
		flexWrap: 'nowrap',
		[theme.breakpoints.down(520)]: {
			height: 44,
			minHeight: 44,
		},
	},
	tempBox: {
		height: '100%',
		width: 12,
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6,
		position: 'absolute',
		left: 0,
	},
	info: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 30,
		height: '100%',
		[theme.breakpoints.down(580)]: {
			marginLeft: 26,
		},
	},
	date: {
		fontSize: 20,
		[theme.breakpoints.down(520)]: {
			fontSize: 18,
		},
		[theme.breakpoints.down(410)]: {
			fontSize: 17,
		},
	},
	temp: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		left: 330,
		fontSize: 24,
		fontWeight: 400,
		[theme.breakpoints.down(500)]: {
			fontSize: 20,
			fontWeight: 500,
			left: 290,
		},
		[theme.breakpoints.down(410)]: {
			fontSize: 19,
			left: 255,
		},
	},
	iconContainer: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		left: 250,
		[theme.breakpoints.down(500)]: {
			left: 220,
		},
		[theme.breakpoints.down(410)]: {
			left: 200,
		},
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
	iconArrowButton: {
		padding: 5,
		marginRight: 3,
	},
}));
