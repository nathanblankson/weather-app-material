import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, count } from 'rxjs/operators'
import { ForecastService } from '@core/services/forecast.service';

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

    forecastForm: FormGroup;

    options: string[] = ['London, UK', 'New York, USA', 'Moscow, RU'];
    filteredOptions: Observable<string[]>;

    constructor(private _forecastService: ForecastService, private fb: FormBuilder) { }

    ngOnInit() {
        this.initForm();
    }

    onChangeLocation() {
        if (this.forecastForm.invalid) {
            return;
        }
        const query: string = this.forecastForm.get('location').value;
        const [cityName, state, countryCode] = query.split(',');
        const res = this._forecastService.getCurrentWeather({ cityName, state, countryCode });
        console.log(res);
    }

    private initForm() {
        this.forecastForm = this.fb.group({
            location: ["", Validators.required],
        });

        this.filteredOptions = this.forecastForm.controls.location.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
