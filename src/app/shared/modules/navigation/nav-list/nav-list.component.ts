import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { Logout } from '@store/auth/auth.actions';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
    constructor(private _store: Store) { }

    ngOnInit() { }

    onLogout() {
        this._store.dispatch(new Logout());
    }
}
