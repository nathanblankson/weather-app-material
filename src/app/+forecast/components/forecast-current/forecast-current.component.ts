import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-forecast-current',
    templateUrl: './forecast-current.component.html',
    styleUrls: ['./forecast-current.component.scss']
})
export class ForecastCurrentComponent implements OnInit {

    @Input()
    currentForecast;

    @Input()
    tempUnit;

    constructor() { }

    ngOnInit() {
    }
}
