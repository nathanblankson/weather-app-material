import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-forecast-current',
    templateUrl: './forecast-current.component.html',
    styleUrls: ['./forecast-current.component.scss']
})
export class ForecastCurrentComponent implements OnInit {

    private _currentForecast = new BehaviorSubject<any>({});

    @Input()
    set currentForecast(value) {
        this._currentForecast.next(value);
        console.log(this._currentForecast);
    }

    get currentForecast() {
        return this._currentForecast.getValue();
    }

    constructor() { }

    ngOnInit() {
    }

}
