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

    // @Action(ForecastRequest)
    // forecastRequest({ patchState, dispatch }: StateContext<ForecastStateModel>, action: ForecastRequest) {
    //     patchState({
    //         loading: true
    //     });
    //     return this._forecastService.getForecast(action.payload.data).subscribe(
    //         res => dispatch(new ForecastSuccess({ data: res })),
    //         err => dispatch(new ForecastFailure(err))
    //     );
    // }

    @Action(ForecastRequest)
    forecastMock({ patchState, dispatch }: StateContext<ForecastStateModel>, action: ForecastRequest) {
        patchState({
            loading: true,
            loaded: false,
            failed: false
        });
        return this._forecastService.getForecastMock(action.payload.data).subscribe(
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
        const currentForecast = action.payload.data.current;
        const dailyForecast = action.payload.data.daily;
        patchState({
            loading: false,
            loaded: true,
            failed: false,
            currentForecast,
            dailyForecast
        });
    }

    @Action(Logout)
    logout({ setState }: StateContext<ForecastStateModel>) {
        setState(defaultForecastState);
    }
}
