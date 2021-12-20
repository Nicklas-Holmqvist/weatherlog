import { Grid, Typography } from '@material-ui/core';
import { useLogsContext } from '../../context/logs'
// import { useUsersContext } from '../../context/users'
export const HomePage = () => {

	const edit = useLogsContext().deletePost
	const logsContext = useLogsContext().logs[0]
	// const usersContext = useUsersContext().test

	return (
		<Grid container>
			<Typography variant="h4">Startsidan</Typography>
			<p>{logsContext?.date}</p>
			<p>{logsContext?.description}</p>
			<p>{logsContext?.weather}</p>
			<button onClick={edit}>Skicka log</button>
		</Grid>
	);
};

export default HomePage;
