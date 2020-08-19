// Angular dependencies
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast-daily-card',
    templateUrl: './forecast-daily-card.component.html',
    styleUrls: ['./forecast-daily-card.component.scss'],
})
export class ForecastDailyCardComponent implements OnInit {
    @Input()
    public active: boolean;
    @Input()
    public day;

    constructor() { }

    ngOnInit() { }

    onClick() {
        console.log('card clicked');
    }
}
