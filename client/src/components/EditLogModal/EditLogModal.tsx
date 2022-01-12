import React, { useState } from 'react';
import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
	ListItemIcon,
	InputAdornment,
	Modal,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useLogsContext } from '../../context/logs';

import {
	Fog,
	Hail,
	Overcast,
	Rain,
	RainShower,
	SemiClear,
	Snowfall,
	SnowShower,
	SnowyRain,
	Sun,
	Thunder,
	monthEnum,
	windFeelEnum,
} from '../../utils';
import GetMonthName from '../../utils/getMonthName';
import useStyles from './style';
import { CheckRounded } from '@material-ui/icons';

interface IEditLogModal {
	open: boolean;
	handleClose: () => void;
}

const EditLogModal = ({ open, handleClose }: IEditLogModal) => {
	const classes = useStyles();
	const editPost = useLogsContext().editPost;
	const onChange = useLogsContext();
	const getLog = useLogsContext();
	const getLogs = useLogsContext().getLogs;
	const { log } = useLogsContext();
	const [errors, setErrors] = useState({
		weather: false,
		temp: false,
		precipitation: false,
		windDir: false,
		windSpeed: false,
		windFeel: false,
		airPressure: false,
		humidity: false,
		desc: false,
	});

	const { id }: any = useParams();

	const year: string = log.date.substring(0, 4);
	const month: any = GetMonthName(log.date.substring(4, 6));
	const day: any = log.date.substring(6, 8);

	const edit = () => {
		handleClose();
		editPost(id);
		getLogs();
	};
	const fetch = () => {
		getLog.getLog(id);
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Grid item container direction="column" className={classes.root}>
				<Typography variant="h2" className={classes.title}>
					Ändra inlägg
				</Typography>
				<Grid item container direction="column">
					<Typography variant="subtitle1" className={classes.subtitle}>
						Väder, temperatur och nederbörd *
					</Typography>
					<Grid item container className={classes.tripleColumns}>
						<Grid item className={classes.weather}>
							<FormControl
								variant="outlined"
								className={classes.input}
								fullWidth
							>
								<InputLabel className={classes.inputLabel}>Väder</InputLabel>
								<Select
									name="weather"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									error={errors.weather}
									defaultValue={log.weather}
									label="Väder"
									onChange={(e) => onChange.handleChange(e)}
									className={classes.dropdown}
								>
									{/* <WeatherList /> */}
									<MenuItem value={'clear'}>
										<ListItemIcon className={classes.iconContainer}>
											<Sun className={classes.icon} />
										</ListItemIcon>
										<Typography>Klart</Typography>
									</MenuItem>
									<MenuItem value={'semi-clear'}>
										<ListItemIcon className={classes.iconContainer}>
											<SemiClear className={classes.icon} />
										</ListItemIcon>
										<Typography>Halvklart</Typography>
									</MenuItem>
									<MenuItem value={'overcast'}>
										<ListItemIcon className={classes.iconContainer}>
											<Overcast className={classes.icon} />
										</ListItemIcon>
										<Typography>Mulet</Typography>
									</MenuItem>
									<MenuItem value={'rain-shower'}>
										<ListItemIcon className={classes.iconContainer}>
											<RainShower className={classes.icon} />
										</ListItemIcon>
										<Typography>Regnskurar</Typography>
									</MenuItem>
									<MenuItem value={'heavy-rain'}>
										<ListItemIcon className={classes.iconContainer}>
											<Rain className={classes.icon} />
										</ListItemIcon>
										<Typography>Regn</Typography>
									</MenuItem>
									<MenuItem value={'hail'}>
										<ListItemIcon className={classes.iconContainer}>
											<Hail className={classes.icon} />
										</ListItemIcon>
										<Typography>Hagel</Typography>
									</MenuItem>
									<MenuItem value={'thunder'}>
										<ListItemIcon className={classes.iconContainer}>
											<Thunder className={classes.icon} />
										</ListItemIcon>
										<Typography>Åska</Typography>
									</MenuItem>
									<MenuItem value={'snowy-rain'}>
										<ListItemIcon className={classes.iconContainer}>
											<SnowyRain className={classes.icon} />
										</ListItemIcon>
										<Typography>Snöblandat regn</Typography>
									</MenuItem>
									<MenuItem value={'snowfall'}>
										<ListItemIcon className={classes.iconContainer}>
											<Snowfall className={classes.icon} />
										</ListItemIcon>
										<Typography>Snö</Typography>
									</MenuItem>
									<MenuItem value={'snowfall'}>
										<ListItemIcon className={classes.iconContainer}>
											<SnowShower className={classes.icon} />
										</ListItemIcon>
										<Typography>Snöbyar</Typography>
									</MenuItem>
									<MenuItem value={'fog'}>
										<ListItemIcon className={classes.iconContainer}>
											<Fog className={classes.icon} />
										</ListItemIcon>
										<Typography>Dimma</Typography>
									</MenuItem>
								</Select>
								{errors.weather && (
									<Typography
										variant="body2"
										color="error"
										className={classes.errorText}
									>
										Välj väder
									</Typography>
								)}
							</FormControl>
						</Grid>
						<Grid item className={classes.temp}>
							<TextField
								name="temperature"
								defaultValue={log.temperature}
								type="number"
								error={errors.temp}
								helperText={errors.temp && 'Ange temperatur'}
								variant="outlined"
								className={classes.input}
								size="small"
								margin="dense"
								label="Temp"
								onChange={(e) => onChange.handleChange(e)}
								fullWidth
								required
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">°C</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item className={classes.precipitation}>
							<TextField
								name="precipitation"
								type="number"
								defaultValue={log.precipitation}
								error={errors.precipitation}
								helperText={errors.precipitation && 'Ange nederbörd'}
								variant="outlined"
								margin="dense"
								size="small"
								label="Nederbörd"
								onChange={(e) => onChange.handleChange(e)}
								className={classes.input}
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">mm</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container direction="column">
					<Typography variant="subtitle1" className={classes.subtitle}>
						Vind
					</Typography>
					<Grid
						item
						container
						className={`${classes.tripleColumns} ${classes.windContainer}`}
					>
						<Grid item>
							<FormControl
								variant="outlined"
								className={classes.input}
								fullWidth
							>
								<InputLabel className={classes.inputLabel}>
									Vindriktning
								</InputLabel>
								<Select
									name="windDirection"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Vindriktning"
									value={log.windDirection}
									onChange={(e) => onChange.handleChange(e)}
									className={classes.dropdown}
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
						<Grid item>
							<TextField
								name="windSpeed"
								type="number"
								defaultValue={log.windSpeed}
								error={errors.windSpeed}
								helperText={errors.windSpeed && 'Använd endast siffror'}
								variant="outlined"
								margin="dense"
								size="small"
								label="Vindstyrka"
								onChange={(e) => onChange.handleChange(e)}
								className={classes.input}
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">m/s</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item>
							<FormControl
								variant="outlined"
								className={classes.input}
								fullWidth
							>
								<InputLabel className={classes.inputLabel}>
									Vindkänsla
								</InputLabel>
								<Select
									name="airFeeling"
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Vindkänsla"
									value={log.airFeeling}
									onChange={(e) => onChange.handleChange(e)}
									className={classes.dropdown}
								>
									<MenuItem value="cold">{windFeelEnum.COLD}</MenuItem>
									<MenuItem value="cool">{windFeelEnum.COOL}</MenuItem>
									<MenuItem value="neutral">{windFeelEnum.NEUTRAL}</MenuItem>
									<MenuItem value="mild">{windFeelEnum.MILD}</MenuItem>
									<MenuItem value="warm">{windFeelEnum.WARM}</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container direction="column">
					<Typography variant="subtitle1" className={classes.subtitle}>
						Luft
					</Typography>
					<Grid item container className={classes.doubleColumns}>
						<Grid item>
							<TextField
								name="airpressure"
								type="number"
								defaultValue={log.airpressure}
								error={errors.airPressure}
								helperText={
									errors.airPressure && 'Ange ett värde mellan 900-1100'
								}
								variant="outlined"
								margin="dense"
								size="small"
								label="Lufttryck"
								onChange={(e) => onChange.handleChange(e)}
								className={classes.input}
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">hPa</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item>
							<TextField
								name="humidity"
								defaultValue={log.humidity}
								type="number"
								error={errors.humidity}
								helperText={errors.humidity && 'Ange ett värde mellan 0-100'}
								variant="outlined"
								margin="dense"
								size="small"
								label="Luftfuktighet"
								onChange={(e) => onChange.handleChange(e)}
								className={classes.input}
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">%</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container direction="column">
					<Typography variant="subtitle1" className={classes.subtitle}>
						Beskrivning
					</Typography>
					<TextField
						name="description"
						defaultValue={log.description}
						label="Beskrivning"
						multiline
						rows={4}
						variant="outlined"
						onChange={(e) => onChange.handleChange(e)}
						className={classes.input}
						fullWidth
						margin="dense"
					/>
				</Grid>
				<Button
					onClick={edit}
					disableElevation
					variant="contained"
					className={classes.button}
					endIcon={<CheckRounded />}
				>
					Spara ändringar
				</Button>
				{/* <Button onClick={fetch}>Hämta</Button> */}
			</Grid>
		</Modal>
	);
};

export default EditLogModal;
