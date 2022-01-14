import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	button: {
		color: theme.palette.common.black,
		padding: 8,
		marginRight: 6,
		[theme.breakpoints.down(450)]: {
			padding: 6,
			marginRight: 4,
		},
	},
	icon: {
		width: 30,
		height: 30,
		marginBottom: 3,
	},
}));
