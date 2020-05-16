import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material/material.module';
import { ForecastComponent } from './forecast.component';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { ForecastRoutingModule } from './forecast-routing.module';
import { DailyCardComponent } from './components/forecast-daily/daily-card/daily-card.component';
import { ForecastInfoComponent } from './components/forecast-info/forecast-info.component';
import { ForecastHourlyComponent } from './components/forecast-hourly/forecast-hourly.component';
import { ForecastDailyComponent } from './components/forecast-daily/forecast-daily.component';

@NgModule({
    declarations: [ForecastComponent, DailyCardComponent, ForecastInfoComponent, ForecastHourlyComponent, ForecastDailyComponent],
    imports: [
        CommonModule,
        MaterialModule,
        NavigationModule,
        ForecastRoutingModule,
    ],
})
export class ForecastModule { }
