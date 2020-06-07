import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules/material/material.module';
import { ForecastComponent } from './forecast.component';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { ForecastRoutingModule } from './forecast-routing.module';
import { DailyCardComponent } from './components/forecast-daily/daily-card/daily-card.component';
import { ForecastCurrentComponent } from './components/forecast-current/forecast-current.component';
import { ForecastHourlyComponent } from './components/forecast-hourly/forecast-hourly.component';
import { ForecastDailyComponent } from './components/forecast-daily/forecast-daily.component';
import { ForecastSearchComponent } from './components/forecast-search/forecast-search.component';

@NgModule({
    declarations: [ForecastComponent, DailyCardComponent, ForecastCurrentComponent, ForecastHourlyComponent, ForecastDailyComponent, ForecastSearchComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        NavigationModule,
        ForecastRoutingModule,
    ],
})
export class ForecastModule { }
