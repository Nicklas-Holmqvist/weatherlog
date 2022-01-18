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
		display: 'grid',
		gridTemplateColumns: '6fr 1fr',
		marginTop: 24,
		[theme.breakpoints.down(800)]: {
			display: 'block',
			gridTemplateColumns: 'unset',
		},
		[theme.breakpoints.down(450)]: {
			marginTop: 16,
		},
		'& > p': {
			alignSelf: 'center',
		},
	},
	logo: {
		placeSelf: 'center',
		// marginRight: 10,
		width: 100,
		height: 100,
		[theme.breakpoints.down(800)]: {
			display: 'none',
		},
	},
	subtitle: {
		fontWeight: 600,
		marginBottom: 6,
		marginTop: 30,
		// [theme.breakpoints.down(450)]: {
		// 	marginTop: 12,
		// },
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
