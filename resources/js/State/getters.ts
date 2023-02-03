export default {
    primaryThemeColour: (state) => state.primaryThemeColour,
    primaryThemeColourShade: (state) => state.primaryThemeColourShade,
    primaryThemeColourShadeLighter: (state) => parseInt(state.primaryThemeColourShade, 10) - 200,
    primaryThemeColourShadeDarker: (state) => parseInt(state.primaryThemeColourShade, 10) + 200,

    primaryTheme: (state) => state.primaryTheme,
    primaryThemeBg: (state) => (state.primaryTheme === 'light' ? 'gray-200' : 'slate-900'),

    primaryThemeBgParticles: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-900'),

    primaryThemeBgLighter: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-800'),
    primaryThemeBgDarker: (state) => (state.primaryTheme === 'light' ? 'gray-200' : 'slate-850'),
    primaryThemeBgDarkest: (state) => (state.primaryTheme === 'light' ? 'gray-300' : 'slate-900'),
    primaryThemeBackground: (state) => (state.primaryTheme === 'light' ? 'white' : 'slate-900'),
    primaryThemeTextColour: (state) => (state.primaryTheme === 'light' ? 'gray-800' : 'slate-400'),

    primaryThemeHoverTextColour: (state) => (state.primaryTheme === 'light' ? 'white' : 'slate-900'),

    primaryThemeRouterAnimation: (state) => state.primaryThemeRouterAnimation,
    hasUserAcceptedGDPR: (state) => !!state.acceptedGDRP,
};
