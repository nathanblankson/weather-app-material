import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/modules/material/material.module';
import { ForecastComponent } from './forecast.component';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { ForecastRoutingModule } from './forecast-routing.module';
import { DailyCardComponent } from './components/daily-card/daily-card.component';

@NgModule({
  declarations: [ForecastComponent, DailyCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NavigationModule,
    ForecastRoutingModule,
  ],
})
export class ForecastModule {}
