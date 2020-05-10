import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NavigationWrapperComponent, NavListComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavigationWrapperComponent],
})
export class NavigationModule {}
