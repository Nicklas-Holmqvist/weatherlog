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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILogs } from 'src/types/Logs';

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
import useStyles from './styles';
// import { WeatherList } from './WeatherList';

export const CreateLog = () => {
	const classes = useStyles();
	const createLog = useLogsContext();
	const onChange = useLogsContext();
	const getLogs = useLogsContext().getLogs;
	const { logValue, logDate, numberOfMonths, numberOfDays } = useLogsContext();
	const MonthName = monthEnum;
	const [logList, setLogList] = useState<ILogs[]>([]);
	// const [activeDate, setActiveDate] = useState({
	// 	year: logDate?.year,
	// 	month: logDate?.month,
	// 	day: logDate?.day,
	// });
	// let usedDates: any[];

	useEffect(() => {
		/** Fetch all users logs */
		const getAllLogs = async () => {
			await fetch('/api/home', {
				method: 'get',
			})
				.then((res) => {
					if (res.status === 400) {
						return;
					}
					return res.json();
				})
				.then((data) => {
					setLogList(data);
				})
				.catch((err) => {
					console.error(err);
				});
		};
		getAllLogs();
	}, []);

	const navigateTo = useNavigate();

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
	// const selectedDate = ['2022', '01', '13'].join('');
	const usedDates: string[] = [];
	logList.forEach((log) => {
		if (selectedDate.includes(log.date.substring(0, 6))) {
			usedDates.push(log.date.substring(6, 8));
		}
		return usedDates;
	});
	// console.log(usedDates);
	console.log(selectedDate + ' from CreateLog');

	/** Component in month dropdown */
	const monthList = numberOfMonths.map((month) => (
		<MenuItem value={month}>{MonthName[month]}</MenuItem>
	));

	/** Component in day dropdown */
	const dayList = numberOfDays.map((day) =>
		!usedDates.includes(day.toString()) ? (
			<MenuItem value={day}>{day}</MenuItem>
		) : (
			<MenuItem disabled value={day}>
				{day + ' - Inlägg finns'}
			</MenuItem>
		)
	);

	const create = () => {
		createLog.addPost();
		navigateTo('/home');
		getLogs();
	};

	return (
		<Grid item container direction="column" className={classes.root}>
			<Typography variant="h2" className={classes.title}>
				Skapa inlägg
			</Typography>
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
								value={logDate?.day}
								onChange={(e) => onChange.handleChange(e)}
								className={classes.dropdown}
							>
								{dayList}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction="column">
				<Typography variant="subtitle1" className={classes.subtitle}>
					Temperatur, väder och nederbörd *
				</Typography>
				<Grid item container className={classes.tripleColumns}>
					<Grid item className={classes.weather}>
						<FormControl variant="outlined" className={classes.input} fullWidth>
							<InputLabel className={classes.inputLabel}>Väder</InputLabel>
							<Select
								name="weather"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={logValue.weather}
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
						</FormControl>
					</Grid>
					<Grid item className={classes.temp}>
						<TextField
							name="temperature"
							value={logValue.temperature}
							helperText=""
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
							value={logValue.precipitation}
							helperText=""
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
							value={logValue.windSpeed}
							helperText=""
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
							value={logValue.airpressure}
							helperText=""
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
							helperText=""
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
				onClick={create}
				disableElevation
				variant="contained"
				className={classes.button}
				endIcon={<CheckRounded />}
			>
				Skapa log
			</Button>
		</Grid>
	);
};

export default CreateLog;
