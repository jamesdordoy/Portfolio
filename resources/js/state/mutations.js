export default {
    setPrimaryTheme(state, theme) {
        state.primaryTheme = theme;
    },
    setPrimaryThemeColor(state, colour) {
        state.primaryThemeColour = colour;
    },
    setPrimaryThemeColorShade(state, shade) {
        state.primaryThemeColourShade = shade;
    },
    setPrimaryThemeRouterAnimation(state, animation) {
        state.primaryThemeRouterAnimation = animation;
    },
    login(state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    }
};
