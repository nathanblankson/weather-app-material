import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ForecastSelectors, ForecastStateModel } from '@store/forecast';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ForecastComponent implements OnInit {
    @Select(ForecastSelectors.currentForecast) currentForecast$: Observable<ForecastStateModel>;
    @Select(ForecastSelectors.dailyForecast) dailyForecast$: Observable<ForecastStateModel>;
    @Select(ForecastSelectors.location) location$: Observable<ForecastStateModel>;

    constructor() { }

    ngOnInit() { }
}
