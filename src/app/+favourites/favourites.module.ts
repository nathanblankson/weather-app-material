import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';
import { FavouriteLocationsComponent } from './components/favourite-locations/favourite-locations.component';
import { LocationCardComponent } from './components/favourite-locations/location-card/location-card.component';

@NgModule({
  declarations: [FavouritesComponent, FavouriteLocationsComponent, LocationCardComponent],
  imports: [CommonModule, FavouritesRoutingModule, NavigationModule],
})
export class FavouritesModule {}
