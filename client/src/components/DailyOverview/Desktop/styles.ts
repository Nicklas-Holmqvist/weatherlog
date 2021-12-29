import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		backgroundColor: '#f2f2f2',
		borderColor: '#f2f2f2',
		borderWidth: 4,
		borderStyle: 'solid',
		// height: 650,
		marginTop: 25,
		overflow: 'hidden',
		borderRadius: 26,
	},
	leftContainer: {
		backgroundColor: theme.palette.common.white,
		width: '25%',
		height: '100%',
		padding: '30px 20px',
	},
	rightContainer: {
		backgroundColor: '#f2f2f2',
		width: '75%',
		height: '100%',
		padding: '30px 40px',
	},
	dateContainer: {
		height: 'fit-content',
		justifyContent: 'space-evenly',
	},
	weatherIcon: {
		width: '70%',
		margin: '30px auto 70px auto',
	},
	temp: {
		fontWeight: 200,
		marginRight: 8,
	},
	tempColor: {
		width: 20,
		height: 20,
		borderRadius: 20,
	},
	tempAndColorContainer: {
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 20px',
		marginBottom: 6,
	},
	divider: {
		width: 'calc(100% - 40px)',
		margin: '12px auto',
	},
	location: {
		marginBottom: 6,
	},
	cardContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		gap: 30,
	},
	notesAndButtons: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr',
		columnGap: 30,
		marginBottom: 30,
	},
	notes: {
		gridArea: '1 / 1 / 2 / 3',
	},
	notesTitle: {
		textDecoration: 'underline',
		marginBottom: 6,
	},
	iconButtons: {
		gridArea: '1 / 3 / 2 / 4',
		display: 'flex',
		justifyContent: 'end',
		alignItems: 'start',
	},
	iconButton: {
		justifySelf: 'end',
		backgroundColor: theme.palette.common.white,
		marginLeft: 10,
		color: theme.palette.common.black,
	},
	bar: {
		width: '100%',
	},
}));
