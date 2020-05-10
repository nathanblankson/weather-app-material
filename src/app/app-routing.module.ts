import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forecast',
    loadChildren: './+forecast/forecast.module#ForecastModule',
  },
  {
    path: 'settings',
    loadChildren: './+settings/settings.module#SettingsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
