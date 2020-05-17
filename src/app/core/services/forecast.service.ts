import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private currentConditionsUrl: string = 'http://dataservice.accuweather.com/currentconditions/v1/';

    constructor(private _http: HttpClient) { }
}
