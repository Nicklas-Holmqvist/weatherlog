import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	buttonGroup: {
		border: 'none',
	},
	paginationButton: {
		padding: 0,
		border: 'none',
		borderRadius: 100,
		'&.MuiButtonGroup-groupedHorizontal:not(:last-child)': {
			borderTopRightRadius: 100,
			borderBottomRightRadius: 100,
		},
		'&.MuiButtonGroup-groupedHorizontal:not(:first-child)': {
			borderTopLeftRadius: 100,
			borderBottomLeftRadius: 100,
		},
		'&.MuiButtonGroup-grouped': {
			minWidth: 28,
			minHeight: 28,
		},
		marginRight: 4,
	},
	activePage: {
		padding: 0,
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		border: 'none',
		'&:hover': {
			backgroundColor: theme.palette.grey[900],
		},
		borderRadius: 100,
		'&.MuiButtonGroup-groupedHorizontal:not(:last-child)': {
			borderTopRightRadius: 100,
			borderBottomRightRadius: 100,
		},
		'&.MuiButtonGroup-groupedHorizontal:not(:first-child)': {
			borderTopLeftRadius: 100,
			borderBottomLeftRadius: 100,
		},
		'&.MuiButtonGroup-grouped': {
			minWidth: 28,
			minHeight: 28,
		},
		marginRight: 4,
	},
	arrowButton: {
		minWidth: 28,
		minHeight: 28,
		padding: 0,
		borderTopLeftRadius: 100,
		borderBottomLeftRadius: 100,
		borderTopRightRadius: 100,
		borderBottomRightRadius: 100,
		'&.MuiButtonGroup-groupedHorizontal:not(:last-child)': {
			borderTopRightRadius: 100,
			borderBottomRightRadius: 100,
		},
		'&.MuiButtonGroup-groupedHorizontal:not(:first-child)': {
			borderTopLeftRadius: 100,
			borderBottomLeftRadius: 100,
		},
		color: theme.palette.common.black,
	},
	threeDotsButton: {
		'&:hover': {
			backgroundColor: 'inherit',
			cursor: 'unset',
		},
		pointerEvents: 'none',
	},
}));
