import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		height:'calc(100vh - 70px)',
		display:'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'nowrap',
		overflowY: 'hidden',
		[theme.breakpoints.down(600)]: {
			height:'calc(100vh - 50px)',
		},
	},
	content: {
		display:'flex',
		flexDirection:'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: '3rem',
		overflowY: 'hidden',
	},
	underTitle: {
		fontSize: '1.2rem'
	},
}));
