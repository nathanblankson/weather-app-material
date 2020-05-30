import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private openWeatherKey = environment.openWeatherKey
    private openWeatherApi = 'http://api.openweathermap.org/data/2.5';

    constructor(private _http: HttpClient) { }

    getCurrentWeather(query: string) {
        const params = new HttpParams()
            .set('q', query)
            .set('appid', this.openWeatherKey);
        return this._http.get(`${this.openWeatherApi}/weather`, { params })
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }

    getCurrentWeatherMock(query: string) {
        const url = `assets/mock-data/openweather/current-${query.toLowerCase()}.json`;
        return this._http.get(url)
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }

    getForecast(query: string) {
        const params = new HttpParams()
            .set('q', query)
            .set('appid', this.openWeatherKey);
        return this._http.get(`${this.openWeatherApi}/forecast`, { params })
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }

    getForecastMock() {
        const url = `assets/mock-data/openweather/5-day-forecast-response.json`;
        return this._http.get(url)
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }
}



