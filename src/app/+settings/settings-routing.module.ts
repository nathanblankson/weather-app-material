// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule { }
