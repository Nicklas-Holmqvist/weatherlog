import { ILogs } from 'src/types/Logs';
import { dotToCommaConverter } from '.';
import getMonthName from './getMonthName';

export const getWarmestDay = (logs: ILogs[]) => {
	const array: { date: string; temp: number }[] = [];
	logs.forEach((log) => {
		array.push({ date: log?.date, temp: parseInt(log?.temperature) });
	});
	const warmestDayObject = array.reduce((a, b) => {
		return a.temp > b.temp ? a : b;
	});

	const year = warmestDayObject.date.substring(0, 4);
	const month = getMonthName(warmestDayObject.date.substring(4, 6));
	const day = warmestDayObject.date.substring(6, 8);

	return `${warmestDayObject.temp}°C (${day} ${month} ${year})`;
};

export const getColdestDay = (logs: ILogs[]) => {
	const array: { date: string; temp: number }[] = [];
	logs.forEach((log) => {
		array.push({ date: log?.date, temp: parseInt(log?.temperature) });
	});
	const coldestDayObject = array.reduce((a, b) => {
		return a.temp < b.temp ? a : b;
	});

	const year = coldestDayObject.date.substring(0, 4);
	const month = getMonthName(coldestDayObject.date.substring(4, 6));
	let day = coldestDayObject.date.substring(6, 8);

	if (day?.charAt(0) === '0') {
		day = day.substring(0).replace('0', '');
	}

	return `${coldestDayObject.temp}°C (${day} ${month} ${year})`;
};

export const getAverageTemp = (logs: ILogs[]) => {
	const tempArray: number[] = [];
	logs.forEach((log) => {
		tempArray.push(parseInt(log.temperature));
	});
	const total = tempArray.reduce((a, b) => a + b, 0);
	const average = total / logs.length;
	const averageRounded = Math.round(average * 10) / 10;
	const valueToSend = dotToCommaConverter(averageRounded.toString());
	return `${valueToSend}°C`;
};
