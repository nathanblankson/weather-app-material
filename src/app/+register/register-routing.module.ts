// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { RegisterComponent } from './register.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
