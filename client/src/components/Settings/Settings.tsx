import React, { useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';

import useStyles from './styles';
import { SettingsUser } from './SettingsUser';
import { SettingsPassword } from './SettingsPassword';
import { DesktopSettingsList } from './DesktopSettingsList';
import theme from 'src/theme';
import { MobileSettingsList } from './MobileSettingsList';
import { NavigateBackButton } from '../NavigateBackButton';

const Settings = () => {
	const classes = useStyles();
	const [active, setActive] = useState(1);
	const smallScreen = useMediaQuery(theme.breakpoints.down(880));

	const handleSetActive = () => {
		if (active === 1) setActive(2);
		if (active === 2) setActive(1);
	};

	return (
		<Grid item container className={classes.root}>
			<Grid item container className={classes.titleContainer}>
				<NavigateBackButton page="back" />
				<Typography variant="h2">Inställningar</Typography>
			</Grid>
			<Grid item container className={classes.grid}>
				{smallScreen ? (
					<MobileSettingsList active={active} setActive={handleSetActive} />
				) : (
					<DesktopSettingsList active={active} setActive={handleSetActive} />
				)}
				{/* <DesktopSettingsList active={active} setActive={handleSetActive} /> */}
				<Grid item container>
					{active === 1 ? <SettingsUser /> : <SettingsPassword />}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Settings;
