export type State = {
    primaryThemeColour: string;
    primaryThemeColourShade: number;
    primaryTheme: string;
    acceptedGDRP: boolean;
    primaryThemeRouterAnimation: string;
};

export const state: State = {
    primaryThemeColour: 'blue',
    primaryThemeColourShade: 500,
    primaryTheme: 'dark',
    acceptedGDRP: false,
    primaryThemeRouterAnimation: '',
};
