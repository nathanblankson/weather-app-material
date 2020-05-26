import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appState } from '@store/index';
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
        HttpClientModule,
        NgxsModule.forRoot(appState),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
