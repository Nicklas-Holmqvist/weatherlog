import { Grid, Typography } from '@material-ui/core';
import { useUsersContext } from '../../context/users';

export const HomePage = () => {

	const user = useUsersContext()

	return (
		<Grid container>
			<Typography variant="h4">Startsidan</Typography>
			<button onClick={user.addUser}>Skapa konto</button>
			<button onClick={user.addUserInfo}>Lägg till info</button>
			<button onClick={user.editUser}>Edit user</button>
			<button onClick={user.changePassword}>Ändra lösenord</button>
			<button onClick={user.logout}>Logout</button>
			<button onClick={user.deleteUser}>Ta bort konto</button>
		</Grid>
	);
};

export default HomePage;
