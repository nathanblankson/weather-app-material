import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './+login/login.module#LoginModule'
    },
    {
        path: 'forecast',
        loadChildren: './+forecast/forecast.module#ForecastModule',
    },
    {
        path: 'favourites',
        loadChildren: './+favourites/favourites.module#FavouritesModule',
    },
    {
        path: 'settings',
        loadChildren: './+settings/settings.module#SettingsModule',
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
