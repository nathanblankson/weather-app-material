import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';
import { AuthType, AuthDTO } from '@core/models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api: string = environment.apiServer + '/auth';

    constructor(private _http: HttpClient) { }

    private auth(authType: AuthType, data: AuthDTO) {
        return this._http.post(`${this.api}/${authType}`, data);
    }

    login(data: AuthDTO) {
        return this.auth('login', data);
    }

    register(data: AuthDTO) {
        return this.auth('register', data);
    }
}
