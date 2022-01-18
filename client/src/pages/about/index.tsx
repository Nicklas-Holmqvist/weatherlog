import { Grid, Typography } from '@material-ui/core';

import logo from './weatherlog-mini-logo.svg';
import { NavigateBackButton } from 'src/components';
import useStyles from './styles';

export const AboutPage = () => {
	const classes = useStyles();

	return (
		<Grid container item direction="column" className={classes.root}>
			<Grid item container className={classes.titleContainer}>
				<NavigateBackButton page="back" />
				<Typography variant="h2" className={classes.title}>
					Om
				</Typography>
			</Grid>
			<Grid item className={classes.textBodyContainer}>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
					quisquam ratione quae blanditiis iste incidunt. Ipsum quis ratione
					repellendus culpa illum maxime laboriosam earum fugit officia, a
					laudantium blanditiis soluta. Ipsum quis ratione repellendus culpa
					illum maxime laboriosam earum fugit officia, a laudantium blanditiis
					soluta.
				</Typography>
				<img src={logo} alt="Logo" className={classes.logo} />
			</Grid>
			<Grid item>
				<Typography variant="h5" className={classes.subtitle}>
					Rubrik
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
					quisquam ratione quae blanditiis iste incidunt. Ipsum quis ratione
					repellendus culpa illum maxime laboriosam earum fugit officia, a
					laudantium blanditiis soluta.
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="h5" className={classes.subtitle}>
					Rättigheter
				</Typography>
				<Typography variant="subtitle1">
					Copyright © 2022 | Väderdagboken
				</Typography>
				<Typography variant="body1">Alla rättigheter reserverade</Typography>
			</Grid>
		</Grid>
	);
};

export default AboutPage;
