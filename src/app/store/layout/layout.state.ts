import { State, Action, StateContext } from '@ngxs/store';

import { LayoutStateModel, defaultLayoutState } from './layout-state.model';
import { OpenSidenav, CloseSidenav } from './layout.actions'

@State<LayoutStateModel>({
    name: 'Layout',
    defaults: defaultLayoutState
})
export class LayoutState {
    @Action(OpenSidenav)
    openSidenav({ patchState }: StateContext<LayoutStateModel>) {
        patchState({ showSidenav: true });
    }

    @Action(CloseSidenav)
    closeSidenav({ patchState }: StateContext<LayoutStateModel>) {
        patchState({ showSidenav: false });
    }
}
