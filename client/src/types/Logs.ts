export interface ILogs {
        _id?: String
        airFeeling: String
        airpressure: String
        date: String
        description: String
        humidity: String
        precipitation: String
        temperature: string
        user: String
        windDirection: String
        windSpeed: String
        weather: String
}

export interface ILogDate {
        day: number,
        month: number,
        year: number
}
