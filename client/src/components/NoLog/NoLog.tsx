import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

export const NoLog = () => {
	const classes = useStyles();

	const navigateTo = useNavigate();

	const handleNavigate = () => {
		navigateTo('/create-log');
	};

	return (
		<Grid container className={classes.container}>
			<Grid container className={classes.noLog}>
				<Typography variant="h4" className={classes.header}>
					Här finns inga loggar än
				</Typography>
				<Button
					name="gå till skapa inlägg"
					variant="contained"
					disableElevation
					onClick={handleNavigate}
					className={classes.btn}
				>
					Skapa
				</Button>
			</Grid>
		</Grid>
	);
};

export default NoLog;
