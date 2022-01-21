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
		[theme.breakpoints.down(500)]: {
			marginTop: 30,
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
			top: '182px',
		},
		[theme.breakpoints.down(600)]: {
			top: '160px',
		},
	},
	addIcon: {
		color: theme.palette.common.black,
		padding: 9,
		marginBottom: 5,
	},
	divider: {
		width: '100%',
		margin: '5px 0 60px 0',
	},
	diagram: {
		width: '100%',
		paddingTop: '0.5rem',
		paddingBottom: '1.5rem'
	},
	disableUnderline: {
		textDecoration: 'none',
	},
	mr: {
		marginRight: 10,
	},
	showListButton: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '0.5rem 0',
		textTransform: 'uppercase',
		marginRight: 16,
		[theme.breakpoints.down(520)]: {
			marginRight: 12,
		},
	},
	switch: {
		'& .MuiSwitch-switchBase': {
			'&.Mui-checked': {
				color: '#7ba6e8',
				'& + .MuiSwitch-track': {
					backgroundColor: '#7ba6e8',
				},
			},
		},
	},
	showListButtonText: {
		fontSize: '0.875rem',
		marginTop: 2,
	},
	listIcon: {
		marginLeft: 8,
		marginBottom: 1,
		[theme.breakpoints.down(520)]: {
			marginLeft: 0,
		},
	},
}));
