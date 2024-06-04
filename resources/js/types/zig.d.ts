import { route as routeFn } from 'ziggy-js';

declare global {
    var route: typeof routeFn;
}