import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	stats: {
		height: 'calc(100% - 6px)',
		width: '100%',
		backgroundColor: '#f2f2f2',
		borderRadius: 12,
		padding: '26px 20px',
		marginTop: 6,
		marginBottom: 6,
		[theme.breakpoints.down(1200)]: {
			display: 'none',
		},
	},
	marginBottom: {
		marginBottom: 12,
	},
	statsTitle: {
		marginBottom: 16,
		fontWeight: 600,
	},
	statString: {
		alignItems: 'center',
	},
	data: {
		marginLeft: 6,
	},
}));
