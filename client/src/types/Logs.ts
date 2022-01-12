export interface ILogs {
        _id?: string
        airFeeling: string
        airpressure: string
        date: string
        description: string
        humidity: string
        precipitation: string
        temperature: string
        user: string
        windDirection: string
        windSpeed: string
        weather: string
}

export interface ILogDate {
        day: number,
        month: number,
        year: number
}
