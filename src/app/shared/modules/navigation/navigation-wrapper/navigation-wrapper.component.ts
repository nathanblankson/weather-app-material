import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-wrapper',
  templateUrl: './navigation-wrapper.component.html',
  styleUrls: ['./navigation-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationWrapperComponent {
  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
