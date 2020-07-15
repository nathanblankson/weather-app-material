import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatRadioModule
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatRadioModule
    ],
})
export class MaterialModule { }
