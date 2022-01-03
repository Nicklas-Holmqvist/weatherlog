import React from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';

import { useLogsContext } from '../../context/logs';
import { monthEnum } from '../../utils/enums/monthEnum'
import useStyles from './style';
import { useParams } from 'react-router-dom';

const EditLog = () => {

    const classes = useStyles();
    const createLog = useLogsContext()
    const onChange = useLogsContext()
    const getLog = useLogsContext()
    const {logValue, logDate, numberOfMonths, numberOfDays } = useLogsContext()
    const MonthName = monthEnum

    /** Component in month dropdown */
    const monthList = numberOfMonths.map((month) => <MenuItem value={month}>{MonthName[month]}</MenuItem>);
    /** Component in day dropdown */
    const dayList = numberOfDays.map((day) => <MenuItem value={day}>{day}</MenuItem>);

    const {id}:any = useParams();
    
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
                <FormControl>
                    <Select
                        name="year"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logDate?.year}
                        onChange={(e) =>(onChange.handleChange(e))}
                    >
                        <MenuItem value={'2015'}>2015</MenuItem>
                        <MenuItem value={'2016'}>2016</MenuItem>
                        <MenuItem value={'2017'}>2017</MenuItem>
                        <MenuItem value={'2018'}>2018</MenuItem>
                        <MenuItem value={'2019'}>2019</MenuItem>
                        <MenuItem value={'2020'}>2020</MenuItem>
                        <MenuItem value={'2021'}>2021</MenuItem>
                        <MenuItem value={'2022'}>2022</MenuItem>
                    </Select>
                </FormControl>     
                <FormControl>
                    <Select
                        name="month"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logDate?.month}
                        onChange={(e) =>(onChange.handleChange(e))}
                    >
                        {monthList}
                    </Select>
                </FormControl>     
                <FormControl>
                    <Select
                        name="day"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={logDate?.day}
                        onChange={(e) =>(onChange.handleChange(e))}
                    >
                        {dayList}
                    </Select>
                </FormControl>   
            </Grid>     
            <Grid container direction="row">
                <TextField
                    name="temperature"
                    value={logValue.temperature}
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
                        value={logValue.weather}
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
                value={logValue.description}
                label="Beskrivning"
                multiline
                rows={4}
                variant="standard"
                onChange={(e) => (onChange.handleChange(e))}
            />
            <Grid container direction="row">
                <TextField
                    name="windSpeed"
                    value={logValue.windSpeed}
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
                        value={logValue.windDirection}
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
                    value={logValue.airFeeling}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"
                    
                    label="Vindkänsla"
                    onChange={(e) => (onChange.handleChange(e))}
                />
                <TextField
                    name="airpressure"
                    value={logValue.airpressure}
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
                    value={logValue.precipitation}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"                    
                    label="Nederbörd"
                    onChange={(e) => (onChange.handleChange(e))}
                />
                <TextField
                    name="humidity"
                    value={logValue.humidity}
                    helperText=""
                    variant="standard"
                    margin="dense"
                    size="small"                    
                    label="Luftfuktighet"
                    onChange={(e) => (onChange.handleChange(e))}
                />
            </Grid>
            <Button onClick={create}>Skapa log</Button>
            <Button onClick={fetch}>hämta</Button>
        </Grid>
    )
}

export default EditLog