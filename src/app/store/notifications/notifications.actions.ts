import { MatSnackBarConfig } from '@angular/material';

const NotificationsActionTypes = {
    SNACKBAR_OPEN: '[Notifications] Snackbar Open',
    SNACKBAR_CLOSE: '[Notifications] Snackbar Close',
}

export class SnackbarOpen {
    static readonly type = NotificationsActionTypes.SNACKBAR_OPEN;
    constructor(public payload: { message?: string, action?: string, config?: MatSnackBarConfig }) { }
}

export class SnackbarClose {
    static readonly type = NotificationsActionTypes.SNACKBAR_CLOSE;
}
