import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private snackbar: MatSnackBar) { }

    openSnackbar(message?: string, action?: string, config?: MatSnackBarConfig) {
        this.snackbar.open(message, action, config);
    }

    closeSnackbar() {
        this.snackbar.dismiss();
    }
}
