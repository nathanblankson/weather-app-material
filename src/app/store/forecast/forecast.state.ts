import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { ForecastStateModel, defaultForecastState } from './forecast-state.model';
import { ForecastService } from '@core/services/forecast/forecast.service';
import { ForecastRequest, ForecastFailure, ForecastSuccess } from './forecast.actions';
import { Logout } from '@store/auth';

@State<ForecastStateModel>({
    name: 'Forecast',
    defaults: defaultForecastState
})
@Injectable()
export class ForecastState {
    constructor(private _forecastService: ForecastService) { }

    @Action(ForecastRequest)
    forecastRequest({ patchState, dispatch }: StateContext<ForecastStateModel>, action: ForecastRequest) {
        patchState({
            loading: true
        });
        return this._forecastService.getForecast(action.payload.data).subscribe(
            res => dispatch(new ForecastSuccess({ data: res })),
            err => dispatch(new ForecastFailure(err))
        );
    }

    @Action(ForecastFailure)
    forecastFailure({ patchState }: StateContext<ForecastStateModel>, action: ForecastFailure) {
        patchState({
            loading: false,
            loaded: false,
            failed: true
        });
        console.log(action.payload.error);
    }

    @Action(ForecastSuccess)
    forecastSuccess({ patchState }: StateContext<ForecastStateModel>, action: ForecastSuccess) {
        console.log(action.payload.data);
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            currentForecast: action.payload.data.forecast.current,
            dailyForecast: action.payload.data.forecast.daily,
            location: action.payload.data.location
        });
    }

    @Action(Logout)
    logout({ setState }: StateContext<ForecastStateModel>) {
        setState(defaultForecastState);
    }
}
