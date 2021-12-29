export interface Logs {
        airFeeling: String
        airpressure: String
        date: String
        description: String
        humidity: String
        precipitation: String
        temperature: String
        user: String
        windDirection: String
        windSpeed: String
        weather: String
}

export interface LogDate {
        day: number,
        month: number,
        year: number
}

export enum Month {
        Jan = 1,
        Feb = 2,
        Mar = 3,
        Apr = 4,
        Maj = 5,
        Jun = 6,
        Jul = 7,
        Aug = 8,
        Sep = 9,
        Okt = 10,
        Nov = 11,
        Dec = 12,
}