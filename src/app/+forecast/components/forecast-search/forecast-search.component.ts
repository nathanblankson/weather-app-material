import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { ForecastRequest } from '@store/forecast';

@Component({
    selector: 'app-forecast-search',
    templateUrl: './forecast-search.component.html',
    styleUrls: ['./forecast-search.component.scss']
})
export class ForecastSearchComponent implements OnInit {
    forecastSearchForm: FormGroup;

    options: string[] = ['London, GB', 'Athens, GR', 'Moscow, RU'];
    filteredOptions$: Observable<string[]>;

    constructor(private _fb: FormBuilder, private _store: Store) { }

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
        console.log(query);
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
