export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace name {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        store: import("vuex").Store<any>;
        readonly useStore: typeof useStore;
    };
}
import { useStore } from "vuex";
