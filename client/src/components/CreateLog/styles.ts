import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 40,
	},
	title: {
		[theme.breakpoints.down(650)]: {
			fontSize: 34,
		},
	},
	titleContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	tripleColumns: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr',
		columnGap: 30,
		[theme.breakpoints.down(900)]: {
			columnGap: 22,
		},
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
		columnGap: 30,
		[theme.breakpoints.down(900)]: {
			columnGap: 22,
		},
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
			color: theme.palette.grey[500],
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
			color: theme.palette.grey[500],
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
	buttonReset: {
		padding: '8px 20px',
		marginTop: 30,
		marginLeft: '1rem',
		width: 'fit-content',
		color: theme.palette.common.black,
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: 'white',
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
