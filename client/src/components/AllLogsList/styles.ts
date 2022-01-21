import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 20,
		display: 'grid',
		gridTemplateColumns: '3fr 2fr',
		columnGap: 14,
		minHeight: '68vh',
		maxHeight: '68vh',
		[theme.breakpoints.down(1281)]: {
			minHeight: '58vh',
			maxHeight: '58vh',
		},
		[theme.breakpoints.down(1200)]: {
			display: 'flex',
			gridTemplateColumns: 'unset',
		},
		[theme.breakpoints.down(500)]: {
			minHeight: '67vh',
			maxHeight: '67vh',
		},
	},
	logs: {
		height: '100%',
		width: '100%',
		overflowY: 'scroll',
		overflowX: 'hidden',
		flexWrap: 'nowrap',
		'&::-webkit-scrollbar': {
			width: 20,
		},
		'&::-webkit-scrollbar-track': {
			borderRadius: 12,
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: theme.palette.grey[200],
			borderRadius: 12,
			border: '6px solid ' + theme.palette.common.white,
			backgroundClip: 'padding-box',
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: theme.palette.grey[300],
		},
		[theme.breakpoints.down(1200)]: {
			width: 'calc(100% + 20px)',
		},
		[theme.breakpoints.down(450)]: {
			width: 'calc(100% + 14px)',
		},
	},
	stats: {
		height: 'calc(100% - 6px)',
		width: '100%',
		backgroundColor: '#f2f2f2',
		borderRadius: 16,
		padding: '30px 20px',
		marginTop: 6,
		marginBottom: 6,
		[theme.breakpoints.down(1200)]: {
			display: 'none',
		},
	},
	marginBottom: {
		marginBottom: 12,
	},
	disableUnderline: {
		textDecoration: 'none',
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
	paginationAndButtonContainer: {
		width: '100%',
		margin: '20px 0',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	statsButton: {
		display: 'none',
		[theme.breakpoints.down(1200)]: {
			padding: '6px 22px',
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			display: 'inline-flex',
			whiteSpace: 'nowrap',
		},
		[theme.breakpoints.down(600)]: {
			padding: '6px 36px',
		},
	},
}));
