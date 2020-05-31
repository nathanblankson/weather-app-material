import { Selector } from '@ngxs/store';

import { ForecastState } from './forecast.state'
import { ForecastStateModel } from './forecast-state.model';

export class ForecastSelectors {
    @Selector([ForecastState])
    static currentForecast(state: ForecastStateModel) {
        return state.currentForecast;
    }

    @Selector([ForecastState])
    static dailyForecast(state: ForecastStateModel) {
        return state.dailyForecast;
    }
}
