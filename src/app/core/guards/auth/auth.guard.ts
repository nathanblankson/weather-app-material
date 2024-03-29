// Angular dependencies
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Other dependencies
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

// Local files
import { AuthSelectors } from '@store/auth/auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _store: Store) { }

    // Unautheticated user attempts to access route requiring auth, don't show, redirect.
    canActivate(): boolean {
        const isAuthenticated = this._store.selectSnapshot(AuthSelectors.isAuthenticated);
        if (!isAuthenticated) {
            this._store.dispatch(new Navigate(['/login']));
        }
        return isAuthenticated;
    }
}
