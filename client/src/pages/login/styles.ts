import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		alignItems: 'center',
		height: '100vh',
		flexWrap: 'nowrap',
	},
	image: {
		margin: '0 auto',
		padding: '60px 0',
		width: '20%',
		// minWidth: 200,
		[theme.breakpoints.down('lg')]: {
			padding: '20px 0 40px 0',
		},
	},
}));
