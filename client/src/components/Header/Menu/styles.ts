import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		position: 'absolute',
		zIndex: 100,
		top: 70,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: theme.palette.common.white,
		transition: 'top 600ms ease-in-out',
		[theme.breakpoints.down(600)]: {
			display: 'none',
		},
	},
	hidden: {
		position: 'absolute',
		zIndex: 100,
		top: '-100%',
		// bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: theme.palette.common.white,
		transition: 'top 1.5s cubic-bezier(0.68, -0.35, 0.265, 1.55)',
	},
	wrapper: {
		maxWidth: 1400,
		margin: '0 auto',
		padding: '60px 40px',
		justifyContent: 'start',
		alignItems: 'center',
		height: '100%',
		position: 'relative',
		flexWrap: 'nowrap',
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.common.black,
		marginBottom: 16,
		padding: '20px 0',
		width: '100%',
		textAlign: 'center',
		borderRadius: '12px',
		transition: 'ease-in-out 200ms',
		letterSpacing: 1,
		// textTransform: 'uppercase',
		'&:hover': {
			backgroundColor: theme.palette.grey[200],
		},
	},
	logoutLink: {
		textDecoration: 'none',
		color: theme.palette.common.black,
		marginBottom: 16,
		padding: '20px 0',
		width: '100%',
		textAlign: 'center',
		borderRadius: '12px',
		transition: 'ease-in-out 200ms',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.grey[200],
		fontSize: 34,
		[theme.breakpoints.down('sm')]: {
			fontSize: 30,
		},
		// height: 'fit-content',
		'&:hover': {
			backgroundColor: theme.palette.grey[300],
		},
	},
	logoutIcon: {
		height: 40,
		width: 40,
		marginLeft: 16,
	},
	closeButton: {
		position: 'absolute',
		top: 0,
		right: 40,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		backgroundColor: theme.palette.grey[300],
		'&:hover': {
			backgroundColor: theme.palette.grey[400],
		},
	},
	closeIcon: {
		color: theme.palette.common.black,
		// transition: 'margin-bottom 200ms',
		// '&:hover': {
		// 	marginBottom: 20,
		// },
	},
}));
