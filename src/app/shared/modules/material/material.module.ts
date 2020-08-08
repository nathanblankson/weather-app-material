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
    MatRadioModule,
    MatSnackBarModule
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
        MatRadioModule,
        MatSnackBarModule
    ],
})
export class MaterialModule { }
