import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-forecast-current',
    templateUrl: './forecast-current.component.html',
    styleUrls: ['./forecast-current.component.scss']
})
export class ForecastCurrentComponent implements OnInit {

    @Input()
    currentForecast: any;

    @Input()
    tempUnit;

    constructor() { }

    ngOnInit() {
        console.log(this.currentForecast);
        // this.currentForecast.subscribe((res) => {
        //     console.log(res);
        // });
    }
}
