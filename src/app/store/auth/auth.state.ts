import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { defaultAuthStateModel, AuthStateModel } from './auth-state.model';
import { AuthService } from '@core/services/auth/auth.service';
import { LoginRequest, LoginFailure, LoginSuccess } from './auth.actions';

@State<AuthStateModel>({
    name: 'Auth',
    defaults: defaultAuthStateModel
})
@Injectable()
export class AuthState {
    constructor(private _authService: AuthService) { }

    @Action(LoginRequest)
    loginRequest({ patchState, dispatch }: StateContext<AuthStateModel>, action: LoginRequest) {
        patchState({
            loading: true
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
            loaded: true,
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
        dispatch(new Navigate(['/forecast']));
    }
}
