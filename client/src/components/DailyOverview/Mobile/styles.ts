import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.grey[300],
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '6px 16px 6px 0',
		marginTop: 20,
	},
	dateContainer: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
	},
	date: {
		whiteSpace: 'nowrap',
		[theme.breakpoints.down(450)]: {
			fontSize: 22,
		},
	},
	arrow: {
		color: theme.palette.common.black,
		margin: '0 10px',
		[theme.breakpoints.down(450)]: {
			margin: '0 6px',
		},
	},
	iconButtons: {
		display: 'flex',
	},
	iconButton: {
		justifySelf: 'end',
		backgroundColor: theme.palette.common.white,
		marginLeft: 10,
		color: theme.palette.common.black,
		padding: 7,
	},
	weatherAndTempContainer: {
		padding: '10px 20px',
		justifyContent: 'space-between',
		width: '100%',
		flexWrap: 'nowrap',
		maxWidth: 430,
		margin: '0 auto',
	},
	weatherIcon: {
		width: '100px',
	},
	tempContainer: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
		justifyContent: 'center',
	},
	temp: {
		fontWeight: 300,
		marginRight: 8,
	},
	tempColor: {
		width: 12,
		height: 12,
		borderRadius: 20,
		marginLeft: 4,
	},
	weatherName: {
		alignSelf: 'start',
	},
	notesContainer: {
		padding: '10px 20px 0 20px',
	},
	notesTitle: {
		textDecoration: 'underline',
		marginBottom: 3,
		[theme.breakpoints.down(450)]: {
			fontSize: 17,
		},
	},
	notesBody: {
		[theme.breakpoints.down(450)]: {
			fontSize: 15,
		},
	},
	cardContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		columnGap: 12,
		rowGap: 24,
		padding: '0 20px',
		[theme.breakpoints.down(450)]: {
			rowGap: 6,
		},
	},
}));
