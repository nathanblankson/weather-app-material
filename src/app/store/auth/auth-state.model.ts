import { User } from '@core/models';

export interface AuthStateModel {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

export const defaultAuthState = {
    loading: false,
    loaded: false,
    failed: false,
    isAuthenticated: false,
    user: null,
    token: null
}
