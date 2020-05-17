import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    private openWeatherKey = environment.openWeatherKey
    private openWeatherApi = 'api.openweathermap.org/data/2.5/';

    private mockCurrent = {
        "coord": {
            "lon": -0.13,
            "lat": 51.51
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 289.24,
            "feels_like": 284.66,
            "temp_min": 289.15,
            "temp_max": 289.26,
            "pressure": 1024,
            "humidity": 38
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.1,
            "deg": 280
        },
        "clouds": {
            "all": 100
        },
        "dt": 1589639248,
        "sys": {
            "type": 1,
            "id": 1414,
            "country": "GB",
            "sunrise": 1589602004,
            "sunset": 1589658436
        },
        "timezone": 3600,
        "id": 2643743,
        "name": "London",
        "cod": 200
    }

    constructor(private _http: HttpClient) { }

    getCurrentWeather(params: { cityName: string, state: string, countryCode: string }) {
        const { cityName, state, countryCode } = params;
        // this._http.get(`${this.openWeatherApi}weather?q=${cityName},${state},${countryCode}&appid=${this.openWeatherApi}`).subscribe((res) => {

        // });

        const formattedResponse = {
            weather: {
                main: this.mockCurrent.weather[0].main,
                description: this.mockCurrent.weather[0].description,
                icon: this.mockCurrent.weather[0].icon
            },
            main: this.mockCurrent.main,
            visibility: this.mockCurrent.visibility,
            wind: this.mockCurrent.wind,
            dt: this.mockCurrent.dt,
            location: {
                name: this.mockCurrent.name,
                country: this.mockCurrent.sys.country
            }
        };

        return formattedResponse;
    }
}



