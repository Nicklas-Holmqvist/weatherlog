import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	stats: {
		height: 'calc(100% - 6px)',
		width: '100%',
		backgroundColor: '#f2f2f2',
		borderRadius: 12,
		padding: '26px 20px',
		marginTop: 6,
		marginBottom: 6,
		[theme.breakpoints.down(1200)]: {
			display: 'none',
		},
	},
	smallScreenStatsActive: {
		[theme.breakpoints.down(1200)]: {
			backgroundColor: '#f2f2f2',
			transition: 'right 600ms ease-in-out',
			width: 'fit-content',
			position: 'absolute',
			top: -40,
			bottom: 0,
			borderRadius: 0,
			right: '0px',
			zIndex: 100,
			boxShadow: '-10px 0px 15px 0px rgba(0,0,0,0.2)',
			padding: '26px 30px 26px 20px',
		},
		[theme.breakpoints.down(600)]: {
			top: -40,
			// borderTopLeftRadius: 16,
		},
	},
	smallScreenStatsInactive: {
		pointerEvents: 'none',
		[theme.breakpoints.down(1200)]: {
			backgroundColor: '#f2f2f2',
			transition: 'right 600ms ease-in-out',
			width: 'fit-content',
			position: 'absolute',
			top: -40,
			bottom: 0,
			borderRadius: 0,
			right: '-100%',
			zIndex: 100,
			boxShadow: '-10px 0px 15px 0px rgba(0,0,0,0.2)',
			padding: '26px 30px 26px 20px',
		},
		[theme.breakpoints.down(600)]: {
			top: -40,
			// borderTopLeftRadius: 16,
		},
	},
	marginBottom: {
		marginBottom: 12,
	},
	statsTitle: {
		marginBottom: 16,
		fontWeight: 600,
	},
	statString: {
		alignItems: 'center',
	},
	data: {
		marginLeft: 6,
	},
	closeDrawerButton: {
		position: 'absolute',
		bottom: 30,
		right: 30,
	},
}));
