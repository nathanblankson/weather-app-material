export interface IWeather {
    weatherText: string;
    weatherDescription: string;
    icon?: string;
    currentTemp: number;
    minTemp: number;
    maxTemp: number;
    feelsLikeTemp: number;
    pressure: number;
    humidity: number;
    visibility: number;
    windSpeed: number;
    windDeg: number;
}
