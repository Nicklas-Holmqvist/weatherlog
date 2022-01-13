import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		// width: '100%',
		height: 70,
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		zIndex: 150,
		backgroundColor: theme.palette.grey[100],
		boxShadow: '0px 4px 8px rgba(180, 180, 180, 0.27)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapper: {
		maxWidth: 1400,
		padding: '0 40px',
		[theme.breakpoints.down('sm')]: {
			padding: '0 20px',
		},
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	left: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	right: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	name: {
		marginLeft: 16,
	},
	mobileHeader: {
		// width: '100%',
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		zIndex: 150,
		height: 50,
		backgroundColor: theme.palette.grey[100],
		boxShadow: '0px 4px 8px rgba(180, 180, 180, 0.27)',
		padding: '0 14px',
	},
	mobileLeft: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'start',
		flexGrow: 1,
	},
	mobileLogo: {
		width: 32,
		justifySelf: 'center',
	},
	mobileLogoutButton: {
		justifySelf: 'end',
	},
	settingsButton: {
		// background: theme.palette.common.white,
		// marginLeft: 8,
		// marginLeft: 16,
		color: theme.palette.common.black,
		padding: 9,
	},
	logoutButton: {
		marginLeft: 40,
	},
	menuButton: {
		// marginLeft: 16,
		color: theme.palette.common.black,
		padding: 9,
	},
	link: {
		textDecoration: 'none',
		marginLeft: 24,
	},
}));
