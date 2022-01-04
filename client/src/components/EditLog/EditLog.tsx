import React from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useLogsContext } from '../../context/logs';

import GetMonthName from '../../utils/getMonthName';
import useStyles from './style';

const EditLog = () => {

    const classes = useStyles();
    const createLog = useLogsContext()
    const onChange = useLogsContext()
    const getLog = useLogsContext()
    const { log } = useLogsContext()

    const {id}:any = useParams();

    const year:string = log.date.substring(0,4)
    const month:any = GetMonthName(log.date.substring(4,6))
    const day:any = log.date.substring(6,8)
    
    const create = () => {
        createLog.editPost(id)
    }
    const fetch = () => {
        getLog.getLog(id)
    }    

    return (
        <Grid container direction="column" className={classes.container}>
            <Typography>
                Ändra inlägg
            </Typography>      
            <Grid container direction="row">
                <Typography variant="h4">{year}</Typography>
                <Typography variant="h4">{month}</Typography>
                <Typography variant="h4">{day}</Typography>
            </Grid>     
            <Grid container direction="row">
                <TextField
                    name="temperature"
                    value={log.temperature}
                    helperText=""
                    variant="standard"
                    className={classes.input}
                    margin="dense"
                    size="small"				
                    label="Temp"
                    onChange={(e) => (onChange.handleEditChange(e))}
                    required
                />
                <FormControl>
                    <InputLabel>Vädret</InputLabel>
                    <Select
                        name="weather"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={log.weather}
                        label="Vädret"
                        onChange={(e) =>(onChange.handleEditChange(e))}
                    >
                        <MenuItem value={'clear'}>Klart</MenuItem>
                        <MenuItem value={'semi-clear'}>Halvklart</MenuItem>
                        <MenuItem value={'overcast'}>Mulet</MenuItem>
                        <MenuItem value={'rain-shower'}>Lätt regn</MenuItem>
                        <MenuItem value={'heavy-rain'}>Regnskur</MenuItem>
                        <MenuItem value={'hail'}>Hagel</MenuItem>
                        <MenuItem value={'thunder'}>Åska</MenuItem>
                        <MenuItem value={'snowy-rain'}>Snöblandat regn</MenuItem>
                        <MenuItem value={'snowfall'}>Snöfall</MenuItem>
                        <MenuItem value={'fog'}>Dimma</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <TextField
                name="description"
                value={log.description}
                label="Beskrivning"
                multiline
                rows={4}
                variant="standard"
                onChange={(e) => (onChange.handleEditChange(e))}
            />
            <Grid container direction="row">
                <TextField
                    name="windSpeed"
                    value={log.windSpeed}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Vindstyrka"
                    onChange={(e) => (onChange.handleEditChange(e))}
                />
                <FormControl>
                    <InputLabel>Vindriktning</InputLabel>
                    <Select
                        name="windDirection"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Vädret"
                        value={log.windDirection}
                        onChange={(e) => (onChange.handleEditChange(e))}
                    >
                        <MenuItem value={'noWind'}>Vindstilla</MenuItem>
                        <MenuItem value={'n'}>Norr</MenuItem>
                        <MenuItem value={'ne'}>Nordöst</MenuItem>
                        <MenuItem value={'e'}>Öst</MenuItem>
                        <MenuItem value={'se'}>Sydöst</MenuItem>
                        <MenuItem value={'s'}>Syd</MenuItem>
                        <MenuItem value={'sw'}>Sydväst</MenuItem>
                        <MenuItem value={'w'}>Väst</MenuItem>
                        <MenuItem value={'nw'}>Nordväst</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid container direction="row">
                <TextField
                    name="airFeeling"
                    value={log.airFeeling}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Vindkänsla"
                    onChange={(e) => (onChange.handleEditChange(e))}
                />
                <TextField
                    name="airpressure"
                    value={log.airpressure}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Lufttryck"
                    onChange={(e) => (onChange.handleEditChange(e))}
                />
            </Grid>
            <Grid container direction="row">
                <TextField
                    name="precipitation"
                    value={log.precipitation}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"                    
                    label="Nederbörd"
                    onChange={(e) => (onChange.handleEditChange(e))}
                />
                <TextField
                    name="humidity"
                    value={log.humidity}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"                    
                    label="Luftfuktighet"
                    onChange={(e) => (onChange.handleEditChange(e))}
                />
            </Grid>
            <Button onClick={create}>Spara ändringar</Button>
            <Button onClick={fetch}>Hämta</Button>
        </Grid>
    )
}

export default EditLog
