import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards/auth/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './+login/login.module#LoginModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'forecast',
        loadChildren: './+forecast/forecast.module#ForecastModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'favourites',
        loadChildren: './+favourites/favourites.module#FavouritesModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'settings',
        loadChildren: './+settings/settings.module#SettingsModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'forecast',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
