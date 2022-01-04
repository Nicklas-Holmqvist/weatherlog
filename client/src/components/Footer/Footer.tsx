import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { footerLinks } from 'src/utils';

import useStyles from './styles';

export const Footer = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.container}>
			{footerLinks.map((link) => {
				return (
					<Link to={link.path} className={classes.link}>
						<Typography variant="subtitle1" className={classes.text}>
							{link.label}
						</Typography>
					</Link>
				);
			})}
			<Typography variant="body1" className={classes.text}>
				Copyright © Vädernördarna | 2021
			</Typography>
		</Grid>
	);
};

export default Footer;
