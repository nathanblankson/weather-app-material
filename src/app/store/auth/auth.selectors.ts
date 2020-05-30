import { Selector } from '@ngxs/store';

import { AuthState } from './auth.state';
import { AuthStateModel } from './auth-state.model';

export class AuthSelectors {
    @Selector([AuthState])
    static isAuthenticated(state: AuthStateModel) {
        return state.isAuthenticated;
    }
}
