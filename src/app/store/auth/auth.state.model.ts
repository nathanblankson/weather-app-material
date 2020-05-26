export interface AuthStateModel {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
    isAuthenticated: boolean;
    user: any | null;
}

export const defaultAuthStateModel = {
    loading: false,
    loaded: false,
    failed: false,
    isAuthenticated: false,
    user: null
}
