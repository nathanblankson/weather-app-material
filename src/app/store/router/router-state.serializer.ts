// Define a router serializer in /store/router/router-state.serializer.ts
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateModel } from './router-state.model';
import { RouterStateSerializer } from '@ngxs/router-plugin';

// The route state serializer will on route changes serialize the activated route into an object which reflect our state model
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateModel> {
    serialize(routerState: RouterStateSnapshot): RouterStateModel {
        const {
            url,
            root: { queryParams }
        } = routerState;

        let { root: route } = routerState;
        while (route.firstChild) {
            route = route.firstChild;
        }

        const { params, data } = route;

        if (route.params.title) {
            data.title = route.params.title;
        }

        return { url, params, queryParams, data };
    }
}
