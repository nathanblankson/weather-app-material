// Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local files
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
