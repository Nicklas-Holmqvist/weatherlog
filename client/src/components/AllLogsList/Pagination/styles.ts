import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	buttonGroup: {
		marginTop: 16,
	},
	paginationButton: {
		padding: 4,
		maxHeight: 36,
	},
	activePage: {
		padding: 4,
		maxHeight: 36,
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.grey[900],
		},
	},
}));
