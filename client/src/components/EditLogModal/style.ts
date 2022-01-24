import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		background: theme.palette.common.white,
		padding: 30,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: 22,
		maxWidth: 1000,
		minWidth: 320,
		[theme.breakpoints.down(500)]: {
			flexWrap: 'nowrap',
			overflow: 'scroll',
			borderBottomRightRadius: 0,
			borderBottomLeftRadius: 0,
			top: 50,
			bottom: 0,
			left: 0,
			right: 0,
			transform: 'unset',
			padding: '30px 16px 4px 16px',
		},
	},
	title: {
		[theme.breakpoints.down(650)]: {
			fontSize: 34,
		},
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	closeModalIcon: {
		cursor: 'pointer',
	},
	tripleColumns: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr',
		columnGap: 20,
		[theme.breakpoints.down(650)]: {
			gridTemplateColumns: '1fr 1fr',
			gridTemplateRows: '1fr 1fr',
			columnGap: 10,
		},
	},
	dateContainer: {
		[theme.breakpoints.down(650)]: {
			gridTemplateColumns: '1fr 1fr 1fr',
			gridTemplateRows: '1fr',
			columnGap: 10,
		},
	},
	windContainer: {
		[theme.breakpoints.down(650)]: {
			gridTemplateColumns: '1fr 1fr 1fr',
			gridTemplateRows: '1fr',
			columnGap: 10,
		},
		[theme.breakpoints.down(520)]: {
			gridTemplateColumns: '1fr',
			gridTemplateRows: 'auto',
			columnGap: 'unset',
		},
	},
	doubleColumns: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr',
		columnGap: 20,
		[theme.breakpoints.down(650)]: {
			columnGap: 10,
		},
	},
	input: {
		[`& fieldset`]: {
			borderRadius: 8,
			borderColor: theme.palette.grey[400],
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.temp.minus5to9,
				borderWidth: 2,
			},
		},
		'& > label': {
			color: theme.palette.grey[700],
			[theme.breakpoints.down(500)]: {
				fontSize: 16,
			},
		},
	},
	dropdown: {
		marginTop: 7,
		'& > div': {
			paddingTop: 11,
			paddingBottom: 11,
			display: 'inline-flex',
		},
	},
	inputLabel: {
		'&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
			transform: 'translate(14px, 1px) scale(0.75)',
			color: theme.palette.grey[700],
			[theme.breakpoints.down(500)]: {
				fontSize: 16,
				transform: 'translate(14px, 1px) scale(0.82)',
			},
		},
	},
	iconContainer: {
		minWidth: 'unset',
		paddingRight: 18,
		[theme.breakpoints.down(500)]: {
			paddingRight: 12,
		},
	},
	icon: {
		width: 24,
	},
	button: {
		padding: '8px 20px',
		marginTop: 30,
		width: 'fit-content',
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.grey[800],
		},
		[theme.breakpoints.down(500)]: {
			marginTop: 20,
			marginBottom: 12,
			width: 'unset',
		},
	},
	subtitle: {
		marginTop: 20,
		fontSize: 20,
		[theme.breakpoints.down(500)]: {
			fontSize: 'initial',
		},
	},
	weather: {
		[theme.breakpoints.down(650)]: {
			gridArea: '1 / 1 / 2 / 3',
		},
	},
	temp: {
		[theme.breakpoints.down(650)]: {
			gridArea: '2 / 1 / 3 / 2',
		},
	},
	precipitation: {
		[theme.breakpoints.down(650)]: {
			gridArea: '2 / 2 / 3 / 3',
		},
	},
	errorText: {
		fontSize: 12,
		marginTop: 4,
		marginLeft: 14,
	},
}));
