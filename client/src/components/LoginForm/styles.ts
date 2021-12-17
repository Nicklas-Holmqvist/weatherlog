import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		maxWidth: 400,
		margin: '0 auto',
	},
	title: {
		textTransform: 'uppercase',
		textAlign: 'center',
		marginBottom: 40,
		[theme.breakpoints.down('lg')]: {
			marginBottom: 20,
		},
	},
	input: {
		[`& fieldset`]: {
			borderRadius: 16,
			borderColor: theme.palette.common.black,
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.common.black,
				borderWidth: 1,
			},
		},
	},
	icon: {
		color: theme.palette.grey[700],
	},
	button: {
		borderRadius: 16,
		paddingTop: 10,
		paddingBottom: 10,
		marginTop: 30,
		fontWeight: 400,
		fontSize: 18,
	},
	forgotPassword: {
		color: theme.palette.grey[500],
		textDecoration: 'underline',
		alignSelf: 'end',
		fontSize: 14,
	},
	createAccount: {
		marginTop: 30,
		textDecoration: 'underline',
		textAlign: 'center',
	},
}));
