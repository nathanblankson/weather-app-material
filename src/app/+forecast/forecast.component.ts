import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { ForecastRequest, ForecastState, ForecastSelectors } from '@store/forecast';
import { ForecastStateModel } from '@store/forecast/forecast-state.model';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ForecastComponent implements OnInit {
    days = [
        {
            date: 'Tue 30',
            icon: 'Icon',
            temp: { high: 27, low: 20 },
            summary: 'Sunny',
        },
        {
            date: 'Wed 1',
            icon: 'Icon',
            temp: { high: 31, low: 20 },
            summary: 'Partly Sunny',
        },
        {
            date: 'Thu 2',
            icon: 'Icon',
            temp: { high: 25, low: 19 },
            summary: 'Mostly Cloudy',
        },
        {
            date: 'Fri 3',
            icon: 'Icon',
            temp: { high: 30, low: 22 },
            summary: 'Sunny',
        },
        {
            date: 'Sat 4',
            icon: 'Icon',
            temp: { high: 30, low: 17 },
            summary: 'Sunny',
        },
        // {
        //     date: 'Sun 5',
        //     icon: 'Icon',
        //     temp: { high: 24, low: 14 },
        //     summary: 'Sunny',
        // },
        // {
        //     date: 'Mon 6',
        //     icon: 'Icon',
        //     temp: { high: 25, low: 15 },
        //     summary: 'Sunny',
        // },
    ];

    forecastSearchForm: FormGroup;

    options: string[] = ['London, GB', 'Athens, GR', 'Moscow, RU'];
    filteredOptions: Observable<string[]>;

    // currentForecast;
    dailyForecast;

    currentForecast: Observable<any>;

    constructor(private _store: Store, private _fb: FormBuilder) { }

    ngOnInit() {
        this.forecastSearchForm = this.initForm();
        this.filteredOptions = this.forecastSearchForm.controls.location.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
        this.currentForecast = this._store.select(ForecastSelectors.currentForecast);
    }

    onChangeLocation() {
        if (this.forecastSearchForm.invalid) {
            return;
        }
        const query: string = this.forecastSearchForm.get('location').value.replace(/\s*,\s*/g, ",");
        this._store.dispatch(new ForecastRequest({ data: query }));
    }

    private initForm(): FormGroup {
        return this._fb.group({
            location: ["", Validators.required],
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
