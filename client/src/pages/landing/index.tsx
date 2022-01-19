import { useEffect, useState } from 'react';
import {
	Button,
	Grid,
	IconButton,
	Switch,
	Typography,
	useMediaQuery,
	FormControlLabel,
	FormGroup,
} from '@material-ui/core';
import {
	AddRounded,
	FormatListBulletedRounded,
	ShowChartRounded,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useLogsContext } from '../../context/logs';
import { NoLog } from '../../components/NoLog/NoLog';
import { Loading, WeatherCard } from '../../components';

import theme from 'src/theme';
import useStyles from './styles';

import { ILogs } from 'src/types/Logs';
import GetMonthName from '../../utils/getMonthName';
import { Helmet } from 'react-helmet-async';
import { AllLogsList } from 'src/components/AllLogsList';

export const LandingPage = () => {
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.down(540));

	const { historyMonths } = useLogsContext();

	const [logList, setLogList] = useState<ILogs[]>([]);
	const [history, setHistory] = useState<string[]>(historyMonths);
	const [isLoading, setIsLoading] = useState<any>(true);
	const [showAll, setShowAll] = useState(false);

	const pageTitle = showAll ? 'Dina inlägg' : 'Senaste dagarna';

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setHistory(historyMonths);
	});

	const getFiveLogs = async () => {
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
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		/** Fetch all users logs */
		getFiveLogs();
	}, [isLoading, history]);

	return (
		<Grid item container className={classes.container}>
			<Helmet>
				<title>Hem | Väderdagboken</title>
				<meta name="hem" content="Se dina senaste 5 inlägg" />
			</Helmet>
			<Grid item container className={classes.pageHeader}>
				<Typography variant="h2" className={classes.pageTitle}>
					{pageTitle}
				</Typography>
				<Grid item className={classes.buttonContainer}>
					{/* <FormGroup>
						<FormControlLabel
							control={<Switch color="secondary" />}
							label={`Visa alla`}
						/>
					</FormGroup> */}
					{mobile ? (
						<IconButton className={classes.iconButton}>
							<FormatListBulletedRounded />
						</IconButton>
					) : (
						// <Button
						// 	variant="text"
						// 	endIcon={<FormatListBulletedRounded />}
						// 	disableElevation
						// 	// disabled={historyMonths.length < 1}
						// 	className={`${classes.disableUnderline} ${classes.mr}`}
						// >
						// 	Visa alla
						// </Button>
						<Grid item container className={classes.showAllButton}>
							<Switch color="secondary" onChange={() => setShowAll(!showAll)} />
							<Typography
								variant="subtitle2"
								className={classes.showAllButtonText}
							>
								Visa alla
							</Typography>
							<FormatListBulletedRounded
								fontSize="small"
								className={classes.listIcon}
							/>
						</Grid>
					)}
					{historyMonths.length >= 1 && (
						<Link
							to={`/diagram/${history[0]}`}
							className={classes.disableUnderline}
						>
							{mobile ? (
								<IconButton className={classes.iconButton}>
									<ShowChartRounded />
								</IconButton>
							) : (
								<Button
									variant="text"
									endIcon={<ShowChartRounded />}
									disableElevation
									disabled={historyMonths.length < 1}
									className={`${classes.disableUnderline} ${classes.mr}`}
								>
									Visa historik
								</Button>
							)}
						</Link>
					)}
					<Link to="/create-log" className={classes.disableUnderline}>
						{mobile ? (
							<IconButton edge="end" className={classes.iconButton}>
								<AddRounded />
							</IconButton>
						) : (
							<Button
								variant="contained"
								endIcon={<AddRounded />}
								disableElevation
							>
								Skapa
							</Button>
						)}
					</Link>
				</Grid>
			</Grid>
			{isLoading ? (
				<Loading />
			) : logList?.length === 0 ? (
				<NoLog />
			) : showAll ? (
				<AllLogsList />
			) : (
				<>
					<Grid item container className={classes.tableHeader}>
						<Grid item>
							<Typography variant="body1" className={classes.tableTitleText}>
								Datum
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.tableTitleText}>
								Temperatur
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.tableTitleText}>
								Väder
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.tableTitleText}>
								Vind
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.tableTitleText}>
								Nederbörd
							</Typography>
						</Grid>
					</Grid>
					<Grid item container direction="column">
						{logList.map((d: ILogs) => (
							<Link
								key={d._id}
								to={`/log/${d.date}`}
								className={classes.disableUnderline}
							>
								<WeatherCard
									temp={parseInt(d.temperature)}
									date={{
										day: d.date.substring(6, 8).toString(),
										month: GetMonthName(d.date.substring(4, 6).toString())!,
									}}
									weather={d.weather.toString()}
									wind={{
										speed: d.windSpeed.toString(),
										direction: d.windDirection.toString(),
									}}
									precipitation={Number(d.precipitation)}
								/>
							</Link>
						))}
					</Grid>
				</>
			)}
		</Grid>
	);
};

export default LandingPage;
