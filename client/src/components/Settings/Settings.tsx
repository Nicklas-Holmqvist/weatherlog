import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { SettingsUser } from './SettingsUser';
import { SettingsPassword } from './SettingsPassword';

const Settings = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.settingsContainer}>
			<SettingsUser />
			<SettingsPassword />
		</Grid>
	);
};

export default Settings;
