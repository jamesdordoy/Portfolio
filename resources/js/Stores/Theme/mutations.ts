import { State } from './state';

interface Mutations {
    setPrimaryTheme(state: State, theme: string): void;
    setPrimaryThemeColor(state: State, colour: string): void;
    setPrimaryThemeColorShade(state: State, shade: number): void;
    setPrimaryThemeRouterAnimation(state: State, animation: string): void;
    userAcceptedGDRP(state: State): void;
}

const mutations: Mutations = {
    setPrimaryTheme(state: State, theme: string): void {
        state.primaryTheme = theme;
    },
    setPrimaryThemeColor(state: State, colour: string): void {
        state.primaryThemeColour = colour;
    },
    setPrimaryThemeColorShade(state: State, shade: number): void {
        state.primaryThemeColourShade = shade;
    },
    setPrimaryThemeRouterAnimation(state: State, animation: string): void {
        state.primaryThemeRouterAnimation = animation;
    },
    userAcceptedGDRP(state: State): void {
        state.acceptedGDRP = true;
    },
};

export default mutations;
