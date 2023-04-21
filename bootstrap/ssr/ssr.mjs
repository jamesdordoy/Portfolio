import { defineComponent, resolveComponent, unref, useSSRContext, mergeProps, ref, watch, computed, resolveDirective, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, isProxy, toRaw, onUnmounted, createSSRApp, h as h$1 } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useStore, createStore } from "vuex";
import Notifications, { notify } from "notiwind";
import { useForm, router, createInertiaApp } from "@inertiajs/vue3";
import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
import route from "ziggy-js";
import colours from "tailwindcss/colors.js";
import { loadFull } from "tsparticles";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import Particles from "particles.vue3";
import VueScrollTo from "vue-scrollto";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "NewsletterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    const newsletter = {
      email: ""
    };
    const form = useForm(newsletter);
    useReCaptcha();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><div class="pt-2 md:flex md:items-center"><h4 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-1 pr-4 md:mb-0 md:text-right"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "newspaper"] }, null, _parent));
      _push(`  Newsletter Signup: </h4></div><div class="py-2 md:flex md:items-center"><div class="md:w-full"><div class="flex items-center pb-2"><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="john@example.com" aria-label="Email Address" class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mr-3 w-full border-none border-transparent bg-transparent py-1 px-2 leading-tight focus:border-transparent focus:ring-0"])}"><button type="button" class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:bg-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeHoverTextColour}`, "flex-shrink-0 rounded border bg-transparent py-1 px-2 text-sm"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "check"] }, null, _parent));
      _push(` Sign Up </button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/NewsletterForm.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap border-t py-3 px-10 lg:p-10", `bg-${unref(store2).getters.primaryThemeBgDarker} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`]
      }, _attrs))}><div class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "w-full border-b lg:w-1/3"])}"><p class="mt-2"><a aria-label="facebook" href="https://www.facebook.com/dordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "facebook"],
        class: ["text-4xl hover:text-blue-700 lg:text-5xl", `text-${unref(store2).getters.primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="twitter" href="https://twitter.com/JDordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "twitter"],
        class: ["text-4xl hover:text-blue-400 lg:text-5xl", `text-${unref(store2).getters.primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="linkedin" href="https://www.linkedin.com/in/james-dordoy-a80686110/" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "linkedin"],
        class: ["text-4xl hover:text-blue-500 lg:text-5xl", `text-${unref(store2).getters.primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="github" href="https://github.com/jamesdordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "github"],
        class: ["text-4xl hover:text-gray-500 lg:text-5xl", `text-${unref(store2).getters.primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="jsfiddle" href="https://jsfiddle.net/user/JamesDordoy/fiddles/" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fab", "jsfiddle"],
        class: ["text-4xl hover:text-yellow-500 lg:text-5xl", `text-${unref(store2).getters.primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a></p></div><div class="varela w-full py-6 text-center text-gray-400 sm:text-left lg:w-1/3 lg:py-0 lg:pt-2 lg:text-center"><h3 class="${ssrRenderClass(`text-${unref(store2).getters.primaryThemeTextColour}`)}">© James Dordoy</h3><p class="my-2">${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p></div><div class="w-full lg:w-1/3"><div id="newsletter" class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "border-b"])}">`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Footer.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Particles",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };
    let renderIndex = ref(0);
    watch(
      () => store2.getters.primaryTheme,
      function() {
        renderIndex.value = renderIndex.value + 1;
      }
    );
    watch(
      () => store2.getters.primaryThemeColour,
      function() {
        renderIndex.value = renderIndex.value + 1;
      }
    );
    const backgroundColour = computed(() => {
      const themeColour = store2.getters.primaryThemeBgParticlesColour;
      const themeShade = store2.getters.primaryThemeBgParticlesColourShade;
      return colours[themeColour][themeShade];
    });
    const particleColour = computed(() => {
      const themeColour = store2.getters.primaryThemeColour;
      const themeShade = store2.getters.primaryThemeColourShade;
      return colours[themeColour][themeShade];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Particles = resolveComponent("Particles", true);
      _push(ssrRenderComponent(_component_Particles, mergeProps({
        id: "portfolio-particles",
        key: unref(renderIndex),
        "particles-init": particlesInit,
        options: {
          background: {
            color: {
              value: unref(backgroundColour)
            }
          },
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: unref(particleColour)
            },
            links: {
              color: unref(particleColour),
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: false
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 100
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Particles.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "AboutMeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span id="about" class="jd-bookmark"></span><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "varela mb-16 text-center text-4xl text-gray-400"])}"> About Me </h2><p class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "about-me mb-8 text-center text-xl"])}"> Hey, my name is James and im a Software Enginer living in Essex. I have been developing software for over ten years now and i have a large range of experience from creating simple Android applications and Microsoft Excel dashboards to working on large scale CMS and CRM systems. </p><br><p class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "about-me mb-8 text-center text-xl"])}"> Since leaving University, i have mainly been working with PHP &amp; Laravel. I also have a solid background in JavaScript &amp; Java but picking up a difference langauge isn&#39;t a problem. I am profitiant at writting procedual, object orianted and functional code which provides many different techniques for making my work cleaner. I am currently picking up TypeScript and enjoying the benifits as it enables me to write stricter code to overcome some of the limitations that JavaScript present such as Type Inference. </p><div class="mb-8 flex items-center justify-center"><img src="/storage/images/me.jpeg" alt="James Dordoy - Me" class="rounded-full"></div><p class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "about-me text-center text-xl"])}"> I am a huge Snooker fan and also enjoying playing competitive First Person Shooter games. I also like learning about hardware and electronics and would love to pick up more basics to create simple robots. I have always wanted to learn to play a musical instrument or make YouTube tutorials based on my programming knowledge but have never got around to it. </p></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/AboutMeSection.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {
  props: {
    colour: {
      type: String,
      default: "blue"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: `p-5 bg-${$props.colour}-500 rounded`
  }, _attrs))}></button>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/ColourButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const ColourButton = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RangeInput",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    let value = ref(store2.getters.primaryThemeColourShade);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: unref(value),
        class: [`bg-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "h-3 w-full appearance-none overflow-hidden rounded-lg outline-none"],
        type: "range",
        min: "100",
        max: "900",
        step: "100"
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Inputs/RangeInput.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  __ssrInlineRender: true,
  props: {
    hidden: {
      type: Boolean,
      default: true
    }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const store2 = useStore();
    computed(() => store2.getters.primaryTheme);
    const updatePrimaryThemeColour = (colour) => {
      console.log(colour);
      store2.commit("setPrimaryThemeColor", colour);
    };
    const updatePrimaryThemeColourShade = (event2) => {
      var _a;
      store2.commit("setPrimaryThemeColorShade", (_a = event2 == null ? void 0 : event2.target) == null ? void 0 : _a.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap px-3 py-2"><div class="w-4/6"><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "text-xl"])}"> Theme Settings </h2></div><div class="w-2/6"><button class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "float-right mt-1"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "times"] }, null, _parent));
      _push(`</button></div></div><hr class="my-1"><div class="flex flex-wrap px-3 py-2"><div class="w-full"><h3 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 text-lg"])}"> Theme Mode </h3></div><div class="w-full"><div class="relative block"><select${ssrRenderAttr("value", unref(store2).getters.primaryTheme)} class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgLighter} text-${unref(store2).getters.primaryThemeTextColour} focus:bg-${unref(store2).getters.primaryThemeBgDarkest}`, "focus:shadow-outline block w-full appearance-none rounded px-4 py-2 pr-8 leading-tight shadow focus:outline-none"])}"><option value="light">Light</option><option value="dark">Dark</option></select></div><hr class="my-2"></div><div class="w-full"><h3 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 text-lg"])}"> Theme Colour </h3></div><div class="w-full"><div class="flex flex-wrap"><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "blue",
        onClick: ($event) => updatePrimaryThemeColour("blue")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "teal",
        onClick: ($event) => updatePrimaryThemeColour("teal")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "purple",
        onClick: ($event) => updatePrimaryThemeColour("purple")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "green",
        onClick: ($event) => updatePrimaryThemeColour("green")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "red",
        onClick: ($event) => updatePrimaryThemeColour("red")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "orange",
        onClick: ($event) => updatePrimaryThemeColour("orange")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "yellow",
        onClick: ($event) => updatePrimaryThemeColour("yellow")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "indigo",
        onClick: ($event) => updatePrimaryThemeColour("indigo")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "pink",
        onClick: ($event) => updatePrimaryThemeColour("pink")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "lime",
        onClick: ($event) => updatePrimaryThemeColour("lime")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "sky",
        onClick: ($event) => updatePrimaryThemeColour("sky")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "emerald",
        onClick: ($event) => updatePrimaryThemeColour("emerald")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "stone",
        onClick: ($event) => updatePrimaryThemeColour("stone")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "zinc",
        onClick: ($event) => updatePrimaryThemeColour("zinc")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(ColourButton, {
        colour: "slate",
        onClick: ($event) => updatePrimaryThemeColour("slate")
      }, null, _parent));
      _push(`</div></div><hr class="my-2"><div class="w-full"><h3 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 text-lg"])}"> Theme Colour Shade </h3></div><div class="w-full"><div class="relative block">`);
      _push(ssrRenderComponent(_sfc_main$e, { onInput: updatePrimaryThemeColourShade }, null, _parent));
      _push(`</div><hr class="my-2"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Settings.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_scroll_to = resolveDirective("scroll-to");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-10 font-sans antialiased" }, _attrs))}><nav class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "front-nav border-b lg:px-10"])}"><div class="flex-no-shrink mr-6 flex items-center text-white"><svg width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "mr-2 h-8 w-8 fill-current"])}"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path></svg><span class="${ssrRenderClass([`text-white`, "varela text-xl font-semibold tracking-tight"])}">James Dordoy</span></div><div class="block lg:hidden"><button class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:bg-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeDarker} hover:border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeDarker}`, "flex items-center rounded border px-3 py-2"])}"><svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div><div class="${ssrRenderClass([{ "fadeIn ": open.value, hidden: !open.value }, "animated w-full flex-grow lg:flex lg:w-auto lg:items-center"])}"><div class="text-sm sm:flex-grow"><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#about")))}> About Me </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#projects")))}> My Projects </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#experiance")))}> What I&#39;ve Been Up To </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#contact")))}> Contact Me </a></div></div></nav></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/NavigationMenu.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NotificationGroup = resolveComponent("NotificationGroup");
  const _component_Notification = resolveComponent("Notification");
  _push(ssrRenderComponent(_component_NotificationGroup, mergeProps({ group: "toasts" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pointer-events-none fixed inset-0 z-50 flex items-start justify-end p-6 px-4 py-6"${_scopeId}><div class="w-full max-w-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Notification, {
          enter: "transform ease-out duration-300 transition",
          "enter-from": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",
          "enter-to": "translate-y-0 opacity-100 sm:translate-x-0",
          leave: "transition ease-in duration-500",
          "leave-from": "opacity-100",
          "leave-to": "opacity-0",
          move: "transition duration-500",
          "move-delay": "delay-300"
        }, {
          default: withCtx(({ notifications }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(notifications, (notification) => {
                _push3(`<div class="mx-auto mt-4 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"${_scopeId2}><div class="${ssrRenderClass([`bg-${notification.colour}-500`, "flex w-12 items-center justify-center"])}"${_scopeId2}><svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"${_scopeId2}></path></svg></div><div class="-mx-3 px-4 py-2"${_scopeId2}><div class="mx-3"${_scopeId2}><span class="${ssrRenderClass([`text-${notification.colour}-500`, "font-semibold"])}"${_scopeId2}>${ssrInterpolate(notification.title)}</span><p class="text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(notification.text)}</p></div></div></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(notifications, (notification) => {
                  return openBlock(), createBlock("div", {
                    key: notification.id,
                    class: "mx-auto mt-4 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
                  }, [
                    createVNode("div", {
                      class: ["flex w-12 items-center justify-center", `bg-${notification.colour}-500`]
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-6 w-6 fill-current text-white",
                        viewBox: "0 0 40 40",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" })
                      ]))
                    ], 2),
                    createVNode("div", { class: "-mx-3 px-4 py-2" }, [
                      createVNode("div", { class: "mx-3" }, [
                        createVNode("span", {
                          class: ["font-semibold", `text-${notification.colour}-500`]
                        }, toDisplayString(notification.title), 3),
                        createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(notification.text), 1)
                      ])
                    ])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "pointer-events-none fixed inset-0 z-50 flex items-start justify-end p-6 px-4 py-6" }, [
            createVNode("div", { class: "w-full max-w-sm" }, [
              createVNode(_component_Notification, {
                enter: "transform ease-out duration-300 transition",
                "enter-from": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",
                "enter-to": "translate-y-0 opacity-100 sm:translate-x-0",
                leave: "transition ease-in duration-500",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0",
                move: "transition duration-500",
                "move-delay": "delay-300"
              }, {
                default: withCtx(({ notifications }) => [
                  (openBlock(true), createBlock(Fragment, null, renderList(notifications, (notification) => {
                    return openBlock(), createBlock("div", {
                      key: notification.id,
                      class: "mx-auto mt-4 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
                    }, [
                      createVNode("div", {
                        class: ["flex w-12 items-center justify-center", `bg-${notification.colour}-500`]
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6 fill-current text-white",
                          viewBox: "0 0 40 40",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" })
                        ]))
                      ], 2),
                      createVNode("div", { class: "-mx-3 px-4 py-2" }, [
                        createVNode("div", { class: "mx-3" }, [
                          createVNode("span", {
                            class: ["font-semibold", `text-${notification.colour}-500`]
                          }, toDisplayString(notification.title), 3),
                          createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(notification.text), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ToastSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ToastSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BaseTag",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}> #${ssrInterpolate(__props.name)}</span>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/BaseTag.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "PortfolioTag",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "tag"
    }
  },
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({
        name: __props.name,
        class: [`text-${unref(store2).getters.primaryThemeTextColour}`, "mr-2 inline-block rounded border border-blue-500 py-1 px-2 text-xs"]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/PortfolioTag.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: __props.project.id,
        class: ["project h-full border sm:w-full", `bg-${unref(store2).getters.primaryThemeBgDarker} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`]
      }, _attrs))}><a${ssrRenderAttr("href", __props.project.link)} rel="noreferrer" target="_blank"><img style="${ssrRenderStyle({ "height": "250px" })}"${ssrRenderAttr("alt", __props.project.name)} class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "w-full border-b"])}"${ssrRenderAttr("src", __props.project.icon ? __props.project.icon : "/images/projects/simple-shopping.png")}></a><div class="px-6 py-4"><div class="mb-2 text-xl font-bold"><a${ssrRenderAttr("href", __props.project.link)} rel="noreferrer" class="text-blue-500 underline hover:no-underline" target="_blank">${ssrInterpolate(__props.project.name)}</a></div><p class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "text-base"])}">${ssrInterpolate(__props.project.description)}</p></div><div class="px-6 py-4"><!--[-->`);
      ssrRenderList(__props.project.tags, (tag) => {
        _push(ssrRenderComponent(_sfc_main$9, {
          key: tag.id,
          name: tag.taggable.name,
          class: "mt-2"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Project.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const swiper_min = "";
const navigation_min = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const modules = [Navigation];
    const breakpoints = {
      640: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 14
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 14
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 14
      }
    };
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span id="projects" class="jd-bookmark"></span><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> Projects </h2><section class="flex flex-wrap">`);
      _push(ssrRenderComponent(unref(Swiper), {
        navigation: "",
        modules,
        breakpoints
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.projects, (project) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: project.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$8, { project }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$8, { project }, null, 8, ["project"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.projects, (project) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: project.id
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$8, { project }, null, 8, ["project"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ProjectsSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const contact = {
      name: "",
      email: "",
      message: ""
    };
    const form = useForm(contact);
    const store2 = useStore();
    useReCaptcha();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="-mx-3 mb-6 flex flex-wrap"><div class="mb-6 w-full px-3 md:mb-0"><div class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "border-b"])}"><label for="contact_name" class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Name: </label><input id="contact_name"${ssrRenderAttr("value", unref(form).name)} type="text" name="name" placeholder="John Smith" class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker} text-${unref(store2).getters.primaryThemeTextColour} focus:bg-${unref(store2).getters.primaryThemeBgDarkest}`, "block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"])}"></div></div></div><div class="-mx-3 mb-6 flex flex-wrap"><div class="mb-6 w-full px-3 md:mb-0"><div class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "border-b"])}"><label for="contact_email" class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Email: </label><input id="contact_email"${ssrRenderAttr("value", unref(form).email)} name="email" type="email" class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker} text-${unref(store2).getters.primaryThemeTextColour} focus:bg-${unref(store2).getters.primaryThemeBgDarkest}`, "block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"])}" placeholder="john@example.com"></div></div></div><div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><div class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "border-b"])}"><label for="contact_message" class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Message: </label><textarea id="contact_message" rows="9" name="message" placeholder="Hello, World!" class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker} text-${unref(store2).getters.primaryThemeTextColour} focus:bg-${unref(store2).getters.primaryThemeBgDarkest}`, "block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"])}">${ssrInterpolate(unref(form).message)}</textarea></div></div></div><div class="-mx-3 flex flex-wrap pl-3"><button type="submit" class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:bg-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} hover:text-${unref(store2).getters.primaryThemeHoverTextColour}`, "g-recaptcha flex-shrink-0 rounded border bg-transparent py-1 px-2 text-sm"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "check"] }, null, _parent));
      _push(` Submit </button></div></form>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/ContactForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ContactMeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span id="contact" class="jd-bookmark"></span><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "varela mb-8 text-3xl"])}"> Contact Me </h2>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactMeSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Game",
  __ssrInlineRender: true,
  props: {
    clip: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        class: "min-h-96 h-96 w-full",
        src: __props.clip.url,
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: ""
      }, _attrs))}></iframe>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Game.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GamesSection",
  __ssrInlineRender: true,
  props: {
    gameClips: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const modules = [Navigation];
    const breakpoints = {
      640: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      1536: {
        slidesPerView: 1,
        spaceBetween: 14
      }
    };
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}><span id="games" class="jd-bookmark"></span><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> Game Clips </h2><section class="flex w-full flex-wrap overflow-hidden py-4 lg:pl-8">`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "mt-2",
        navigation: "",
        modules,
        breakpoints
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.gameClips, (clip, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, { clip }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4, { clip }, null, 8, ["clip"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.gameClips, (clip, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, { clip }, null, 8, ["clip"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GamesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TimelineEvent",
  __ssrInlineRender: true,
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      if (((_a = __props.event) == null ? void 0 : _a.id) & 1) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-row" }, _attrs))}><div class="w-4/5 py-10"><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarkest} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "flex w-full flex-col border-b px-4 py-5 shadow"])}"><div class="mb-2 flex justify-between text-gray-600"><div class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "font-bold"])}"><p class="mb-1 text-lg">${__props.event.name}</p> ${ssrInterpolate(__props.event.title)}</div><div class="flex flex-row"><button class="mr-2 text-blue-500 transition duration-200 hover:text-blue-300"><i class="far fa-edit"></i></button><button class="text-red-500 transition duration-200 hover:text-red-300"><i class="far fa-trash-alt"></i></button></div></div><p class="${ssrRenderClass(`text-${unref(store2).getters.primaryThemeTextColour}`)}">${__props.event.body}</p></div></div><div class="flex w-1/5 justify-center">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: ["m-auto text-5xl", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`],
          icon: __props.event.icon
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-row" }, _attrs))}><div class="flex w-1/5 justify-center">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: ["m-auto text-5xl", `text-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`],
          icon: __props.event.icon
        }, null, _parent));
        _push(`</div><div class="w-4/5 px-2 py-10"><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "flex w-full flex-col border-b px-4 py-5 shadow"])}"><div class="mb-2 flex justify-between text-gray-600"><div class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "font-bold"])}"><p class="mb-1 text-lg">${ssrInterpolate(__props.event.name)}</p> ${ssrInterpolate(__props.event.title)}</div></div><p class="${ssrRenderClass(`text-${unref(store2).getters.primaryThemeTextColour}`)}">${__props.event.body}</p></div></div></div>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/TimelineEvent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MyExperianceSection",
  __ssrInlineRender: true,
  props: {
    timeline: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const store2 = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span id="experiance" class="jd-bookmark"></span><h2 class="${ssrRenderClass([`text-${unref(store2).getters.primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> My Experience </h2><div class="timeline-container"><div class="${ssrRenderClass([`timeline-${unref(store2).getters.primaryThemeColour}`, "timeline"])}"><div class="min-h-screen"><div class="flex min-h-screen justify-center"><div class="mx-2 w-full"><!--[-->`);
      ssrRenderList(__props.timeline, (event) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, { event }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/MyExperianceSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      required: true
    },
    timeline: {
      type: Array,
      required: true
    },
    gameClips: {
      type: Array,
      required: true
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const store2 = useStore();
    const displaySettings = ref(false);
    const primaryThemeBg = computed(() => store2.getters.primaryThemeBg);
    const closeSettings = () => {
      displaySettings.value = false;
    };
    const removeFinishEventListener = router.on("finish", () => {
      if (isProxy(props.errors)) {
        const errors = toRaw(props.errors);
        const keys = Object.keys(errors);
        keys.reverse().forEach((key) => {
          notify(
            {
              group: "toasts",
              title: "Error",
              text: errors[key],
              colour: "red"
            },
            4e3
          );
        });
      }
    });
    onUnmounted(() => {
      removeFinishEventListener();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`<div id="settings-sidebar" class="${ssrRenderClass([`bg-${unref(primaryThemeBg)} border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade} ${displaySettings.value ? "" : "hidden"}`, "fixed top-[56px] min-h-full w-full border-r border-t py-2 shadow lg:top-[76px] lg:w-1/4"])}">`);
      _push(ssrRenderComponent(_sfc_main$d, { onToggle: closeSettings }, null, _parent));
      _push(`</div><div class="themeSettingsPanelToggleButton"><button aria-label="settings" class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "rounded-r p-2 text-lg text-white"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "cog" }, null, _parent));
      _push(`</button></div><div class="items-top relative min-h-screen flex-auto sm:pt-0"><div class="py-18 relative min-h-screen w-full px-10">`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`<div class="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-1/3"><div class="${ssrRenderClass([`border-${unref(store2).getters.primaryThemeColour}-${unref(store2).getters.primaryThemeColourShade}`, "front-into w-full md:mx-0 md:p-8"])}"><h1 class="varela text-2xl sm:text-3xl md:text-4xl">James Dordoy</h1><h2 class="varela sm:text-1xl text-lg md:text-2xl">Full Stack Developer</h2><p class="varela md:text-1xl sm:text-1xl">From Essex</p></div></div></div><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker}`, "w-full px-10 py-24"])}">`);
      _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBg}`, "w-full px-10 py-12"])}">`);
      _push(ssrRenderComponent(_sfc_main$7, { projects: __props.projects }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBgDarker}`, "w-full px-10 py-12"])}">`);
      _push(ssrRenderComponent(_sfc_main$1, { timeline: __props.timeline }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(store2).getters.primaryThemeBg}`, "flex w-full flex-wrap px-10 py-12"])}"><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_sfc_main$3, { "game-clips": __props.gameClips }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(ssrRenderComponent(ToastSection, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
const state = {
  primaryThemeColour: "blue",
  primaryThemeColourShade: 500,
  primaryTheme: "dark",
  acceptedGDRP: false,
  primaryThemeRouterAnimation: ""
};
const getters = {
  primaryThemeColour: (state2) => state2.primaryThemeColour,
  primaryThemeColourShade: (state2) => state2.primaryThemeColourShade,
  primaryThemeColourShadeLighter: (state2) => state2.primaryThemeColourShade - 200,
  primaryThemeColourShadeDarker: (state2) => state2.primaryThemeColourShade + 200,
  primaryTheme: (state2) => state2.primaryTheme,
  primaryThemeBg: (state2) => state2.primaryTheme === "light" ? "gray-100" : "slate-800",
  primaryThemeBgLighter: (state2) => state2.primaryTheme === "light" ? "gray-100" : "slate-700",
  primaryThemeBgDarker: (state2) => state2.primaryTheme === "light" ? "gray-200" : "slate-900",
  primaryThemeBgDarkest: (state2) => state2.primaryTheme === "light" ? "gray-300" : "black",
  primaryThemeBgParticlesColour: (state2) => state2.primaryTheme === "light" ? "gray" : "slate",
  primaryThemeBgParticlesColourShade: (state2) => state2.primaryTheme === "light" ? "100" : "800",
  primaryThemeTextColour: (state2) => state2.primaryTheme === "light" ? "gray-800" : "slate-400",
  primaryThemeHoverTextColour: (state2) => state2.primaryTheme === "light" ? "white" : "slate-900",
  primaryThemeRouterAnimation: (state2) => state2.primaryThemeRouterAnimation,
  hasUserAcceptedGDPR: (state2) => !!state2.acceptedGDRP
};
const mutations = {
  setPrimaryTheme(state2, theme) {
    state2.primaryTheme = theme;
  },
  setPrimaryThemeColor(state2, colour) {
    state2.primaryThemeColour = colour;
  },
  setPrimaryThemeColorShade(state2, shade) {
    state2.primaryThemeColourShade = shade;
  },
  setPrimaryThemeRouterAnimation(state2, animation) {
    state2.primaryThemeRouterAnimation = animation;
  },
  userAcceptedGDRP(state2) {
    state2.acceptedGDRP = true;
  }
};
const icons = [
  "faCog",
  "faList",
  "faTimes",
  "faSignInAlt",
  "faSignOutAlt",
  "faExclamationTriangle",
  "faCheck",
  "faDatabase",
  "faGithub",
  "faFacebook",
  "faTwitter",
  "faLinkedin",
  "faJsfiddle",
  "faBuilding",
  "faSchool",
  "faCode",
  "faNewspaper",
  "faForward",
  "faBackward"
];
async function loadFontAwesome() {
  for (let i2 = 0; i2 < icons.length; i2++) {
    try {
      const icon = import("@fortawesome/free-brands-svg-icons").then((module) => {
        return module[icons[i2]];
      });
      icon.then((thing) => {
        if (thing) {
          library.add(thing);
        }
      });
    } catch (e2) {
      if (i2 === 4) {
        console.log(e2);
      }
    }
    try {
      const icon = await import("@fortawesome/free-solid-svg-icons").then((module) => {
        return module[icons[i2]];
      });
      if (icon) {
        library.add(icon);
      }
    } catch (e2) {
      if (i2 === 4) {
        console.log(e2);
      }
    }
    try {
      const icon = await import("@fortawesome/free-regular-svg-icons").then((module) => {
        return module[icons[i2]];
      });
      if (icon) {
        library.add(icon);
      }
    } catch (e2) {
      if (i2 === 4) {
        console.log(e2);
      }
    }
  }
  return library;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = "object" == typeof T2 && void 0 !== T2.value ? T2.value : h2[T2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    return !!u2 && { params: u2.groups, query: D(i2) };
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), I = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new A(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const Ziggy$1 = { "url": "http://portfolio.test", "port": null, "defaults": {}, "routes": { "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "contact.store": { "uri": "contact", "methods": ["POST"] }, "newsletter.store": { "uri": "newsletter", "methods": ["POST"] }, "newsletter.destroy": { "uri": "newsletter/unsubscribe", "methods": ["GET", "HEAD"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
const store = createStore({
  plugins: [],
  state() {
    return state;
  },
  mutations,
  getters
});
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Home.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    async setup({ App, props, plugin }) {
      await loadFontAwesome();
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(store).use(Particles).use(VueScrollTo).use(Notifications).use(VueReCaptcha, { siteKey: {}.VITE_RECAPTCHA_SITE_KEY }).mixin({ methods: { route } }).use(I, Ziggy$1).component("font-awesome-icon", FontAwesomeIcon);
    }
  })
);
