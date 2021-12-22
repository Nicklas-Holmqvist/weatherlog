import { Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './style';
import { Logs } from '../../types/Logs'



const Create = (e:any) => {

    const classes = useStyles();

    const [logValue, setLogValue] = useState<Logs>({
        airFeeling: "",
        airpressure: "",
        date: "",
        description: "",
        humidity: "",
        precipitation: "",
        temperature: "",
        user: "",
        windDirection: "",
        windSpeed: "",
        weather: ""
    })

        /** Handle the input changes */
        function handleChange(e:any) {
            // console.log(e)
            console.log(logValue)
            const value = e.target.value;
    
            setLogValue({
                ...logValue,
                [e.target.name]: value
            })     
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
				onChange={handleChange}
				required
			/>
            <Grid direction="row">
                <TextField
                    name="temperature"
                    helperText=""
                    variant="standard"
                    className={classes.input}
                    margin="dense"
                    size="small"				
                    label="Temp"
                    onChange={handleChange}
                    required
                />
                <Grid direction="row">
                    <InputLabel>Vädret</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logValue.weather}
                        label="Vädret"
                        onChange={handleChange}
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
                </Grid>
            </Grid>
            <TextField
                name="description"
                label="Beskrivning"
                multiline
                rows={4}
                variant="standard"
            />
            <Grid direction="row">
                <TextField
                    name="windSpeed"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"				
                    label="Vindstyrka"
                    onChange={handleChange}
                />
                <Grid direction="row">
                    <InputLabel>Vindriktning</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logValue.windDirection}
                        label="Vädret"
                        onChange={handleChange}
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
                </Grid>
            </Grid>
            <Grid direction="row">
                <TextField
                    name="windFeeling"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Vindkänsla"
                    onChange={handleChange}
                />
                <TextField
                    name="airpressure"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Lufttryck"
                    onChange={handleChange}
                />
            </Grid>
            <Grid direction="row">
                <TextField
                    name="precipitation"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Nederbörd"
                    onChange={handleChange}
                />
                <TextField
                    name="humidity"
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Luftfuktighet"
                    onChange={handleChange}
                />
            </Grid>
            <button onClick={create}>Skapa log</button>
        </Grid>
    )
}

export default Create
