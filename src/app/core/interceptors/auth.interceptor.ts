// Angular dependencies
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

// Other dependencies
import { Observable } from 'rxjs';

// Local files
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this._authService.getToken();

        if (accessToken) {
            const cloned = req.clone({
                headers: req.headers.set(
                    'Authorization', `Bearer ${accessToken}`)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
