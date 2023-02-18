export default _sfc_main;
declare namespace _sfc_main {
    const props: string[];
    function setup(props: any): {
        currentSlide: import("vue").Ref<number>;
        nextSlide: () => void;
        prevSlide: () => void;
        getSlideCount: import("vue").Ref<null>;
        goToSlide: (index: any) => void;
        pagintationEnabled: any;
        navEnabled: any;
        store: import("vuex").Store<any>;
    };
}
