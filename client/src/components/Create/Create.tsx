import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useLogsContext } from '../../context/logs';
import React from 'react'
import useStyles from './style';

const Create = () => {

    const classes = useStyles();
    const createLog = useLogsContext()
    const onChange = useLogsContext()
    const logs = useLogsContext()

    const create = () => {
        createLog.addPost()
    }

    return (
        <Grid container direction="column" className={classes.container}>
            <Typography>
                Skapa inlägg
            </Typography>            
            <TextField
                name="date"
				helperText=""
				variant="standard"
                className={classes.input}
				margin="dense"
				size="small"				
				label="Datum"
				onChange={(e) => (onChange.handleChange(e))}
				required
			/>
            <Grid container direction="row">
                <TextField
                    name="temperature"
                    helperText=""
                    variant="standard"
                    className={classes.input}
                    margin="dense"
                    size="small"				
                    label="Temp"
                    onChange={(e) => (onChange.handleChange(e))}
                    required
                />
                <FormControl>
                    <InputLabel>Vädret</InputLabel>
                    <Select
                        name="weather"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logs.logValue.weather}
                        label="Vädret"
                        onChange={(e) =>(onChange.handleChange(e))}
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
                label="Beskrivning"
                multiline
                rows={4}
                variant="standard"
                onChange={(e) => (onChange.handleChange(e))}
            />
            <Grid container direction="row">
                <TextField
                    name="windSpeed"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Vindstyrka"
                    onChange={(e) => (onChange.handleChange(e))}
                />
                <FormControl>
                    <InputLabel>Vindriktning</InputLabel>
                    <Select
                        name="windDirection"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Vädret"
                        value={logs.logValue.windDirection}
                        onChange={(e) => (onChange.handleChange(e))}
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
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Vindkänsla"
                    onChange={(e) => (onChange.handleChange(e))}
                />
                <TextField
                    name="airpressure"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Lufttryck"
                    onChange={(e) => (onChange.handleChange(e))}
                />
            </Grid>
            <Grid container direction="row">
                <TextField
                    name="precipitation"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Nederbörd"
                    onChange={(e) => (onChange.handleChange(e))}
                />
                <TextField
                    name="humidity"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Luftfuktighet"
                    onChange={(e) => (onChange.handleChange(e))}
                />
            </Grid>
            <Button onClick={create}>Skapa log</Button>
        </Grid>
    )
}

export default Create
