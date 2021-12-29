import { Grid, Typography } from '@material-ui/core';
import { useUsersContext } from '../../context/users';
import { useLogsContext } from '../../context/logs';

export const Api = () => {

	const user = useUsersContext()
	const log = useLogsContext()

	return (
		<div>
		<Grid container>
			<Typography variant="h4">User API</Typography>
			<button onClick={user.addUser}>Skapa konto</button>
			<button onClick={user.addUserInfo}>Lägg till info</button>
			<button onClick={user.editUser}>Edit user</button>
			<button onClick={user.changePassword}>Ändra lösenord</button>
			<button onClick={user.logout}>Logout</button>
			<button onClick={user.deleteUser}>Ta bort konto</button>
		</Grid>
		<Grid container>
			<Typography variant="h4">Log API</Typography>
			{/* <button onClick={log.addPost}>Skapa log</button> */}
			<button onClick={log.editPost}>Edit log</button>
			<button onClick={log.deletePost}>Ta bort log</button>
		</Grid>
		</div>
	);
};

export default Api;
