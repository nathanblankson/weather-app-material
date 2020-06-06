import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { ForecastRequest, ForecastSelectors, ForecastStateModel } from '@store/forecast';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ForecastComponent implements OnInit {
    forecastSearchForm: FormGroup;

    options: string[] = ['London, GB', 'Athens, GR', 'Moscow, RU'];
    filteredOptions$: Observable<string[]>;

    @Select(ForecastSelectors.currentForecast) currentForecast$: Observable<ForecastStateModel>;
    @Select(ForecastSelectors.dailyForecast) dailyForecast$: Observable<ForecastStateModel>;

    constructor(private _store: Store, private _fb: FormBuilder) { }

    ngOnInit() {
        this.forecastSearchForm = this.initForm();
        this.filteredOptions$ = this.forecastSearchForm.controls.location.valueChanges
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
