import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IForecastCurrent } from '@core/services/forecast.service';

@Component({
    selector: 'app-forecast-current',
    templateUrl: './forecast-current.component.html',
    styleUrls: ['./forecast-current.component.scss']
})
export class ForecastCurrentComponent implements OnInit {

    @Input()
    currentForecast: IForecastCurrent;

    @Input()
    tempUnit;

    constructor() { }

    ngOnInit() {
    }
}
