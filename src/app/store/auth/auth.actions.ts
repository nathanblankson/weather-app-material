import { AuthDTO, User } from '@core/models';

const AuthActionTypes = {
    LOGIN_REQUEST: '[Auth] Login Request',
    LOGIN_FAILURE: '[Auth] Login Failure',
    LOGIN_SUCCESS: '[Auth] Login Success',
}

export class LoginRequest {
    static readonly type = AuthActionTypes.LOGIN_REQUEST;
    constructor(public payload: { data: AuthDTO }) { }
}

export class LoginFailure {
    static readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoginSuccess {
    static readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { user: User, token: string }) { }
}
