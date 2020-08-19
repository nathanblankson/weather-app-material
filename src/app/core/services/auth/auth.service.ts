// Angular dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Other dependencies
import { Observable } from 'rxjs';

// Local files
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

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    login(data: AuthDTO): Observable<AuthRO> {
        return this.auth('login', data);
    }

    register(data: AuthDTO): Observable<AuthRO> {
        return this.auth('register', data);
    }
}
