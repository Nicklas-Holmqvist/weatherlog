import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';
import {
	Button,
	Divider,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import {
	AddRounded,
	ArrowBackRounded,
	ArrowForwardRounded,
	ShowChartRounded,
	List
} from '@material-ui/icons';
import { Line } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { useDiagramsContext } from 'src/context/diagram';
import { ErrorPage } from '../ErrorPage';

import { ILogs } from '../../types/Logs'

import theme from 'src/theme';
import useStyles from './style';
import getMonthName from '../../utils/getMonthName';
import { NavigateBackButton } from '../NavigateBackButton';
import { WeatherCard } from '../WeatherCard';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Diagram = () => {
	let navigate = useNavigate();
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.down(540));
	const smallScreen = useMediaQuery(theme.breakpoints.down(800));
	const { id }: any = useParams();

	const [listView, setListView] = useState<boolean>(false)

	const setApiParam = useDiagramsContext().getDiagramUrl;
	const {
		diagramLogs,
		diagramData,
		diagramLabel,
		diagramBackgroundcolor,
		diagramMonth,
		diagramPrec,
	} = useDiagramsContext();

	const [logs, setLogs] = useState<ILogs[]>(diagramLogs)
	const [temp, setTemp] = useState<number[]>(diagramData);
	const [labels, setLabels] = useState<string[]>(diagramLabel);
	const [color, setColor] = useState<any[] | any>(diagramBackgroundcolor);

	const diagramLength = diagramMonth.length;
	const findOld = diagramMonth.indexOf(id);
	const year: string = id.substring(0, 4);
	const month: any = getMonthName(id.substring(4, 6));

	const findMonth: any = diagramMonth.find((e) => e === id);

	/** Change to earlier month in diagram or back to last when at end */
	const nextMonth = () => {
		if (findOld === 0) return;
		if (findOld !== -1)
			return navigate(`/diagram/${diagramMonth[findOld - 1]}`);
	};

	/** Change to next month in diagram or back to first when at end */
	const prevMonth = () => {
		if (findOld === diagramLength - 1) return;
		if (findOld !== -1)
			return navigate(`/diagram/${diagramMonth[findOld + 1]}`);
	};

	const changeListView = (e:boolean) => {
		if(!listView){
			setListView(e)
			localStorage.setItem('historyView', e.toString())
		}else {
			setListView(e)
			localStorage.setItem('historyView', e.toString())
		} return
	}

	/** Sends the params to the diagram api to fetch the data for month */
	useEffect(() => {
		setApiParam(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	/** Updates the diagram when page is first visited or refreshed */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setTemp(diagramData);
		setLabels(diagramLabel);
		setColor(diagramBackgroundcolor);
		setLogs(diagramLogs)
	});

	useEffect(() => {
		const listView = localStorage.getItem('historyView')
		if(listView === 'false') setListView(false)
		else setListView(true)
	},[])

	/** Options for the diagram */
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: false,
				text: '',
			},
		},
	};

	/** Data for the diagram */
	const data = {
		type: 'line',
		labels,
		datasets: [
			{
				label: 'Temperatur',
				data: temp,
				backgroundColor: color,
				borderColor: 'rgba(0, 0, 0, 0.5',
				tension: 0.3,
				pointRadius: 6,
				borderWidth: 1,
			},
			{
				label: 'Nederbörd',
				data: diagramPrec,
				backgroundColor: 'rgb(0, 0, 204)',
				borderColor: '#0000CC',
				tension: 0.3,
				pointRadius: 2,
				borderWidth: 2,
			},
		],
	};

	return (
		<>
			{findMonth === undefined ? (
				<ErrorPage />
			) : (
				<>	
					<Grid container direction="column" className={classes.diagramContainer}>
						<Grid container direction="row" className={classes.header}>
							<Grid item container className={classes.titleContainer}>
								<NavigateBackButton page="/" />
								<Typography variant="h2" className={classes.pageTitle}>
									Historik
								</Typography>
							</Grid>
							<Grid item>
								<Link to="/create-log" className={classes.disableUnderline}>
									{mobile ? (
										<IconButton edge="end" className={classes.addIcon}>
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
						{smallScreen && <Divider className={classes.divider} />}
						<Grid item direction="row" className={classes.dateContainer}>
							<IconButton onClick={prevMonth} disabled={diagramLength <= 1}>
								<ArrowBackRounded
									className={
										diagramLength <= 1
											? classes.disabledArrowIcon
											: classes.arrowIcon
									}
								/>
							</IconButton>
							<Grid item container className={classes.date}>
								<Typography
									variant="h4"
									className={classes.dateText}
								>{`${month} ${year}`}</Typography>
							</Grid>
							<IconButton onClick={nextMonth} disabled={diagramLength <= 1}>
								<ArrowForwardRounded
									className={
										diagramLength <= 1
											? classes.disabledArrowIcon
											: classes.arrowIcon
									}
								/>
							</IconButton>
						</Grid>
						<Grid container direction='row' className={classes.diagramViewOptions}>
							<Typography align='right' className={classes.diagramViewOptionText}>Listvy:</Typography>
							<IconButton onClick={()=> changeListView(false)}>
								<ShowChartRounded />
							</IconButton>
							<IconButton onClick={()=> changeListView(true)}>
								<List />
							</IconButton>
						</Grid>
						{!listView 
						?
						<Grid container className={classes.diagram}>
							<Line options={options} data={data} />
						</Grid>
						:
						<Grid item container direction="column" className={classes.diagram}>
							{logs.map((d: ILogs) => (
								<Link
									key={d._id}
									to={`/log/${d.date}`}
									className={classes.disableUnderline}
								>
									<WeatherCard
										temp={parseInt(d.temperature)}
									date={{
										day: d.date.substring(6, 8).toString(),
										month: month,
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
						}
					</Grid>
				</>
			)}
		</>
	);
};

export default Diagram;
