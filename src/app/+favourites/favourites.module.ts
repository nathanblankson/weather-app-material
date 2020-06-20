// Angular dependencies
import { NgModule } from '@angular/core';

// Local files
import { SharedModule } from '@shared/shared.module';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { FavouriteLocationsComponent } from './components/favourite-locations/favourite-locations.component';
import { LocationCardComponent } from './components/favourite-locations/location-card/location-card.component';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        FavouritesRoutingModule
    ],
    declarations: [
        FavouritesComponent,
        FavouriteLocationsComponent,
        LocationCardComponent
    ]
})
export class FavouritesModule { }
