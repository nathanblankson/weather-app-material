import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { IWeather, ILocation } from '@core/models';

export interface IForecastCurrent {
    weather: IWeather,
    location: ILocation,
    dt: Date,
}

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private openWeatherKey = environment.openWeatherKey
    private openWeatherApi = 'http://api.openweathermap.org/data/2.5/';

    constructor(private _http: HttpClient) { }

    getCurrentWeather(params: { cityName: string, state: string, countryCode: string }) {
        const { cityName, state, countryCode } = params;
        return this._http.get(`${this.openWeatherApi}weather?q=${cityName},${state},${countryCode}&appid=${this.openWeatherKey}`)
            .pipe(
                map(data => this.formatCurrentWeatherData(data)),
                catchError(err => throwError(err))
            );
    }

    getCurrentWeatherMock(params: { cityName: string }) {
        const { cityName } = params;
        const url = `assets/mock-data/openweather/current-${cityName.toLowerCase()}.json`;
        return this._http.get(url)
            .pipe(
                map(data => this.formatCurrentWeatherData(data)),
                catchError(err => throwError(err))
            );
    }

    private formatCurrentWeatherData = (data): IForecastCurrent => {

        const formattedResponse: IForecastCurrent = {
            weather: {
                weatherText: data.weather[0].main,
                weatherDescription: data.weather[0].description,
                icon: data.weather[0].icon,
                currentTemp: data.main.temp,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                feelsLikeTemp: data.main.feels_like,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                visibility: data.visibility,
                windSpeed: data.wind.speed,
                windDeg: data.wind.deg
            },
            location: {
                cityName: data.name,
                country: data.sys.country
            },
            dt: data.dt
        };

        return formattedResponse;
    };
}



