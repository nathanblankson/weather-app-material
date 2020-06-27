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
export class IsLoggedGuard implements CanActivate {

    constructor(private _store: Store) { }

    // Authenticated user attempts to access route requiring no auth, don't show, redirect.
    canActivate(): boolean {
        const isAuthenticated = this._store.selectSnapshot(AuthSelectors.isAuthenticated);
        if (isAuthenticated) {
            this._store.dispatch(new Navigate(['/forecast']));
        }
        return !isAuthenticated;
    }
}
