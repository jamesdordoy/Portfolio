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
    userAcceptedGDRP(state) {
        state.acceptedGDRP = true;
    },
    login(state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    }
};
