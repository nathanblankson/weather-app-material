import { State, Action, StateContext } from '@ngxs/store';
import { defaultNotificationsState, NotificationsStateModel } from './notifications-state.model';
import { SnackbarOpen, SnackbarClose } from './notifications.actions';
import { NotificationService } from '../../core/services/notification/notification.service';

@State<NotificationsStateModel>({
    name: 'Notifications',
    defaults: defaultNotificationsState
})
export class NotificationsState {
    constructor(private _notificationsService: NotificationService) { }

    @Action(SnackbarOpen)
    snackbarOpen({ patchState }: StateContext<NotificationsStateModel>, action: SnackbarOpen) {
        patchState({
            showSnackbar: true
        });
        this._notificationsService.openSnackbar(action.payload.message, action.payload.action, action.payload.config);
    }

    @Action(SnackbarClose)
    snackbarClose({ patchState }: StateContext<NotificationsStateModel>, action: SnackbarClose) {
        patchState({
            showSnackbar: false
        })
        this._notificationsService.closeSnackbar();
    }
}
