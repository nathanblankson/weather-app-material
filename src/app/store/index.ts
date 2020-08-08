// Inside the root 'index.ts' file of our store, eg - store/index.ts
import { AuthState } from './auth';
import { LayoutState } from './layout';
import { ForecastState } from './forecast';
import { NotificationsState } from './notifications';

// Still allow other modules to take what they need, eg action & selectors
export * from './auth';
export * from './router';
export * from './layout';
export * from './forecast';
export * from './notifications';

// rolls up our states into one const
export const appState = [
    AuthState,
    LayoutState,
    ForecastState,
    NotificationsState
];
