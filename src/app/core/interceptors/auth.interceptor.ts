// Angular dependencies
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

// Other dependencies
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

// Local files
import { AuthSelectors, AuthState } from '@store/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _store: Store) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this._store.selectSnapshot(AuthSelectors.token);

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
