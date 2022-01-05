import React, { useState } from 'react';
import {
	List,
	Grid,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';

import useStyles from './styles';
import { SettingsUser } from './SettingsUser';
import { SettingsPassword } from './SettingsPassword';

const Settings = () => {
	const classes = useStyles();
	const [active, setActive] = useState(1);

	return (
		<Grid item container className={classes.root}>
			<Typography variant="h2" className={classes.title}>
				Inställningar
			</Typography>
			<Grid item container className={classes.grid}>
				<Grid item container className={classes.listContainer}>
					<List className={classes.list} dense>
						<ListItem
							className={`${classes.listItem} ${
								active === 1 && classes.active
							}`}
							onClick={() => setActive(1)}
						>
							<ListItemText>
								<Typography
									variant="subtitle2"
									className={`${classes.listItemText} ${
										active === 1 && classes.activeListItemText
									}`}
								>
									Konto
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem
							className={`${classes.listItem} ${
								active === 2 && classes.active
							}`}
							onClick={() => setActive(2)}
						>
							<ListItemText>
								<Typography
									variant="subtitle2"
									className={`${classes.listItemText} ${
										active === 2 && classes.activeListItemText
									}`}
								>
									Lösenord
								</Typography>
							</ListItemText>
						</ListItem>
					</List>
				</Grid>
				<Grid item container>
					{active === 1 ? <SettingsUser /> : <SettingsPassword />}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Settings;
