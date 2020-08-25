export default {
    primaryThemeColour: state => state.primaryThemeColour,
    primaryThemeColourShade: state => state.primaryThemeColourShade,
    primaryThemeColourShadeLighter: state => (parseInt(state.primaryThemeColourShade) - 200),
    primaryThemeColourShadeDarker: state => (parseInt(state.primaryThemeColourShade) + 200),


    primaryTheme: state => state.primaryTheme,
    primaryThemeBg: state => state.primaryTheme === "light" ? "gray-200" : "secondary",

    primaryThemeBgParticles: state => state.primaryTheme === "light" ? "gray-100" : "gray-800",

    primaryThemeBgLighter: state => state.primaryTheme === "light" ? "gray-100" : "gray-800",
    primaryThemeBgDarker: state => state.primaryTheme === "light" ? "gray-200" : "secondary",
    primaryThemeBgDarkest: state => state.primaryTheme === "light" ? "gray-300" : "gray-900",
    primaryThemeBackground: state => state.primaryTheme === "light" ? "white" : "gray-900",
    primaryThemeTextColour: state => state.primaryTheme === "light" ? "gray-800" : "gray-400",

    primaryThemeHoverTextColour: state => state.primaryTheme === "light" ? "white" : "gray-900",

    primaryThemeRouterAnimation: state => state.primaryThemeRouterAnimation,
    isLoggedIn: state => !! state.isLoggedIn,
};
