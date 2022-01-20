import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 30,
		display: 'grid',
		gridTemplateColumns: '3fr 2fr',
		columnGap: 20,
		minHeight: 630,
		// maxHeight: 630,
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
	},
	stats: {
		// height: 'calc(100% - 6px)',
		height: 630,
		width: '100%',
		backgroundColor: '#f2f2f2',
		borderRadius: 16,
		padding: '30px 20px',
		marginTop: 6,
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
}));
