import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { AuthService } from '@core/services/auth/auth.service';
import { defaultAuthState, AuthStateModel } from './auth-state.model';
import { LoginRequest, LoginFailure, LoginSuccess, Logout, RegisterRequest, RegisterFailure, RegisterSuccess } from './auth.actions';
import { SnackbarOpen } from '../snackbar';

@State<AuthStateModel>({
    name: 'Auth',
    defaults: defaultAuthState
})
@Injectable()
export class AuthState {
    constructor(private _authService: AuthService) { }

    @Action(LoginRequest)
    loginRequest({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: LoginRequest) {
        patchState({
            loading: true,
            loaded: false,
            failed: false
        });
        return this._authService.login(payload.data).subscribe(
            res => dispatch(new LoginSuccess({ user: res.user, token: res.token })),
            err => dispatch(new LoginFailure({ error: err.error.message }))
        )
    }

    @Action(LoginFailure)
    loginFailure({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: LoginFailure): void {
        patchState({
            loading: false,
            loaded: false,
            failed: true
        });
        dispatch(new SnackbarOpen({ message: payload.error, action: 'CLOSE' }));
    }

    @Action(LoginSuccess)
    loginSuccess({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: LoginSuccess) {
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            isAuthenticated: true,
            user: payload.user,
            token: payload.token
        });
        dispatch(new Navigate(['/forecast']));
    }

    @Action(RegisterRequest)
    registerRequest({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: RegisterRequest) {
        patchState({
            loading: true,
            loaded: false,
            failed: false
        });
        return this._authService.register(payload.data).subscribe(
            res => dispatch(new RegisterSuccess({ user: res.user, token: res.token })),
            err => dispatch(new RegisterFailure(err))
        )
    }

    @Action(RegisterFailure)
    registerFailure({ patchState }: StateContext<AuthStateModel>, { payload }: RegisterFailure) {
        patchState({
            loading: false,
            loaded: false,
            failed: true
        });
        console.log(payload.error);
        return null;
    }

    @Action(RegisterSuccess)
    registerSuccess({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: RegisterSuccess) {
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            isAuthenticated: true,
            user: payload.user,
            token: payload.token
        });
        dispatch(new Navigate(['/forecast']));
    }

    @Action(Logout)
    logout({ setState, dispatch }: StateContext<AuthStateModel>) {
        setState(defaultAuthState);
        dispatch(new Navigate(['/login']));
    }
}
