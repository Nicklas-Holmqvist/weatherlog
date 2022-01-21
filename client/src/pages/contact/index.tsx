import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from '@material-ui/core';
import { EmailRounded, PhoneRounded } from '@material-ui/icons';

import { NavigateBackButton } from 'src/components';
import useStyles from './styles';

export const ContactPage = () => {
	const classes = useStyles();

	const email = 'nicklas_holmqvist@outlook.com';
	const phoneNumber = '+46706700883';

	return (
		<Grid container item direction="column" className={classes.root}>
			<Grid item container className={classes.titleContainer}>
				<NavigateBackButton page="back" />
				<Typography variant="h2" className={classes.title}>
					Kontakt
				</Typography>
			</Grid>
			<Grid item className={classes.textBodyContainer}>
				<Typography variant="body1">
					Har du frågor om tjänsten får du gärna höra av dig till oss.
					Svarstiden på mail är högst 48 h.
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant="h5" className={classes.subtitle}>
					Kontaktuppgifter
				</Typography>
			</Grid>
			<List>
				<ListItem className={classes.listItem}>
					<ListItemIcon className={classes.listItemIcon}>
						<EmailRounded className={classes.icon} />
					</ListItemIcon>
					<Typography
						variant="subtitle1"
						component="a"
						className={classes.link}
						href={`mailto:${email}`}
					>
						Maila oss
					</Typography>
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemIcon className={classes.listItemIcon}>
						<PhoneRounded className={classes.icon} />
					</ListItemIcon>
					<Typography
						variant="subtitle1"
						component="a"
						className={classes.link}
						href={`tel:${phoneNumber}`}
					>
						Ring oss
					</Typography>
				</ListItem>
			</List>
		</Grid>
	);
};

export default ContactPage;
