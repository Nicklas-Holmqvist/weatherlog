import { Grid, Typography } from '@material-ui/core';
import { useUsersContext } from '../../context/users'
import { useLogsContext } from '../../context/logs'


export const HomePage = () => {

	const usersContext = useUsersContext()
	const logs = useLogsContext()

	const handleChange = (event:any) => usersContext.setInputs(event)

	return (
		<Grid container>
			<Typography variant="h4">Startsidan</Typography>
			<button onClick={usersContext.createUser}>Skapa konto</button>
			<input type="text" name="oldPassword" value={usersContext.newPassword.oldPassword} onChange={handleChange} />
			<input type="text" name="newPassword" value={usersContext.newPassword.newPassword} onChange={handleChange} />
			<button onClick={logs.createLog}>Ändra lösenord</button>
		</Grid>
	);
};

export default HomePage;
