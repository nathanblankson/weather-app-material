// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { FavouritesComponent } from './favourites.component';

const routes: Routes = [
    {
        path: '',
        component: FavouritesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FavouritesRoutingModule { }
