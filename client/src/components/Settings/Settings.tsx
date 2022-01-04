import React from 'react'
import { Grid } from '@material-ui/core'

import SettingsUser from '../SettingsUser/SettingsUser';
import SettingsPassword from '../SettingsPassword/SettingsPassword';

import useStyles from './styles';

const Settings = () => {

    const classes = useStyles()

    return (
        <Grid container direction="column" className={classes.settingsContainer}>            
            <SettingsUser />
            <SettingsPassword />
        </Grid>
    )
}

export default Settings
