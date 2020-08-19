// Angular dependencies
import { NgModule } from '@angular/core';

// Local files
import { SharedModule } from '@shared/shared.module';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { ForecastSearchComponent } from './components/forecast-search/forecast-search.component';
import { ForecastCurrentComponent } from './components/forecast-current/forecast-current.component';
import { ForecastDailyComponent } from './components/forecast-daily/forecast-daily.component';
import { ForecastDailyCardComponent } from './components/forecast-daily-card/forecast-daily-card.component';
import { ForecastHourlyComponent } from './components/forecast-hourly/forecast-hourly.component';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        ForecastRoutingModule
    ],
    declarations: [
        ForecastComponent,
        ForecastSearchComponent,
        ForecastCurrentComponent,
        ForecastDailyComponent,
        ForecastDailyCardComponent,
        ForecastHourlyComponent
    ]
})
export class ForecastModule { }
