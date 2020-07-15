// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Local files
import { MaterialModule } from './modules/material/material.module';
import { FormatTemperaturePipe } from './pipes/format-temperature/format-temperature.pipe';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        // Modules
        CommonModule,
        RouterModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        // Pipes
        FormatTemperaturePipe
    ],
    declarations: [FormatTemperaturePipe]
})
export class SharedModule { }
