// Angular depedencies
import { NgModule } from '@angular/core';

// Local files
import { SharedModule } from '@shared/shared.module';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        SettingsRoutingModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
