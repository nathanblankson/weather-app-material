import { StatusStateModel, defaultStatusState } from '@store/state.model';
import { User } from '@core/models';

export interface AuthStateModel extends StatusStateModel {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

export const defaultAuthState = {
    ...defaultStatusState,
    isAuthenticated: false,
    user: null,
    token: null
}
