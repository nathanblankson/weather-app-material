import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { MaterialModule } from '../material/material.module';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [NavigationWrapperComponent, NavListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavigationWrapperComponent],
})
export class NavigationModule {}
