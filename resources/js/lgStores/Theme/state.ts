export type State = {
    primaryThemeColour: string;
    primaryThemeColourShade: number;
    primaryTheme: string;
    acceptedGDRP: boolean;
    primaryThemeRouterAnimation: string;
};

const state: State = {
    primaryThemeColour: 'blue',
    primaryThemeColourShade: 500,
    primaryTheme: 'dark',
    acceptedGDRP: false,
    primaryThemeRouterAnimation: '',
};

export default state;
