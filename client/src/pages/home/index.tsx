import { Grid, Typography } from '@material-ui/core';
// import { useLogsContext } from '../../context/logs'
import { useUsersContext } from '../../context/users'
import { useAuthContext } from '../../context/auth'
export const HomePage = () => {

	// const edit = useLogsContext().deletePost
	// const logsContext = useLogsContext().logs[0]
	const usersContext = useUsersContext()
	// const authContext = useAuthContext()

	const change = (event:any) => usersContext.setInputs(event)

	return (
		<Grid container>
			<Typography variant="h4">Startsidan</Typography>
			{/* <p>{logsContext?.date}</p>
			<p>{logsContext?.description}</p>
			<p>{logsContext?.weather}</p> */}´
			<button onClick={usersContext.addUser}>Skapa konto</button>
			<input type="text" name="oldPassword" value={usersContext.newPassword.oldPassword} onChange={change} />
			<input type="text" name="newPassword" value={usersContext.newPassword.newPassword} onChange={change} />
			<button onClick={usersContext.changePassword}>Ändra lösenord</button>
		</Grid>
	);
};

export default HomePage;
