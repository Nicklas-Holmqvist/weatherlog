import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';
import {
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import {
	AddRounded,
	ArrowBackRounded,
	ArrowForwardRounded,
	Home,
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

import theme from 'src/theme';
import useStyles from './style';
import getMonthName from '../../utils/getMonthName';
import { NavigateBackButton } from '../NavigateBackButton';

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
	const { id }: any = useParams();

	const setApiParam = useDiagramsContext().getDiagramUrl;
	const {
		diagramData,
		diagramLabel,
		diagramBackgroundcolor,
		diagramMonth,
		diagramPrec,
	} = useDiagramsContext();

	const [temp, setTemp] = useState<number[]>(diagramData);
	const [labels, setLabels] = useState<string[]>(diagramLabel);
	const [color, setColor] = useState<any[] | any>(diagramBackgroundcolor);

	const diagramLength = diagramMonth.length;
	const findOld = diagramMonth.indexOf(id);
	const year: string = id.substring(0, 4);
	const month: any = getMonthName(id.substring(4, 6));

	/** Change to earlier month in diagram or back to last when at end */
	const nextMonth = () => {
		if (findOld === 0)
			return navigate(`/diagram/${diagramMonth[diagramLength - 1]}`);
		if (findOld !== -1)
			return navigate(`/diagram/${diagramMonth[findOld - 1]}`);
	};

	/** Change to next month in diagram or back to first when at end */
	const prevMonth = () => {
		if (findOld === diagramLength - 1)
			return navigate(`/diagram/${diagramMonth[1]}`);
		if (findOld !== -1)
			return navigate(`/diagram/${diagramMonth[findOld + 1]}`);
	};

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
	});

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
		<Grid container direction="column" className={classes.diagramContainer}>
			<Grid container direction="row" className={classes.header}>
				<Grid item container className={classes.titleContainer}>
					<NavigateBackButton page="/" />
					<Typography variant="h2" className={classes.pageTitle}>
						Historik
					</Typography>
				</Grid>
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
						<Typography variant="h4">{`${month} ${year}`}</Typography>
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
				<Grid item>
					<Link to="/create-log" className={classes.disableUnderline}>
						{mobile ? (
							<IconButton>
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
			<Grid container className={classes.diagram}>
				<Line options={options} data={data} />
			</Grid>
		</Grid>
	);
};

export default Diagram;
