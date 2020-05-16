import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast-daily',
    templateUrl: './forecast-daily.component.html',
    styleUrls: ['./forecast-daily.component.scss']
})
export class ForecastDailyComponent implements OnInit {

    @Input()
    days;

    selectedItem = 1;

    constructor() { }

    ngOnInit() {
    }

}
