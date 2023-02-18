import { State } from './state';
interface Getters {
    primaryThemeColour(state: State): string;
    primaryThemeColourShade(state: State): number;
    primaryThemeColourShadeLighter(state: State): number;
    primaryThemeColourShadeDarker(state: State): number;
    primaryTheme(state: State): string;
    primaryThemeBg(state: State): string;
    primaryThemeBgLighter(state: State): string;
    primaryThemeBgDarker(state: State): string;
    primaryThemeBgDarkest(state: State): string;
    primaryThemeBgParticlesColour(state: State): string;
    primaryThemeBgParticlesColourShade(state: State): string;
    primaryThemeTextColour(state: State): string;
    primaryThemeHoverTextColour(state: State): string;
    primaryThemeRouterAnimation(state: State): string;
    hasUserAcceptedGDPR(state: State): boolean;
}
export declare const getters: Getters;
export {};
