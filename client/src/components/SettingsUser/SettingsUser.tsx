import React from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'

import { useUsersContext } from '../../context/users'

import useStyles from './styles';

const SettingsUser = () => {

    const classes = useStyles()

    const handleChange = useUsersContext().handleChange
    const editUser = useUsersContext().editUser
    const { user } = useUsersContext()

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
                    onChange={(e) => (handleChange(e))}
                />
                <TextField
                    name="lastName"
                    value={user.lastName}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Efternamn"
                    onChange={(e) => (handleChange(e))}
                />
                <TextField
                    name="city"
                    value={user.city}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Ort"
                    onChange={(e) => (handleChange(e))}
                />
                <Button onClick={editUser}>Bekräfta ändring</Button>
            </Grid>
        </Grid>
    )
}

export default SettingsUser
