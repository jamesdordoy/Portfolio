import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        primaryThemeColour: string;
        primaryThemeColourShade: number;
        primaryTheme: string;
        acceptedGDRP: boolean;
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
