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
		[theme.breakpoints.down(1281)]: {
			maxHeight: 300,
		},
	},
	leftContainer: {
		backgroundColor: theme.palette.common.white,
		width: '25%',
		height: '100%',
		padding: '30px 20px',
		flexWrap: 'nowrap',
		[theme.breakpoints.down(1281)]: {
			alignContent: 'start',
			padding: '15px 12px',
		},
	},
	rightContainer: {
		backgroundColor: '#f2f2f2',
		width: '75%',
		height: '100%',
		padding: '30px 40px',
		[theme.breakpoints.down(1281)]: {
			alignContent: 'start',
			padding: '16px 25px',
		},
	},
	dateContainer: {
		height: 'fit-content',
		justifyContent: 'space-evenly',
		flexWrap: 'nowrap',
		alignItems: 'center',
		[theme.breakpoints.down(1281)]: {
			marginBottom: 4,
		},
	},
	date: {
		whiteSpace: 'nowrap',
		[theme.breakpoints.down(1281)]: {
			fontSize: 34,
		},
	},
	arrow: {
		margin: '0 10px',
		color: theme.palette.common.black,
	},
	weatherIcon: {
		width: '70%',
		margin: '30px auto 70px auto',
		[theme.breakpoints.down(1281)]: {
			width: 50,
			margin: 0,
		},
	},
	temp: {
		fontWeight: 200,
		marginRight: 8,
		[theme.breakpoints.down(1281)]: {
			fontSize: 36,
			fontWeight: 300,
		},
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
		[theme.breakpoints.down(1281)]: {
			marginTop: 6,
			marginBottom: 8,
		},
	},
	divider: {
		width: 'calc(100% - 40px)',
		margin: '12px auto',
		[theme.breakpoints.down(1281)]: {
			width: 'calc(100% - 40px)',
			margin: '6px auto',
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
	location: {
		marginBottom: 6,
	},
	list: {
		paddingBottom: 0,
	},
	listItem: {
		padding: '0 16px',
		margin: '3px 0',
	},
	listIcon: {
		[theme.breakpoints.down(1281)]: {
			width: 22,
		},
	},
	cardContainer: {
		display: 'grid',
		gap: 30,
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		[theme.breakpoints.down(1281)]: {
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
			gridTemplateRows: '1fr',
			columnGap: 10,
		},
	},
	notesAndButtons: {
		display: 'grid',
		columnGap: 30,
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: '1fr',
		marginBottom: 30,
		height: 'fit-content',
		[theme.breakpoints.down(1281)]: {
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
			columnGap: 12,
			marginBottom: 16,
		},
	},
	notes: {
		gridArea: '1 / 1 / 2 / 3',
		[theme.breakpoints.down(1281)]: {
			gridArea: '1 / 1 / 2 / 6',
		},
	},
	notesTitle: {
		textDecoration: 'underline',
		marginBottom: 6,
	},
	notesBody: {
		fontSize: '16px',
	},
	iconButtons: {
		gridArea: '1 / 3 / 2 / 4',
		display: 'flex',
		justifyContent: 'end',
		alignItems: 'start',
		[theme.breakpoints.down(1281)]: {
			gridArea: '1 / 6 / 2 / 7',
		},
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
