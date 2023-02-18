export default _sfc_main;
declare namespace _sfc_main {
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        store: import("vuex").Store<any>;
        readonly useStore: typeof useStore;
    };
}
import { useStore } from "vuex";
