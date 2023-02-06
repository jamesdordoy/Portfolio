import { State } from './state';

export default {
    setPrimaryTheme(state: State, theme: string) {
        state.primaryTheme = theme;
    },
    setPrimaryThemeColor(state: State, colour: string) {
        state.primaryThemeColour = colour;
    },
    setPrimaryThemeColorShade(state: State, shade: number) {
        state.primaryThemeColourShade = shade;
    },
    setPrimaryThemeRouterAnimation(state: State, animation: string) {
        state.primaryThemeRouterAnimation = animation;
    },
    userAcceptedGDRP(state: State) {
        state.acceptedGDRP = true;
    },
};
