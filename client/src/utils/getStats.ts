import { ILogs } from 'src/types/Logs';
import { dotToCommaConverter } from './converters';
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
	let day = warmestDayObject.date.substring(6, 8);

	if (day?.charAt(0) === '0') {
		day = day.substring(0).replace('0', '');
	}

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

export const getWindiestDay = (logs: ILogs[]) => {
	const array: { date: string; windSpeed: number }[] = [];
	logs.forEach((log) => {
		if (log.windSpeed === '' || log.windSpeed === undefined) {
			return;
		} else {
			array.push({ date: log?.date, windSpeed: parseInt(log?.windSpeed) });
		}
	});
	const windiestDayObject = array.reduce((a, b) => {
		return a.windSpeed > b.windSpeed ? a : b;
	});

	const year = windiestDayObject.date.substring(0, 4);
	const month = getMonthName(windiestDayObject.date.substring(4, 6));
	let day = windiestDayObject.date.substring(6, 8);

	if (day?.charAt(0) === '0') {
		day = day.substring(0).replace('0', '');
	}

	return `${windiestDayObject.windSpeed} m/s (${day} ${month} ${year})`;
};

export const getRainiestDay = (logs: ILogs[]) => {
	const array: { date: string; precipitation: number }[] = [];
	logs.forEach((log) => {
		if (log.precipitation === '' || log.precipitation === undefined) {
			return;
		} else {
			array.push({
				date: log?.date,
				precipitation: parseInt(log?.precipitation),
			});
		}
	});
	const rainiestDayObject = array.reduce((a, b) => {
		return a.precipitation > b.precipitation ? a : b;
	});

	const year = rainiestDayObject.date.substring(0, 4);
	const month = getMonthName(rainiestDayObject.date.substring(4, 6));
	let day = rainiestDayObject.date.substring(6, 8);

	if (day?.charAt(0) === '0') {
		day = day.substring(0).replace('0', '');
	}

	return `${rainiestDayObject.precipitation} mm (${day} ${month} ${year})`;
};

export const getTotalPrecipitation = (logs: ILogs[]) => {
	const precipitationArray: number[] = [];
	logs.forEach((log) => {
		precipitationArray.push(parseInt(log.precipitation));
	});
	const total = precipitationArray.reduce((a, b) => a + b, 0);
	const totalRounded = Math.round(total * 10) / 10;
	const valueToSend = dotToCommaConverter(totalRounded.toString());
	return `${valueToSend} mm`;
};

export const getAveragePrecipitation = (logs: ILogs[]) => {
	const precipitationArray: number[] = [];
	logs.forEach((log) => {
		precipitationArray.push(parseInt(log.precipitation));
	});
	const total = precipitationArray.reduce((a, b) => a + b, 0);
	const average = total / logs.length;
	const averageRounded = Math.round(average * 10) / 10;
	const valueToSend = dotToCommaConverter(averageRounded.toString());
	return `${valueToSend} mm`;
};

export const getNumberOfSunnyDays = (logs: ILogs[]) => {
	const sunnyDaysArray: any[] = [];
	logs.forEach((log) => {
		if (log.weather === 'sun') {
			sunnyDaysArray.push(log);
		}
	});
	const total = sunnyDaysArray.length;
	return `${total} dagar`;
};
