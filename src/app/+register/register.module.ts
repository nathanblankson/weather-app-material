import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '@shared/modules/material/material.module';


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class RegisterModule { }
