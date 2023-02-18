declare const _sfc_main: import("vue").DefineComponent<{
    projects: {
        type: {
            (arrayLength: number): Project[];
            (...items: Project[]): Project[];
            new (arrayLength: number): Project[];
            new (...items: Project[]): Project[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: true;
    };
    timeline: {
        type: any;
        required: true;
    };
    gameClips: {
        type: any;
        required: true;
    };
    errors: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    props: any;
    store: import("vuex").Store<any>;
    displaySettings: import("vue").Ref<boolean>;
    primaryThemeBg: import("vue").ComputedRef<string>;
    showSettings: () => void;
    closeSettings: () => void;
    removeFinishEventListener: VoidFunction;
    Footer: any;
    Particles: any;
    AboutMe: any;
    Settings: any;
    Navigation: any;
    ToastSection: any;
    ProjectsSection: any;
    ContactMeSection: any;
    GamesSection: any;
    MyExperianceSection: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projects: {
        type: {
            (arrayLength: number): Project[];
            (...items: Project[]): Project[];
            new (arrayLength: number): Project[];
            new (...items: Project[]): Project[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: true;
    };
    timeline: {
        type: any;
        required: true;
    };
    gameClips: {
        type: any;
        required: true;
    };
    errors: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    errors: Record<string, any>;
}>;
export default _sfc_main;
