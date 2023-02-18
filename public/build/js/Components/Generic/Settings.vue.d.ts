declare const _sfc_main: import("vue").DefineComponent<{
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    emit: (event: "toggle", ...args: any[]) => void;
    store: import("vuex").Store<any>;
    getTheme: import("vue").ComputedRef<string>;
    showSettings: () => void;
    updatePrimaryThemeColour: (colour: string) => void;
    updatePrimaryThemeColourShade: (event: Event) => void;
    updateTheme: (even: Event) => void;
    updateThemeRouterAnimation: (event: Event) => void;
    props: any;
    ColourButton: any;
    RangeInput: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    hidden: boolean;
}>;
export default _sfc_main;
