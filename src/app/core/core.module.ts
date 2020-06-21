// Angular dependencies
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Other dependencies
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

// Local files
import { appState } from '@store/index';
import { CustomRouterStateSerializer } from '@store/router/router-state.serializer';

@NgModule({
    imports: [
        NgxsModule.forRoot(appState),
        NgxsStoragePluginModule.forRoot({
            key: ['Auth']
        }),
        NgxsRouterPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
