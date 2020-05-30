const LayoutActionTypes = {
    OPEN_SIDENAV: '[Layout] Open Sidenav',
    CLOSE_SIDENAV: '[Layout] Close Sidenav',
    TOGGLE_SIDENAV: '[Layout] Toggle Sidenav'
}

export class OpenSidenav {
    static readonly type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenav {
    static readonly type = LayoutActionTypes.CLOSE_SIDENAV;
}

export class ToggleSidenav {
    static readonly type = LayoutActionTypes.TOGGLE_SIDENAV;
    constructor(public payload: { data: boolean }) { }
}
