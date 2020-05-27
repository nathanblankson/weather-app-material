import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { AuthType, AuthDTO, AuthRO } from '@core/models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api: string = environment.apiServer + '/auth';

    constructor(private _http: HttpClient) { }

    private auth(authType: AuthType, data: AuthDTO): Observable<AuthRO> {
        return this._http.post<AuthRO>(`${this.api}/${authType}`, data);
    }

    login(data: AuthDTO): Observable<AuthRO> {
        return this.auth('login', data);
    }

    register(data: AuthDTO): Observable<AuthRO> {
        return this.auth('register', data);
    }
}