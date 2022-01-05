import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: 24,
		backgroundColor: theme.palette.grey[100],
		padding: '36px 30px 26px 30px',
		borderRadius: 20,
	},
	title: {
		marginBottom: 18,
		fontWeight: 600,
	},
	textFieldContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr',
		columnGap: 30,
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
	button: {
		borderRadius: 6,
		marginTop: 20,
		alignSelf: 'start',
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		paddingLeft: 24,
		paddingRight: 24,
	},
}));
