import { Grid, Typography } from '@material-ui/core';

import { Helmet } from 'react-helmet-async';
import logo from './weatherlog-mini-logo.svg';
import { NavigateBackButton } from 'src/components';
import useStyles from './styles';

export const AboutPage = () => {
	const classes = useStyles();

	return (
    <Grid container item direction="column" className={classes.root}>
      <Helmet>
				<title>Om oss | Väderdagboken</title>
				<meta name="om-oss" content="Om väderdagboken" />
			</Helmet>
      <Grid item container className={classes.titleContainer}>
        <NavigateBackButton page="back" />
        <Typography variant="h2" className={classes.title}>
          Om
        </Typography>
      </Grid>
      <Grid item className={classes.textBodyContainer}>
        <Typography variant="body1">
          Väderdagboken är en digital dagbok för att logga vädret hos dig. Du
          kan med Väderdagboken logga dagar, ändra och ta bort dem. Se
          historiken per månad i diagram-form och listvy men även alla loggar i
          en enda list-vy. Det är inte bara personer som kan använda den här
          webb-appen utan även skolklasser som vill se hur vädret förändras inom
          en viss period. Alla som är intresserade av vädret!
        </Typography>
        <img src={logo} alt="Logo" className={classes.logo} />
      </Grid>
      <Grid item>
        <Typography variant="h5" className={classes.subtitle}>
          Idé
        </Typography>
        <Typography variant="body1">
          Skaparna är Nicklas Holmqvist och Oliver Nygren som ett examensarbete
          i Frontendutbildningen 2022 på Medieinstitutet i Göteborg. Grundidén
          till Väderdagboken var något som Nicklas hade med sig som barn då han
          satt och skapade egna diagram i ett rut-block. Nu kan man logga det
          mesta som en väderstation kan visa.
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
