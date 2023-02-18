import { State } from './state';
interface Mutations {
    setPrimaryTheme(state: State, theme: string): void;
    setPrimaryThemeColor(state: State, colour: string): void;
    setPrimaryThemeColorShade(state: State, shade: number): void;
    setPrimaryThemeRouterAnimation(state: State, animation: string): void;
    userAcceptedGDRP(state: State): void;
}
export declare const mutations: Mutations;
export {};
