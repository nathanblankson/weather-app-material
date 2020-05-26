// Inside the root 'index.ts' file of our store, eg - store/index.ts
import { AuthState } from './auth';

// Still allow other modules to take what they need, eg action & selectors
export * from './auth';

// rolls up our states into one const
export const appState = [
    AuthState,
];
