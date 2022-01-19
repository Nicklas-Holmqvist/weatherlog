import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		margin: '0 auto',
		maxWidth: 1400,
		padding: '0 40px',
		[theme.breakpoints.down('sm')]: {
			padding: '0 20px',
		},
		[theme.breakpoints.down(450)]: {
			padding: '0 14px',
		},
		marginTop: 40,
	},
	pageHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	pageTitle: {
		[theme.breakpoints.down('xs')]: {
			fontSize: 34,
		},
	},
	disableUnderline: {
		textDecoration: 'none',
	},
	mr: {
		marginRight: 14,
		whiteSpace: 'nowrap',
	},
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	showAllButton: {
		textTransform: 'uppercase',
		marginRight: 28,
		alignItems: 'center',
	},
	showAllButtonText: {
		fontSize: '0.875rem',
	},
	listIcon: {
		marginLeft: 8,
		marginBottom: 3,
	},
	tableHeader: {
		margin: '20px 0 5px 0',
		width: '100%',
		color: theme.palette.grey[500],
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
		justifyItems: 'center',
	},
	tableTitleText: {
		[theme.breakpoints.down(450)]: {
			fontSize: 15,
		},
		[theme.breakpoints.down(380)]: {
			fontSize: 13,
		},
	},
	iconButton: {
		color: theme.palette.common.black,
		padding: 9,
	},
}));
