import React from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'

import { useUsersContext } from '../../context/users'

import useStyles from './styles';

const Settings = () => {

    const classes = useStyles()

    const getUser = useUsersContext().fetchUser
    const { user } = useUsersContext()

    const changeSettings = () => {
        getUser()
    }

    const changePassword = () => {

    }

    return (
        <Grid container direction="column" className={classes.settingsContainer}>            
            <Grid container direction="column">
                <Typography variant="h4">Inställningar</Typography> 
                <TextField
                    name="firstName"
                    value={user.firstName}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Förnamn"
                    onChange={(e) => ("")}
                />
                <TextField
                    name="lastName"
                    value={user.lastName}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Efternamn"
                    onChange={(e) => ("")}
                />
                <TextField
                    name="city"
                    value={user.city}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Ort"
                    onChange={(e) => ("")}
                />
                <Button onClick={changeSettings}>Bekräfta</Button>
            </Grid>
            <Grid container direction="column">
                <Typography variant="h4">Byt lösenord</Typography> 
                <Button onClick={changePassword}>Bekräfta</Button>
            </Grid>
        </Grid>
    )
}

export default Settings