import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AuthSelectors } from '@store/auth/auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _store: Store) { }

    // Authenticated user attempts to access route requiring no auth, don't show, redirect.
    canActivate(): boolean {
        const isAuthenticated = this._store.selectSnapshot(AuthSelectors.isAuthenticated);
        console.log(isAuthenticated);
        if (isAuthenticated) {
            this._store.dispatch(new Navigate(['/forecast']));
            return false
        }
        return true;
    }

    // Unautheticated user attempts to access route requiring auth, don't load, redirect.
    canLoad(): boolean {
        const isAuthenticated = this._store.selectSnapshot(AuthSelectors.isAuthenticated);
        if (!isAuthenticated) {
            this._store.dispatch(new Navigate(['/login']));
        }
        return isAuthenticated;
    }
}
