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
}));
