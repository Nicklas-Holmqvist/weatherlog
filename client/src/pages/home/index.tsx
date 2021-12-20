import { Grid, Typography } from '@material-ui/core';
import { useLogsContext } from '../../context/logs'
import { useUsersContext } from '../../context/users'
export const HomePage = () => {

	// const logsContext = useLogsContext().test
	// const usersContext = useUsersContext().test

	return (
		<Grid container>
			<Typography variant="h4">Startsidan</Typography>
		</Grid>
	);
};

export default HomePage;
