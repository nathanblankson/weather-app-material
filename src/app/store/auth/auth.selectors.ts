import { Selector } from '@ngxs/store';

import { AuthState } from './auth.state';
import { AuthStateModel } from './auth-state.model';

export class AuthSelectors {
    @Selector([AuthState])
    static token(state: AuthStateModel): string | null {
        return state.token;
    }

    @Selector([AuthState])
    static isAuthenticated(state: AuthStateModel): boolean {
        return state.isAuthenticated;
    }
}
