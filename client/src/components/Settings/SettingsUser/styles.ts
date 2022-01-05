import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 24,
		backgroundColor: theme.palette.grey[100],
		padding: '36px 40px 26px 40px',
		borderRadius: 20,
	},
	title: {
		marginBottom: 18,
		fontWeight: 600,
	},
	textFieldContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		columnGap: 20,
	},
	textField: {
		[`& fieldset`]: {
			borderRadius: 10,
			borderColor: theme.palette.grey[500],
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#65aeeb',
				borderWidth: 2,
			},
		},
		'&.MuiFormControl-marginDense': {
			marginTop: 0,
		},
	},
	marginTop: {
		marginTop: 5,
	},
	divider: {
		margin: '30px 0',
		width: '100%',
	},
	button: {
		borderRadius: 6,
		// marginTop: 20,
		alignSelf: 'start',
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		paddingLeft: 24,
		paddingRight: 24,
		'&:hover': {
			backgroundColor: theme.palette.grey[800],
		},
	},
	removeAccountButton: {
		borderRadius: 6,
		alignSelf: 'start',
		backgroundColor: theme.palette.grey[300],
		color: theme.palette.error.main,
		paddingLeft: 24,
		paddingRight: 24,
		margin: 'auto 0',
		'&:hover': {
			backgroundColor: theme.palette.error.main,
			color: theme.palette.common.white,
		},
	},
	removeAccountContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));
