import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from '@material-ui/core';
import { EmailRounded, FlagRounded, PhoneRounded } from '@material-ui/icons';
import { useState } from 'react';

import { NavigateBackButton } from 'src/components';
import useStyles from './styles';

export const ContactPage = () => {
	const classes = useStyles();
	const [isEmailHovered, setIsEmailHovered] = useState(false);
	const [isPhoneHovered, setIsPhoneHovered] = useState(false);

	const email = 'info@vaderdagboken.se';
	const phoneNumber = '+46705678910';

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
						onMouseEnter={() => setIsEmailHovered(true)}
						onMouseLeave={() => setIsEmailHovered(false)}
					>
						{isEmailHovered ? 'Maila oss' : 'info@vaderdagboken.se'}
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
						onMouseEnter={() => setIsPhoneHovered(true)}
						onMouseLeave={() => setIsPhoneHovered(false)}
					>
						{isPhoneHovered ? 'Ring oss' : '+46 705 67 89 10'}
					</Typography>
				</ListItem>
			</List>
		</Grid>
	);
};

export default ContactPage;
