// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { AuthGuard } from '@core/guards/auth/auth.guard';
import { IsLoggedGuard } from '@core/guards/is-logged/is-logged.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => import('./+login/login.module').then(mod => mod.LoginModule),
        canActivate: [IsLoggedGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./+register/register.module').then(mod => mod.RegisterModule),
        canActivate: [IsLoggedGuard]
    },
    {
        path: 'forecast',
        loadChildren: () => import('./+forecast/forecast.module').then(mod => mod.ForecastModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'favourites',
        loadChildren: () => import('./+favourites/favourites.module').then(mod => mod.FavouritesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        loadChildren: () => import('./+settings/settings.module').then(mod => mod.SettingsModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
