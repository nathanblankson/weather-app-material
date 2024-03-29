// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { ForecastComponent } from './forecast.component';

const routes: Routes = [
    {
        path: '',
        component: ForecastComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ForecastRoutingModule { }
