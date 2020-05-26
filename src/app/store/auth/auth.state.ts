import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';

import { defaultAuthStateModel, AuthStateModel } from './auth.state.model';
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
    loginRequest(ctx: StateContext<AuthStateModel>, action: LoginRequest) {
        ctx.setState({
            loading: true,
            loaded: false,
            failed: false,
            isAuthenticated: false,
            user: null
        });
        return this._authService.login(action.payload).pipe(
            map((user: any) => ctx.dispatch(new LoginSuccess(user))),
            catchError(
                err => ctx.dispatch(new LoginFailure(err))
            )
        );
    }

    @Action(LoginFailure)
    loginFailure(ctx: StateContext<AuthStateModel>, action: LoginFailure) {
        // TODO: set loading, loaded, failed
        console.log(action.error);
        return null;
    }

    @Action(LoginSuccess)
    loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
        // TODO: set loading, loaded, failed
        console.log(action.user);
        return null;
    }
}
