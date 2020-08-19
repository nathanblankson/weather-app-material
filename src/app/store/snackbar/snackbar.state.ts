import { State, Action, StateContext } from '@ngxs/store';
import { defaultSnackbarState, SnackbarStateModel } from './snackbar-state.model';
import { SnackbarOpen, SnackbarClose } from './snackbar.actions';
import { SnackbarService } from '../../core/services/snackbar/snackbar.service';

@State<SnackbarStateModel>({
    name: 'Snackbar',
    defaults: defaultSnackbarState
})
export class SnackbarState {
    constructor(private _snackbarService: SnackbarService) { }

    @Action(SnackbarOpen)
    snackbarOpen({ patchState }: StateContext<SnackbarStateModel>, action: SnackbarOpen) {
        patchState({
            showSnackbar: true
        });
        this._snackbarService.openSnackbar(action.payload.message, action.payload.action, action.payload.config);
    }

    @Action(SnackbarClose)
    snackbarClose({ patchState }: StateContext<SnackbarStateModel>, action: SnackbarClose) {
        patchState({
            showSnackbar: false
        })
        this._snackbarService.closeSnackbar();
    }
}
