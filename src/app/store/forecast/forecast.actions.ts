const ForecastActionTypes = {
    FORECAST_REQUEST: '[Forecast] Forecast Request',
    FORECAST_FAILURE: '[Forecast] Forecast Failure',
    FORECAST_SUCCESS: '[Forecast] Forecast Success',
}

export class ForecastRequest {
    static readonly type = ForecastActionTypes.FORECAST_REQUEST;
    constructor(public payload: { data: any }) { }
}

export class ForecastFailure {
    static readonly type = ForecastActionTypes.FORECAST_FAILURE;
    constructor(public payload: { error: any }) { }
}

export class ForecastSuccess {
    static readonly type = ForecastActionTypes.FORECAST_SUCCESS;
    constructor(public payload: { data: any }) { }
}
