export interface ForecastStateModel {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
    currentForecast: any | null;
    dailyForecast: any | null;
}

export const defaultForecastState = {
    loading: false,
    loaded: false,
    failed: false,
    currentForecast: null,
    dailyForecast: null,
}
