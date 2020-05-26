import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'

import { ForecastService } from '@core/services/forecast/forecast.service';

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

    currentForecast;
    dailyForecast;

    constructor(private _forecastService: ForecastService, private _fb: FormBuilder, private _http: HttpClient) { }

    ngOnInit() {
        this.forecastSearchForm = this.initForm();
        this.filteredOptions = this.forecastSearchForm.controls.location.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    onChangeLocation() {
        if (this.forecastSearchForm.invalid) {
            return;
        }
        const query: string = this.forecastSearchForm.get('location').value.replace(/\s*,\s*/g, ",");

        // Get the current weather data
        // this._forecastService.getCurrentWeather(query).subscribe((res) => {
        //     this.currentForecast = res;
        //     console.log(res);
        // });

        // this._forecastService.getCurrentWeatherMock({ cityName }).subscribe((res) => {
        //     this.currentForecast = res;
        //     console.log(res);
        // });
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
