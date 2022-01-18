import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: '0 40px',
		maxWidth: 1400,
		margin: '0 auto',
		[theme.breakpoints.down(880)]: {
			padding: '0 20px',
		},
	},
	titleContainer: {
		marginTop: 30,
		[theme.breakpoints.down(880)]: {
			marginBottom: 12,
		},
		display: 'flex',
		alignItems: 'center',
	},
	title: {
		fontSize: 34,
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 4fr',
		gridTemplateRows: '1fr',
		[theme.breakpoints.down(880)]: {
			gridTemplateColumns: '1fr',
			gridTemplateRows: 'auto 1fr',
		},
	},
	listContainer: {
		paddingRight: 30,
		[theme.breakpoints.down(880)]: {
			paddingRight: 20,
		},
	},
	list: {
		marginTop: 16,
		width: '100%',
		minWidth: 140,
	},
	listItem: {
		borderRadius: '40px',
		cursor: 'pointer',
		transition: '200ms ease-in-out',
		marginBottom: 6,
		backgroundColor: theme.palette.common.white,
		'&.MuiListItem-dense': {
			padding: '0 20px',
		},
	},
	listItemText: {
		color: theme.palette.grey[500],
	},
	active: {
		backgroundColor: theme.palette.grey[200],
		transition: '200ms ease-in-out',
	},
	activeListItemText: {
		color: theme.palette.common.black,
	},
}));
