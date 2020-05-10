import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@shared/modules/material/material.module';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { ForecastModule } from '@forcast/forecast.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NavigationModule,
    ForecastModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
