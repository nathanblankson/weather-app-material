import { AuthDTO, User } from '@core/models';

const AuthActionTypes = {
    LOGIN_REQUEST: '[Auth] Login Request',
    LOGIN_FAILURE: '[Auth] Login Failure',
    LOGIN_SUCCESS: '[Auth] Login Success',

    REGISTER_REQUEST: '[Auth] Register Request',
    REGISTER_FAILURE: '[Auth] Register Failure',
    REGISTER_SUCCESS: '[Auth] Register Success',

    LOGOUT: '[Auth] Logout',
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

export class RegisterRequest {
    static readonly type = AuthActionTypes.REGISTER_REQUEST;
    constructor(public payload: { data: AuthDTO }) { }
}

export class RegisterFailure {
    static readonly type = AuthActionTypes.REGISTER_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class RegisterSuccess {
    static readonly type = AuthActionTypes.REGISTER_SUCCESS;
    constructor(public payload: { user: User, token: string }) { }
}

export class Logout {
    static readonly type = AuthActionTypes.LOGOUT;
}
