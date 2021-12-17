import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		alignItems: 'center',
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
		[theme.breakpoints.only('xs')]: {
			width: '250px',
			padding: '40px 0 80px 0',
		},
	},
}));