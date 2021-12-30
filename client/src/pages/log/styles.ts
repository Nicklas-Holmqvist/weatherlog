import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		maxWidth: 1400,
		margin: '0 auto',
		padding: '0px 40px 80px 40px',
	},
	title: {
		marginTop: 40,
		[theme.breakpoints.down(1281)]: {
			marginTop: 30,
		},
	},
}));
