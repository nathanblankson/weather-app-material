// Angular dependencies
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forecast-hourly',
    templateUrl: './forecast-hourly.component.html',
    styleUrls: ['./forecast-hourly.component.scss']
})
export class ForecastHourlyComponent implements OnInit {
    public showSummary = true;

    constructor() { }

    ngOnInit() {
    }

    summaryClicked() {
        this.showSummary = true;
    }

    detailsClicked() {
        this.showSummary = false;
    }
}
