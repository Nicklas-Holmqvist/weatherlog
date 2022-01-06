import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
