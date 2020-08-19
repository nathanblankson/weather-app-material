// Angular dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// Other dependencies
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Local files
import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private forecastApi = environment.apiServer + '/forecast';

    constructor(private _http: HttpClient) { }

    getForecast(query: string) {
        const params = new HttpParams()
            .set('q', query);
        return this._http.get(`${this.forecastApi}`, { params })
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }

    getForecastMock(query: string) {
        const url = `assets/mock-data/openweather/one-call-${query.toLowerCase()}.json`;
        return this._http.get(url)
            .pipe(
                map(data => data),
                catchError(err => throwError(err))
            );
    }
}



