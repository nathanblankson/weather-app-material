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
  ],
})
export class MaterialModule {}
