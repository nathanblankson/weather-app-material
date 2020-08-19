// Angular dependencies
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast-current',
    templateUrl: './forecast-current.component.html',
    styleUrls: ['./forecast-current.component.scss']
})
export class ForecastCurrentComponent implements OnInit {
    @Input()
    public currentForecast: any;
    @Input()
    public location: any;

    constructor() { }

    ngOnInit() { }
}

