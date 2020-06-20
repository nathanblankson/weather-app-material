import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AuthService } from '@core/services/auth/auth.service';
import { defaultAuthState, AuthStateModel } from './auth-state.model';
import { LoginRequest, LoginFailure, LoginSuccess, Logout, RegisterRequest, RegisterFailure, RegisterSuccess } from './auth.actions';

@State<AuthStateModel>({
    name: 'Auth',
    defaults: defaultAuthState
})
@Injectable()
export class AuthState {
    constructor(private _authService: AuthService) { }

    @Action(LoginRequest)
    loginRequest({ patchState, dispatch }: StateContext<AuthStateModel>, action: LoginRequest) {
        patchState({
            loading: true,
            loaded: false,
            failed: false
        });
        return this._authService.login(action.payload.data).subscribe(
            res => dispatch(new LoginSuccess({ user: res.user, token: res.token })),
            err => dispatch(new LoginFailure(err))
        )
    }

    @Action(LoginFailure)
    loginFailure({ patchState }: StateContext<AuthStateModel>, action: LoginFailure) {
        patchState({
            loading: false,
            loaded: false,
            failed: true
        });
        console.log(action.payload.error);
        return null;
    }

    @Action(LoginSuccess)
    loginSuccess({ patchState, dispatch }: StateContext<AuthStateModel>, action: LoginSuccess) {
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            isAuthenticated: true,
            user: action.payload.user,
            token: action.payload.token
        });
        localStorage.setItem('token', action.payload.token);
        dispatch(new Navigate(['/forecast']));
    }

    @Action(RegisterRequest)
    registerRequest({ patchState, dispatch }: StateContext<AuthStateModel>, action: RegisterRequest) {
        patchState({
            loading: true,
            loaded: false,
            failed: false
        });
        return this._authService.register(action.payload.data).subscribe(
            res => dispatch(new RegisterSuccess({ user: res.user, token: res.token })),
            err => dispatch(new RegisterFailure(err))
        )
    }

    @Action(RegisterFailure)
    registerFailure({ patchState }: StateContext<AuthStateModel>, action: RegisterFailure) {
        patchState({
            loading: false,
            loaded: false,
            failed: true
        });
        console.log(action.payload.error);
        return null;
    }

    @Action(RegisterSuccess)
    registerSuccess({ patchState, dispatch }: StateContext<AuthStateModel>, action: RegisterSuccess) {
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            isAuthenticated: true,
            user: action.payload.user,
            token: action.payload.token
        });
        dispatch(new Navigate(['/forecast']));
    }

    @Action(Logout)
    logout({ setState, dispatch }: StateContext<AuthStateModel>) {
        setState(defaultAuthState);
        dispatch(new Navigate(['/login']));
    }
}
