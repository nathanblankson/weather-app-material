import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

import { LayoutSelectors, OpenSidenav, CloseSidenav } from '@store/index';

@Component({
    selector: 'app-navigation-wrapper',
    templateUrl: './navigation-wrapper.component.html',
    styleUrls: ['./navigation-wrapper.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavigationWrapperComponent implements OnInit {
    @ViewChild('drawer', { static: false })
    drawer: MatSidenav;

    opened: boolean;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver, private _store: Store) { }

    ngOnInit() { }

    onToggleSidenav() {
        this.drawer.toggle();
    }
}
