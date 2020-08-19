// Angular dependencies
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

// Local files
import { SnackbarComponent } from '@shared/components/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private _snackbar: MatSnackBar) { }

    openSnackbar(message?: string, action?: string, config?: MatSnackBarConfig) {
        this._snackbar.openFromComponent(SnackbarComponent, { data: { message, action, config } });
    }

    closeSnackbar() {
        this._snackbar.dismiss();
    }
}
