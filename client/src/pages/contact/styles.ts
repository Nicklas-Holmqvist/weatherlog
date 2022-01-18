import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		maxWidth: 1400,
		margin: '0 auto',
		padding: '0 40px',
		[theme.breakpoints.down(700)]: {
			padding: '0 20px',
		},
		[theme.breakpoints.down(500)]: {
			padding: '0 16px',
		},
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			fontSize: 34,
		},
	},
	titleContainer: {
		alignItems: 'center',
		marginTop: 40,
		[theme.breakpoints.down(1281)]: {
			marginTop: 30,
		},
		[theme.breakpoints.down(450)]: {
			marginTop: 40,
		},
	},
	textBodyContainer: {
		margin: '30px 0',
		[theme.breakpoints.down(450)]: {
			margin: '16px 0',
		},
	},
	subtitle: {
		fontWeight: 600,
		marginBottom: 6,
		[theme.breakpoints.down(450)]: {
			marginTop: 12,
		},
	},
	listItem: {
		paddingLeft: 0,
		paddingBottom: 4,
	},
	listItemIcon: {
		minWidth: 42,
	},
	icon: {
		color: theme.palette.common.black,
	},
	link: {
		textDecoration: 'none',
		transition: '150ms ease-in-out',
		'&:hover': {
			transform: 'scale(1.01)',
		},
	},
}));
