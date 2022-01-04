import React from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'

import { useUsersContext } from '../../context/users'

import useStyles from './styles';

const Settings = () => {

    const classes = useStyles()

    const getUser = useUsersContext().fetchUser
    const handleChange = useUsersContext().handleChange
    const editUser = useUsersContext().editUser
    const changePassword = useUsersContext().changePassword
    const { user, password } = useUsersContext()

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
                <Button onClick={getUser}>Hämta användare</Button>
                <Button onClick={editUser}>Bekräfta</Button>
            </Grid>
            <Grid container direction="column">
                <Typography variant="h4">Byt lösenord</Typography> 
                <TextField
                    name="oldPassword"
                    value={password.oldPassword}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Gamla lösenordet"
                    onChange={(e) => (handleChange(e))}
                />
                <TextField
                    name="newPassword"
                    value={password.newPassword}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Nya lösenordet"
                    onChange={(e) => (handleChange(e))}
                />

                <Button onClick={changePassword}>Bekräfta</Button>
            </Grid>
        </Grid>
    )
}

export default Settings
