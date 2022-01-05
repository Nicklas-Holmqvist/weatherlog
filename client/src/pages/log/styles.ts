import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		maxWidth: 1400,
		margin: '0 auto',
		padding: '0px 40px 80px 40px',
		[theme.breakpoints.down('sm')]: {
			padding: '0px 0px 80px 0px',
		},
	},
	title: {
		marginTop: 40,
		[theme.breakpoints.down(1281)]: {
			marginTop: 30,
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 20,
			fontSize: 34,
		},
		[theme.breakpoints.down(450)]: {
			paddingLeft: 20,
			fontSize: 28,
			marginTop: 25,
		},
	},
}));