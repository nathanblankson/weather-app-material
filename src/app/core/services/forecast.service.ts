import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { tap, map } from 'rxjs/operators';

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
        return this._http.get(`${this.openWeatherApi}weather?q=${cityName},${state},${countryCode}&appid=${this.openWeatherKey}`).pipe(
            tap(
                data => data,
                error => console.log(error)
            )
        )
    }

    getCurrentWeatherMock(params: { cityName: string }) {
        const { cityName } = params;
        const url = `assets/mock-data/openweather/current-${cityName.toLowerCase()}.json`;
        return this._http.get(url).pipe(
            tap(
                data => data,
                error => console.log(error)
            )
        )
    }

    // private formatData(data) {
    //     const formattedResponse = {
    //         weather: {
    //             main: data.weather[0].main,
    //             description: data.weather[0].description,
    //             icon: data.weather[0].icon
    //         },
    //         main: data.main,
    //         visibility: data.visibility,
    //         wind: data.wind,
    //         dt: data.dt,
    //         location: {
    //             name: data.name,
    //             country: data.sys.country
    //         }
    //     };
    //     return formattedResponse;
    // }
}



