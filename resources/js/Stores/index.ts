import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        primaryThemeColour: 'blue',
        primaryThemeColourShade: 500,
        primaryTheme: 'dark',
        acceptedGDRP: false,
        primaryThemeRouterAnimation: '',
    }),

    actions: {
        setPrimaryTheme(state, theme: string): void {
            state.primaryTheme = theme;
        },
        setPrimaryThemeColor(state, colour: string): void {
            state.primaryThemeColour = colour;
        },
        setPrimaryThemeColorShade(state, shade: number): void {
            state.primaryThemeColourShade = shade;
        },
        setPrimaryThemeRouterAnimation(state, animation: string): void {
            state.primaryThemeRouterAnimation = animation;
        },
        userAcceptedGDRP(state): void {
            state.acceptedGDRP = true;
        },
    },
    getters: {
        primaryThemeColourShadeLighter: (state) => state.primaryThemeColourShade - 200,
        primaryThemeColourShadeDarker: (state) => state.primaryThemeColourShade + 200,
        primaryThemeBg: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-800'),
        primaryThemeBgLighter: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-700'),
        primaryThemeBgDarker: (state) => (state.primaryTheme === 'light' ? 'gray-200' : 'slate-900'),
        primaryThemeBgDarkest: (state) => (state.primaryTheme === 'light' ? 'gray-300' : 'black'),
        primaryThemeBgParticlesColour: (state) => (state.primaryTheme === 'light' ? 'gray' : 'slate'),
        primaryThemeBgParticlesColourShade: (state) => (state.primaryTheme === 'light' ? '100' : '800'),
        primaryThemeTextColour: (state) => (state.primaryTheme === 'light' ? 'gray-800' : 'slate-400'),
        primaryThemeHoverTextColour: (state) => (state.primaryTheme === 'light' ? 'white' : 'slate-900'),
        hasUserAcceptedGDPR: (state) => !!state.acceptedGDRP,
    },
    persist: true,
});
