import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { NavigationModule } from '@shared/modules/navigation/navigation.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, FavouritesRoutingModule, NavigationModule],
})
export class FavouritesModule {}
