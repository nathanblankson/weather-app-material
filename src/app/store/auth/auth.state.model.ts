export interface AuthStateModel  {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
}

export const defaultAuthStateModel = {
    loading: false,
    loaded: false,
    failed: false,
}
