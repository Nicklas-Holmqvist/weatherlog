import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		maxWidth: 420,
		margin: '0 auto',
		padding: '0 20px 10px 20px',
	},
	title: {
		textTransform: 'uppercase',
		textAlign: 'center',
		marginBottom: 40,
		[theme.breakpoints.down('lg')]: {
			marginBottom: 20,
		},
		[theme.breakpoints.only('xs')]: {
			marginBottom: 40,
		},
	},
	input: {
		[`& fieldset`]: {
			borderRadius: 12,
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
		borderRadius: 14,
		paddingTop: 8,
		paddingBottom: 8,
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
	link: {
		textAlign: 'center',
		color: theme.palette.common.black,
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 24,
	},
	arrow: {
		margin: '0 6px',
	},
	clickableLink: {
		textDecoration: 'underline',
	},
}));
