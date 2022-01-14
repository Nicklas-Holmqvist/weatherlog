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
		alignItems: 'center',
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
	dateText: {
		[theme.breakpoints.down(800)]: {
			fontSize: 24,
		},
	},
	pageTitle: {
		[theme.breakpoints.down('xs')]: {
			fontSize: 34,
			lineHeight: 'unset',
		},
	},
	dateContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 'fit-content',
		position: 'absolute',
		left: '50%',
		top: 110,
		transform: 'translateX(-50%)',
		alignItems: 'center',
		[theme.breakpoints.down(800)]: {
			top: '82px',
		},
		[theme.breakpoints.down(600)]: {
			top: '64px',
		},
	},
	addIcon: {
		color: theme.palette.common.black,
		padding: 9,
		marginBottom: 5,
	},
	divider: {
		width: '100%',
		margin: '30px 0 10px 0',
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
