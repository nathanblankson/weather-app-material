export interface StatusStateModel {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
}

export const defaultStatusState = {
    loading: false,
    loaded: false,
    failed: false,
}
