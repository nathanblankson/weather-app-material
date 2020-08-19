// Angular dependencies
import { NgModule } from '@angular/core';

// Local files
import { SharedModule } from '@shared/shared.module';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { FavouriteLocationsComponent } from './components/favourite-locations/favourite-locations.component';
import { FavouriteLocationCardComponent } from './components/favourite-location-card/favourite-location-card.component';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        FavouritesRoutingModule
    ],
    declarations: [
        FavouritesComponent,
        FavouriteLocationsComponent,
        FavouriteLocationCardComponent
    ]
})
export class FavouritesModule { }
