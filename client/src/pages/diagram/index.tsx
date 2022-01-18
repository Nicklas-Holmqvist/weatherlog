import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';

import Diagram from '../../components/Diagram/Diagram';

export const DiagramPage = () => {
	return (
		<Grid container>
			<Helmet>
				<title>Historik | Väderdagboken</title>
				<meta name="historik" content="se vädrets historik per månad" />
			</Helmet>
			<Diagram />
		</Grid>
	);
};

export default DiagramPage;
