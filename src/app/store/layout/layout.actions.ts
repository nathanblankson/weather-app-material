const LayoutActionTypes = {
    OPEN_SIDENAV: '[Layout] Open Sidenav',
    CLOSE_SIDENAV: '[Layout] Close Sidenav',
}

export class OpenSidenav {
    static readonly type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenav {
    static readonly type = LayoutActionTypes.CLOSE_SIDENAV;
}
