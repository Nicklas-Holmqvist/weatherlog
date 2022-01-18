import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Settings from '../../components/Settings/Settings';

export const SettingsPage = () => {
	return (
		<Grid container>
			<Helmet>
				<title>Inställningar | Väderdagboken</title>
				<meta name="inställningar" content="Dina inställningar" />
			</Helmet>
			<Settings />
		</Grid>
	);
};

export default SettingsPage;
