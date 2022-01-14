import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	diagramContainer: {
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
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	titleContainer: {
		width: 'fit-content',
	},
	arrowIcon: {
		color: theme.palette.common.black,
	},
	disabledArrowIcon: {
		color: 'inherit',
	},
	date: {
		margin: '0 10px',
		justifyContent: 'center',
	},
	pageTitle: {
		[theme.breakpoints.down('xs')]: {
			fontSize: 34,
		},
	},
	dateContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 'fit-content',
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
	},
	diagram: {
		width: '100%',
		paddingTop: '0.5rem',
	},
	disableUnderline: {
		textDecoration: 'none',
	},
	mr: {
		marginRight: 10,
	},
}));
