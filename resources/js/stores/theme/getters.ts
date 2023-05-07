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

const getters: Getters = {
    primaryThemeColour: (state: State) => state.primaryThemeColour,
    primaryThemeColourShade: (state: State) => state.primaryThemeColourShade,
    primaryThemeColourShadeLighter: (state: State) => state.primaryThemeColourShade - 200,
    primaryThemeColourShadeDarker: (state: State) => state.primaryThemeColourShade + 200,

    primaryTheme: (state: State) => state.primaryTheme,
    primaryThemeBg: (state: State) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-800'),
    primaryThemeBgLighter: (state: State) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-700'),
    primaryThemeBgDarker: (state: State) => (state.primaryTheme === 'light' ? 'gray-200' : 'slate-900'),
    primaryThemeBgDarkest: (state: State) => (state.primaryTheme === 'light' ? 'gray-300' : 'black'),

    primaryThemeBgParticlesColour: (state: State) => (state.primaryTheme === 'light' ? 'gray' : 'slate'),
    primaryThemeBgParticlesColourShade: (state: State) => (state.primaryTheme === 'light' ? '100' : '800'),

    primaryThemeTextColour: (state: State) => (state.primaryTheme === 'light' ? 'gray-800' : 'slate-400'),
    primaryThemeHoverTextColour: (state: State) => (state.primaryTheme === 'light' ? 'white' : 'slate-900'),

    primaryThemeRouterAnimation: (state: State) => state.primaryThemeRouterAnimation,

    hasUserAcceptedGDPR: (state: State) => !!state.acceptedGDRP,
};

export default getters;
