import { Selector } from '@ngxs/store';

import { LayoutState } from './layout.state';
import { LayoutStateModel } from './layout-state.model';

export class LayoutSelectors {
    @Selector([LayoutState])
    public static showSidenav(state: LayoutStateModel): boolean {
        return state.showSidenav;
    }
}
