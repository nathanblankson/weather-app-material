import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast-daily',
    templateUrl: './forecast-daily.component.html',
    styleUrls: ['./forecast-daily.component.scss']
})
export class ForecastDailyComponent implements OnInit {

    @Input()
    dailyForecast;

    // TODO: Requires paid access for hourly breakdown
    selectedIndex = 0;

    constructor() { }

    ngOnInit() {

    }
}
