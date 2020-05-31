import { StatusStateModel, defaultStatusState } from '@store/state.model';

export interface ForecastStateModel extends StatusStateModel {
    currentForecast: any | null;
    dailyForecast: any | null;
}

export const defaultForecastState = {
    ...defaultStatusState,
    currentForecast: null,
    dailyForecast: null,
}
