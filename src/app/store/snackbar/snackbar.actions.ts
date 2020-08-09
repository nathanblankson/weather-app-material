import { MatSnackBarConfig } from '@angular/material';

const SnackbarActionTypes = {
    SNACKBAR_OPEN: '[Snackbar] Snackbar Open',
    SNACKBAR_CLOSE: '[Snackbar] Snackbar Close',
}

export class SnackbarOpen {
    static readonly type = SnackbarActionTypes.SNACKBAR_OPEN;
    constructor(public payload: { message?: string, action?: string, config?: MatSnackBarConfig }) { }
}

export class SnackbarClose {
    static readonly type = SnackbarActionTypes.SNACKBAR_CLOSE;
}
