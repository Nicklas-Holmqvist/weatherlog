import {
	Button,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	ListItemIcon,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import { NavigateBackButton } from '../NavigateBackButton';
import useStyles from './styles';

export const CreateLog = () => {
	const classes = useStyles();
	const createLog = useLogsContext();
	const onChange = useLogsContext();
	const resetCreateLogForm = useLogsContext().resetCreateLogForm;
	const getLogs = useLogsContext().getLogs;
	const {
		logValue,
		logDate,
		numberOfMonths,
		numberOfDays,
		logs,
		numberOfYears,
	} = useLogsContext();
	const MonthName = monthEnum;
	const usedDates: string[] = [];
	const navigateTo = useNavigate();
	const [errors, setErrors] = useState({
		date: false,
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

	const addZero = (value: number) => {
		if (value < 9) {
			return `0${value}`;
		}
		return value;
	};

	const selectedDate = [
		logDate.year.toString(),
		addZero(logDate.month),
		addZero(logDate.day),
	].join('');

	logs.forEach((log) => {
		if (selectedDate.includes(log.date.substring(0, 6))) {
			usedDates.push(log.date.substring(6, 8));
		}
		return usedDates;
	});

	const yearList = numberOfYears.map((year) => (
		<MenuItem key={year} value={year}>
			{year}
		</MenuItem>
	));

	/** Component in month dropdown */
	const monthList = numberOfMonths.map((month) => (
		<MenuItem key={month} value={month}>
			{MonthName[month]}
		</MenuItem>
	));

	/** Component in day dropdown */
	const dayList = numberOfDays.map((day) =>
		!usedDates.includes(day.toString()) ? (
			<MenuItem key={day} value={day}>
				{day}
			</MenuItem>
		) : (
			<MenuItem key={day} disabled value={day}>
				{day + ' - Inlägg finns'}
			</MenuItem>
		)
	);
	console.log(logDate)

	const handleCreateLog = () => {
		setErrors({
			date: false,
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
		for (const log of logs) {
			if (logValue.date === log.date) {
				setErrors((oldstate) => ({
					...oldstate,
					date: true,
				}));
				return;
			}
		}
		if (logValue.weather === '') {
			setErrors((oldstate) => ({
				...oldstate,
				weather: true,
			}));
			return;
		}
		if (logValue.temperature === '') {
			setErrors((oldstate) => ({
				...oldstate,
				temp: true,
			}));
			return;
		}
		if (logValue.precipitation === '') {
			setErrors((oldstate) => ({
				...oldstate,
				precipitation: true,
			}));
			return;
		}
		if (logValue.description.length > 260) {
			setErrors((oldstate) => ({
				...oldstate,
				desc: true,
			}));
			return;
		}
		createLog.addPost();
		navigateTo('/home', { replace: true });
		getLogs();
	};

	return (
		<Grid item container direction="column" className={classes.root}>
			<Grid item container className={classes.titleContainer}>
				<NavigateBackButton page="back" />
				<Typography variant="h2" className={classes.title}>
					Skapa inlägg
				</Typography>
			</Grid>
			<Grid item container direction="column">
				<Typography variant="subtitle1" className={classes.subtitle}>
					Datum *
				</Typography>
				<Grid
					item
					container
					className={`${classes.tripleColumns} ${classes.dateContainer}`}
				>
					<Grid item>
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<Select
								name="year"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={logDate?.year}
								onChange={(e) => onChange.handleChange(e)}
								className={classes.dropdown}
							>
								{yearList}
							</Select>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<Select
								name="month"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={logDate?.month}
								onChange={(e) => onChange.handleChange(e)}
								className={classes.dropdown}
							>
								{monthList}
							</Select>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<Select
								name="day"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								error={errors.date}
								value={logDate?.day}
								onChange={(e) => onChange.handleChange(e)}
								className={classes.dropdown}
							>
								{dayList}
							</Select>
							{errors.date && (
								<Typography
									variant="body2"
									color="error"
									className={classes.errorText}
								>
									Ett inlägg finns redan på detta datum
								</Typography>
							)}
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction="column">
				<Typography variant="subtitle1" className={classes.subtitle}>
					Väder, temperatur och nederbörd *
				</Typography>
				<Grid item container className={classes.tripleColumns}>
					<Grid item className={classes.weather}>
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<InputLabel className={classes.inputLabel}>Väder</InputLabel>
							<Select
								name="weather"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								error={errors.weather}
								value={logValue.weather}
								label="Väder"
								onChange={(e) => onChange.handleChange(e)}
								className={classes.dropdown}
							>
								{/* <WeatherList /> */}
								<MenuItem value={'sun'}>
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
								<MenuItem value={'rain'}>
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
							value={logValue.temperature}
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
							value={logValue.precipitation}
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
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<InputLabel className={classes.inputLabel}>
								Vindriktning
							</InputLabel>
							<Select
								name="windDirection"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Vindriktning"
								value={logValue.windDirection}
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
							value={logValue.windSpeed}
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
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<InputLabel className={classes.inputLabel}>Vindkänsla</InputLabel>
							<Select
								name="airFeeling"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Vindkänsla"
								value={logValue.airFeeling}
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
							value={logValue.airpressure}
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
							value={logValue.humidity}
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
								endAdornment: <InputAdornment position="end">%</InputAdornment>,
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction="column">
				<Typography variant="subtitle1" className={classes.subtitle}>
					Beskrivning
				</Typography>
				{/* <Grid item></Grid> */}
				<TextField
					name="description"
					value={logValue.description}
					error={errors.desc}
					helperText={
						errors.desc && 'Beskrivningen får ej bestå av mer än 260 tecken'
					}
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
			<Grid container direction='row'>
				<Button
					onClick={handleCreateLog}
					disableElevation
					variant="contained"
					className={classes.button}
					endIcon={<CheckRounded />}
				>
					Skapa log
				</Button>
				<Button
					onClick={resetCreateLogForm}
					disableElevation
					variant="contained"
					className={classes.buttonReset}
				>
					Nollställ
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateLog;
