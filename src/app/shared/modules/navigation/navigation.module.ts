// Angular dependencies
import { NgModule } from '@angular/core';

// Local files
import { SharedModule } from '@shared/shared.module';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
    imports: [SharedModule],
    exports: [NavigationWrapperComponent],
    declarations: [NavigationWrapperComponent, NavListComponent],
})
export class NavigationModule { }
