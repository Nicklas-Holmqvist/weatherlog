import React, {
	useState,
	useContext,
	createContext,
	FunctionComponent,
	useEffect,
} from 'react';

import { useAuthContext } from './auth';
import { useLogsContext } from './logs';
import { getDiagramColor } from '../utils/getDiagramColor';
import { ILogs } from '../types/Logs';

export const DiagramContext = createContext<Context>(undefined!);

type Context = {
	getDiagramUrl: (e: any) => void;
	diagramData: number[];
	diagramLabel: string[];
	diagramBackgroundcolor: any[];
	diagramMonth: string[];
	diagramPrec: number[];
	diagramLogs: ILogs[];
};

export const DiagramProvider: FunctionComponent = ({ children }) => {
	const { isAuth } = useAuthContext();

	const { historyMonths } = useLogsContext();
	const [diagramLogs, setDiagramLogs] = useState<ILogs[]>([]);
	const [diagramMonth, setDiagramMonth] = useState<string[]>(historyMonths);
	const [diagramData, setDiagramData] = useState<number[]>([]);
	const [diagramLabel, setDiagramLabel] = useState<string[]>([]);
	const [diagramBackgroundcolor, setBackgroundcolor] = useState<any[]>([]);
	const [diagramPrec, setDiagramPrec] = useState<number[]>([]);

	/**
	 * Prepare the API-response and split it up to the necessary arrays to be viewed in the diagram
	 * @param e API-response
	 */
	const handlePrepareDiagramData = (e: ILogs[]) => {
		let data: number[] = [];
		let label: string[] = [];
		let color: any[] = [];
		let precipitation: number[] = [];

		for (let i = 0; i < e.length; i++) {
			data.push(parseInt(e[i].temperature));
			label.push(splitDate(e[i], 6, 8));
			color.push(getDiagramColor(parseInt(e[i].temperature))!);
			precipitation.push(Number(e[i].precipitation));
		}
		setDiagramData(data);
		setDiagramLabel(
			label.sort((a: any, b: any) => {
				return a - b;
			})
		);
		setBackgroundcolor(color);
		setDiagramPrec(precipitation);
	};

	/**
	 * Splits the date-string 8 digits, ex 20210101
	 * @param date string
	 * @param start where to start, after choosed digit
	 * @param end where to end, you want the last two, you choose 8 and get "01"
	 * @returns
	 */
	const splitDate = (date: ILogs, start: number, end: number) => {
		return date.date.substring(start, end);
	};

	useEffect(() => {
		if (!isAuth) {
			setDiagramData([]);
			setBackgroundcolor([]);
			setDiagramLabel([]);
			setDiagramLogs([]);
		}
	}, [isAuth]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setDiagramMonth(historyMonths);
	});

	const getDiagramUrl = (e: any) => {
		fetchDiagram(e);
	};

	/** Fetch all days in specific month */
	const fetchDiagram = async (e: any) => {
		await fetch(`/api/diagram/${e}`, { method: 'get' })
			.then(function (res) {
				if (res.status === 401) {
					console.log('Ingen inloggning!');
					return;
				}
				return res.json();
			})
			.then(function (data) {
				if (data === undefined) return;
				handlePrepareDiagramData(data);
				setDiagramLogs(data);
			})
			.catch(function (err) {
				console.error(err);
			});
	};

	return (
		<DiagramContext.Provider
			value={{
				getDiagramUrl,
				diagramData,
				diagramLabel,
				diagramBackgroundcolor,
				diagramMonth,
				diagramPrec,
				diagramLogs,
			}}
		>
			{children}
		</DiagramContext.Provider>
	);
};

export const useDiagramsContext = () => useContext<Context>(DiagramContext);
