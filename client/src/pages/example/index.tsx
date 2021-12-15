import { Grid, Typography } from '@material-ui/core';

export const ExamplePage = () => {
	return (
		<Grid container direction="column">
			<Typography variant="h1">Exempeltext här</Typography>
			<Typography variant="h2">Exempeltext här</Typography>
			<Typography variant="h3">Exempeltext här</Typography>
			<Typography variant="h4">Exempeltext här</Typography>
			<Typography variant="h5">Exempeltext här</Typography>
			<Typography variant="h6">Exempeltext här</Typography>
			<Typography variant="subtitle1">Exempeltext här</Typography>
			<Typography variant="subtitle2">Exempeltext här</Typography>
			<Typography variant="body1">Exempeltext här</Typography>
			<Typography variant="body2">Exempeltext här</Typography>
		</Grid>
	);
};

export default ExamplePage;
