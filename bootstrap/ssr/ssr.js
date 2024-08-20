import { defineComponent, resolveComponent, unref, useSSRContext, mergeProps, ref, resolveDirective, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed, createSSRApp, h } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "notiwind";
import { useForm } from "laravel-precognition-vue-inertia";
import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
import { defineStore, createPinia } from "pinia";
import colours from "tailwindcss/colors.js";
import { faNewspaper, faCheck, faTimes, faCode, faBuilding, faSchool, faCog } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faJsfiddle } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VueScrollTo from "vue-scrollto";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { route, ZiggyVue } from "ziggy-js";
const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    primaryThemeColour: "blue",
    primaryThemeColourShade: 500,
    primaryTheme: "dark",
    acceptedGDRP: false,
    primaryThemeRouterAnimation: "",
    particleOptions: {}
  }),
  actions: {
    userAcceptedGDRP(state) {
      state.acceptedGDRP = true;
    }
  },
  getters: {
    primaryThemeColourShadeLighter: (state) => state.primaryThemeColourShade - 200,
    primaryThemeColourShadeDarker: (state) => state.primaryThemeColourShade + 200,
    primaryThemeBg: (state) => state.primaryTheme === "light" ? "gray-100" : "slate-800",
    primaryThemeBgLighter: (state) => state.primaryTheme === "light" ? "gray-100" : "slate-700",
    primaryThemeBgDarker: (state) => state.primaryTheme === "light" ? "gray-200" : "slate-900",
    primaryThemeBgDarkest: (state) => state.primaryTheme === "light" ? "gray-300" : "black",
    primaryThemeBgParticlesColour: (state) => state.primaryTheme === "light" ? "gray" : "slate",
    primaryThemeBgParticlesColourShade: (state) => state.primaryTheme === "light" ? "100" : "800",
    primaryThemeTextColour: (state) => state.primaryTheme === "light" ? "gray-800" : "slate-400",
    primaryThemeHoverTextColour: (state) => state.primaryTheme === "light" ? "white" : "slate-900",
    hasUserAcceptedGDPR: (state) => !!state.acceptedGDRP,
    getParticleOptions: (state) => {
      const bgThemeColour = state.primaryTheme === "light" ? "gray" : "slate";
      const bgThemeShade = state.primaryTheme === "light" ? "100" : "800";
      const themeColour = state.primaryThemeColour;
      const themeShade = state.primaryThemeColourShade;
      return {
        background: {
          color: {
            value: colours[bgThemeColour][bgThemeShade]
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
            value: colours[themeColour][themeShade]
          },
          links: {
            color: colours[themeColour][themeShade],
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
      };
    }
  },
  persist: true
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "NewsletterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    const newsletter = {
      email: ""
    };
    const form = useForm("post", "/newsletter", newsletter);
    useReCaptcha();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[--><div class="pt-2 md:flex md:items-center"><h4 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-1 pr-4 md:mb-0 md:text-right"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: unref(faNewspaper) }, null, _parent));
      _push(`  Newsletter Signup: </h4></div><div class="py-2 md:flex md:items-center"><div class="md:w-full"><div class="flex items-center pb-2"><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="john@example.com" aria-label="Email Address" class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mr-3 w-full border-none border-transparent bg-transparent px-2 py-1 leading-tight focus:border-transparent focus:ring-0"])}"><button type="button" class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeHoverTextColour}`, "flex-shrink-0 rounded border bg-transparent px-2 py-1 text-sm"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: unref(faCheck) }, null, _parent));
      _push(` Sign Up </button></div><div style="${ssrRenderStyle(unref(form).invalid("email") ? null : { display: "none" })}" class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">${ssrInterpolate(unref(form).errors.email)}</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/NewsletterForm.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap border-t px-10 py-3 lg:p-10", `bg-${unref(portfolioStore).primaryThemeBgDarker} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`]
      }, _attrs))}><div class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "w-full border-b lg:w-1/3"])}"><p class="mt-2"><a aria-label="facebook" href="https://www.facebook.com/dordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(faFacebook),
        class: ["text-4xl hover:text-blue-700 lg:text-5xl", `text-${unref(portfolioStore).primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="twitter" href="https://twitter.com/JDordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(faTwitter),
        class: ["text-4xl hover:text-blue-400 lg:text-5xl", `text-${unref(portfolioStore).primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="linkedin" href="https://www.linkedin.com/in/james-dordoy-a80686110/" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(faLinkedin),
        class: ["text-4xl hover:text-blue-500 lg:text-5xl", `text-${unref(portfolioStore).primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="github" href="https://github.com/jamesdordoy" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(faGithub),
        class: ["text-4xl hover:text-gray-500 lg:text-5xl", `text-${unref(portfolioStore).primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a><span class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "inline-block p-2"])}">-</span><a aria-label="jsfiddle" href="https://jsfiddle.net/user/JamesDordoy/fiddles/" rel="noreferrer" target="_blank">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: unref(faJsfiddle),
        class: ["text-4xl hover:text-yellow-500 lg:text-5xl", `text-${unref(portfolioStore).primaryThemeTextColour}`]
      }, null, _parent));
      _push(`</a></p></div><div class="varela w-full py-6 text-center text-gray-400 sm:text-left lg:w-1/3 lg:py-0 lg:pt-2 lg:text-center"><h3 class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">© James Dordoy</h3><p class="my-2">${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p></div><div class="w-full lg:w-1/3"><div id="newsletter" class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "border-b"])}">`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div></div></footer>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Footer.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "RetroBackground",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "retrobg",
        class: "min-h-screen"
      }, _attrs))}><div id="retrobg-sky"><div id="retrobg-stars"><div class="retrobg-star" style="${ssrRenderStyle({ "left": "5%", "top": "55%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "7%", "top": "5%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "10%", "top": "45%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "12%", "top": "35%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "15%", "top": "39%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "20%", "top": "10%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "35%", "top": "50%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "40%", "top": "16%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "43%", "top": "28%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "45%", "top": "30%", "transform": "scale(3)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "55%", "top": "18%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "60%", "top": "23%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "62%", "top": "44%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "67%", "top": "27%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "75%", "top": "10%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "80%", "top": "25%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "83%", "top": "57%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "90%", "top": "29%", "transform": "scale(2)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "95%", "top": "5%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "96%", "top": "72%", "transform": "scale(1)" })}"></div><div class="retrobg-star" style="${ssrRenderStyle({ "left": "98%", "top": "70%", "transform": "scale(3)" })}"></div></div><div id="retrobg-sunWrap"><div id="retrobg-sun"></div></div><div id="retrobg-mountains"><div id="retrobg-mountains-left" class="retrobg-mountain"></div><div id="retrobg-mountains-right" class="retrobg-mountain"></div></div><div id="retrobg-cityWrap"><div id="retrobg-city"><div style="${ssrRenderStyle({ "left": "4%", "height": "20%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "6%", "height": "50%", "width": "1.5%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "8%", "height": "25%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "12%", "height": "30%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "13%", "height": "55%", "width": "3%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "17%", "height": "20%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "18.5%", "height": "70%", "width": "1.5%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "20%", "height": "30%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "21.5%", "height": "80%", "width": "2%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "25%", "height": "60%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "28%", "height": "40%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "30%", "height": "70%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "35%", "height": "65%", "width": "4%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "38%", "height": "40%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "42%", "height": "60%", "width": "2%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "43%", "height": "85%", "width": "4%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "45%", "height": "40%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "48%", "height": "25%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "50%", "height": "80%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "52%", "height": "32%", "width": "5%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "55%", "height": "55%", "width": "3%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "58%", "height": "45%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "61%", "height": "90%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "66%", "height": "99%", "width": "4%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "69%", "height": "30%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "73.5%", "height": "90%", "width": "2%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "72%", "height": "70%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "75%", "height": "60%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "80%", "height": "40%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "83%", "height": "70%", "width": "4%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "87%", "height": "60%", "width": "3%" })}" class="retrobg-building retrobg-antenna"></div><div style="${ssrRenderStyle({ "left": "93%", "height": "50%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "91%", "height": "30%", "width": "4%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "94%", "height": "20%", "width": "3%" })}" class="retrobg-building"></div><div style="${ssrRenderStyle({ "left": "98%", "height": "35%", "width": "2%" })}" class="retrobg-building"></div></div></div></div><div class="${ssrRenderClass(`border-t border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`)}" id="retrobg-ground"><div id="retrobg-linesWrap"><div id="retrobg-lines"><div id="retrobg-vlines"><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-vline"])}"></div></div><div id="retrobg-hlines"><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "retrobg-hline"])}"></div></div></div></div><div id="retrobg-groundShadow"></div></div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/RetroBackground.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "BaseBookmark",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: "bookmark"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: __props.class
      }, _attrs))}></span>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/BaseBookmark.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AboutMeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        id: "about",
        class: "jd-bookmark"
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "varela mb-16 text-center text-4xl text-gray-400"])}"> About Me </h2><p class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-8 text-center text-xl"])}"> Hey, my name is James and im a Software Enginer living in Essex. I have been developing software for fifteen years now and i have a large range of experience from creating simple Android applications, static websites and Microsoft Excel dashboards to working on larger scale SaSS, CMS and CRM applications using PHP, Inertia, Laravel with Vue and Typescript. </p><br><p class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-8 text-center text-xl"])}"> Since leaving University, i have mainly been working with PHP &amp; Laravel. I also have a solid background in JavaScript &amp; Java but picking up a difference langauge isn&#39;t a problem. I am profitiant at writting procedual, object orianted and functional code which provides many different techniques for cleaning up my work. I am currently picking up TypeScript and enjoying the benifits as it enables me to write stricter code to overcome some of the limitations that JavaScript present such as Type Inference. </p><div class="mb-8 flex items-center justify-center"><img src="/storage/images/me.jpeg" alt="James Dordoy - Me" class="rounded-full"></div><p class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "text-center text-xl"])}"> I am a huge Snooker fan and also enjoying playing competitive First Person Shooter games. I also like learning about hardware and electronics and would love to pick up more basics to create simple robots. I have always wanted to learn to play a musical instrument or make YouTube tutorials based on my programming knowledge but have never got around to it. </p></section>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/AboutMeSection.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "BaseColourButton",
  __ssrInlineRender: true,
  props: {
    colour: {
      type: String,
      default: "blue"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: `p-5 bg-${__props.colour}-500 rounded`
      }, _attrs))}></button>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/BaseColourButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RangeInput",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    let value = ref(portfolioStore.primaryThemeColourShade);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: unref(value),
        class: [`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "h-3 w-full appearance-none overflow-hidden rounded-lg outline-none"],
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
  setup(__props, { emit: __emit }) {
    const portfolioStore = usePortfolioStore();
    const updatePrimaryThemeColour = (colour) => {
      portfolioStore.primaryThemeColour = colour;
    };
    const updatePrimaryThemeColourShade = (event) => {
      var _a;
      portfolioStore.primaryThemeColourShade = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap px-3 py-2"><div class="w-4/6"><h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "text-xl"])}"> Theme Settings </h2></div><div class="w-2/6"><button class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "float-right mt-1"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: unref(faTimes) }, null, _parent));
      _push(`</button></div></div><hr class="my-1"><div class="flex flex-wrap px-3 py-2"><div class="w-full"><h3 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-2 text-lg"])}"> Theme Colour </h3></div><div class="w-full"><div class="flex flex-wrap"><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "blue",
        onClick: ($event) => updatePrimaryThemeColour("blue")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "teal",
        onClick: ($event) => updatePrimaryThemeColour("teal")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "purple",
        onClick: ($event) => updatePrimaryThemeColour("purple")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "green",
        onClick: ($event) => updatePrimaryThemeColour("green")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "red",
        onClick: ($event) => updatePrimaryThemeColour("red")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "orange",
        onClick: ($event) => updatePrimaryThemeColour("orange")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "yellow",
        onClick: ($event) => updatePrimaryThemeColour("yellow")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "indigo",
        onClick: ($event) => updatePrimaryThemeColour("indigo")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "pink",
        onClick: ($event) => updatePrimaryThemeColour("pink")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "lime",
        onClick: ($event) => updatePrimaryThemeColour("lime")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "sky",
        onClick: ($event) => updatePrimaryThemeColour("sky")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "emerald",
        onClick: ($event) => updatePrimaryThemeColour("emerald")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "stone",
        onClick: ($event) => updatePrimaryThemeColour("stone")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "zinc",
        onClick: ($event) => updatePrimaryThemeColour("zinc")
      }, null, _parent));
      _push(`</div><div class="w-1/6 p-1">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        colour: "slate",
        onClick: ($event) => updatePrimaryThemeColour("slate")
      }, null, _parent));
      _push(`</div></div><hr class="my-2"><div class="w-full"><h3 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-2 text-lg"])}"> Theme Colour Shade </h3></div><div class="w-full"><div class="relative block">`);
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
    const portfolioStore = usePortfolioStore();
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_scroll_to = resolveDirective("scroll-to");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "z-10 font-sans antialiased" }, _attrs))}><nav class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "front-nav"])}"><div class="flex-no-shrink mr-6 flex items-center text-white"><svg width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "mr-2 h-8 w-8 fill-current"])}"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path></svg><span class="${ssrRenderClass([`text-white`, "varela text-xl font-semibold tracking-tight"])}">James Dordoy</span></div><div class="block lg:hidden"><button class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeDarker} hover:border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeDarker}`, "flex items-center rounded border px-3 py-2"])}"><svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div><div class="${ssrRenderClass([{ "fadeIn ": open.value, hidden: !open.value }, "animated w-full flex-grow lg:flex lg:w-auto lg:items-center"])}"><div class="text-sm sm:flex-grow"><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#about")))}> About Me </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#projects")))}> My Projects </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#experiance")))}> What I&#39;ve Been Up To </a><a${ssrRenderAttrs(mergeProps({
        class: ["front-nav-item lg:mt-0 lg:inline-block", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShadeLighter}`]
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, "#contact")))}> Contact Me </a></div></div></nav></header>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/NavigationMenu.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/BaseTag.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PortfolioTag",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "tag"
    }
  },
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$b, mergeProps({
        name: __props.name,
        class: [`text-${unref(portfolioStore).primaryThemeTextColour}`, "tag"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/PortfolioTag.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        key: __props.project.id,
        class: ["project", `bg-${unref(portfolioStore).primaryThemeBgDarker} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`]
      }, _attrs))}><a${ssrRenderAttr("href", __props.project.link)} rel="noreferrer" target="_blank"><img${ssrRenderAttr("alt", __props.project.name)} class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "project-image"])}"${ssrRenderAttr("src", __props.project.icon ? __props.project.icon : "/images/projects/simple-shopping.png")}></a><div class="px-6 py-4"><div class="mb-2 text-xl font-bold"><a${ssrRenderAttr("href", __props.project.link)} rel="noreferrer" class="project-name" target="_blank">${ssrInterpolate(__props.project.name)}</a></div><p class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "text-base"])}">${ssrInterpolate(__props.project.description)}</p></div><div class="px-6 py-4"><!--[-->`);
      ssrRenderList(__props.project.tags, (tag) => {
        _push(ssrRenderComponent(_sfc_main$a, {
          key: tag.id,
          name: tag.taggable.name,
          class: "mt-2"
        }, null, _parent));
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Generic/Project.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const portfolioStore = usePortfolioStore();
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        id: "projects",
        class: "jd-bookmark"
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> Projects </h2><div class="flex flex-wrap">`);
      _push(ssrRenderComponent(unref(Swiper), {
        navigation: "",
        modules,
        breakpoints
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.projects, (project, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: `project_${i}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$9, { project }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$9, { project }, null, 8, ["project"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.projects, (project, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: `project_${i}`
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$9, { project }, null, 8, ["project"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ProjectsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BaseFormInputError",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.form.invalid(__props.name)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(__props.form.errors[__props.name])}</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/BaseFormInputError.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const portfolioStore = usePortfolioStore();
    const contact = {
      name: "",
      email: "",
      message: ""
    };
    const form = useForm("post", "/contact", contact);
    useReCaptcha();
    computed(() => {
      const bgClass = `bg-${portfolioStore.primaryThemeBgDarker}`;
      const textClass = `text-${portfolioStore.primaryThemeTextColour}`;
      const focusBgClass = `focus:bg-${portfolioStore.primaryThemeBgDarkest}`;
      return `block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none ${bgClass} ${textClass} ${focusBgClass}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="-mx-3 mb-6 flex flex-wrap"><div class="mb-6 w-full px-3 md:mb-0"><div class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "border-b"])}"><label for="contact_name" class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Name: </label><input id="contact_name"${ssrRenderAttr("value", unref(form).name)} type="text" name="name" placeholder="John Smith" class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker} text-${unref(portfolioStore).primaryThemeTextColour} focus:bg-${unref(portfolioStore).primaryThemeBgDarkest}`, "block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none"])}"></div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        name: "name",
        form: unref(form),
        class: `text-${unref(portfolioStore).primaryThemeTextColour}`
      }, null, _parent));
      _push(`</div></div><div class="-mx-3 mb-6 flex flex-wrap"><div class="mb-6 w-full px-3 md:mb-0"><div class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "border-b"])}"><label for="contact_email" class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Email: </label><input id="contact_email"${ssrRenderAttr("value", unref(form).email)} name="email" type="email" class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker} text-${unref(portfolioStore).primaryThemeTextColour} focus:bg-${unref(portfolioStore).primaryThemeBgDarkest}`, "block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none"])}" placeholder="john@example.com"></div><div style="${ssrRenderStyle(unref(form).invalid("email") ? null : { display: "none" })}" class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">${ssrInterpolate(unref(form).errors.email)}</div></div></div><div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><div class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "border-b"])}"><label for="contact_message" class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "mb-2 block text-xs font-bold uppercase tracking-wide"])}"> Message: </label><textarea id="contact_message" class="${ssrRenderClass({
        "block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none": true,
        [`bg-${unref(portfolioStore).primaryThemeBgDarker}`]: true,
        [`text-${unref(portfolioStore).primaryThemeTextColour}`]: true,
        [`focus:bg-${unref(portfolioStore).primaryThemeBgDarkest}`]: true
      })}" rows="9" name="message" placeholder="Hello, World!">${ssrInterpolate(unref(form).message)}</textarea></div><div style="${ssrRenderStyle(unref(form).invalid("message") ? null : { display: "none" })}" class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">${ssrInterpolate(unref(form).errors.message)}</div></div></div><div class="-mx-3 flex flex-wrap pl-3"><button type="submit" class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} hover:text-${unref(portfolioStore).primaryThemeHoverTextColour}`, "g-recaptcha flex-shrink-0 rounded border bg-transparent px-2 py-1 text-sm"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: unref(faCheck) }, null, _parent));
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
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        id: "contact",
        class: "jd-bookmark"
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "varela mb-8 text-3xl"])}"> Contact Me </h2>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</section>`);
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
        class: "game",
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
    const portfolioStore = usePortfolioStore();
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        id: "games",
        class: "jd-bookmark"
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> Game Clips </h2><div class="flex w-full flex-wrap overflow-hidden py-4 lg:pl-8">`);
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
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: `game_${index}`
              }, {
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
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: `game_${index}`
                }, {
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
      _push(`</div></section>`);
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
    const icons = {
      code: faCode,
      building: faBuilding,
      school: faSchool
    };
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      if (((_a = __props.event) == null ? void 0 : _a.id) & 1) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-row" }, _attrs))}><div class="w-4/5 py-10"><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarkest} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "flex w-full flex-col border-b px-4 py-5 shadow"])}"><div class="mb-2 flex justify-between text-gray-600"><div class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "font-bold"])}"><p class="mb-1 text-lg">${__props.event.name ?? ""}</p> ${ssrInterpolate(__props.event.title)}</div><div class="flex flex-row"><button class="mr-2 text-blue-500 transition duration-200 hover:text-blue-300"><i class="far fa-edit"></i></button><button class="text-red-500 transition duration-200 hover:text-red-300"><i class="far fa-trash-alt"></i></button></div></div><p class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">${__props.event.body ?? ""}</p></div></div><div class="flex w-1/5 justify-center">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: ["m-auto text-5xl", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`],
          icon: icons[__props.event.icon]
        }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-row" }, _attrs))}><div class="flex w-1/5 justify-center">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: ["m-auto text-5xl", `text-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`],
          icon: icons[__props.event.icon]
        }, null, _parent));
        _push(`</div><div class="w-4/5 px-2 py-10"><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "flex w-full flex-col border-b px-4 py-5 shadow"])}"><div class="mb-2 flex justify-between text-gray-600"><div class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "font-bold"])}"><p class="mb-1 text-lg">${ssrInterpolate(__props.event.name)}</p> ${ssrInterpolate(__props.event.title)}</div></div><p class="${ssrRenderClass(`text-${unref(portfolioStore).primaryThemeTextColour}`)}">${__props.event.body ?? ""}</p></div></div></article>`);
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
    const portfolioStore = usePortfolioStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        id: "experiance",
        class: "jd-bookmark"
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([`text-${unref(portfolioStore).primaryThemeTextColour}`, "varela mb-8 text-center text-3xl"])}"> My Experience </h2><div class="timeline-container"><div class="${ssrRenderClass([`timeline-${unref(portfolioStore).primaryThemeColour}`, "timeline"])}"><div class="min-h-screen"><div class="flex min-h-screen justify-center"><div class="mx-2 w-full"><!--[-->`);
      ssrRenderList(__props.timeline, (event) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, { event }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
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
  __name: "HomePage",
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
    const portfolioStore = usePortfolioStore();
    const displaySettings = ref(false);
    const closeSettings = () => {
      displaySettings.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`<div id="settings-sidebar" class="${ssrRenderClass(`bg-${unref(portfolioStore).primaryThemeBg} border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade} ${displaySettings.value ? "" : "hidden"}`)}">`);
      _push(ssrRenderComponent(_sfc_main$d, { onToggle: closeSettings }, null, _parent));
      _push(`</div><div class="themeSettingsPanelToggleButton"><button aria-label="settings" class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "rounded-r p-2 text-lg text-white"])}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: unref(faCog) }, null, _parent));
      _push(`</button></div><div class="items-top relative min-h-screen flex-auto sm:pt-0"><div class="py-18 relative min-h-screen w-full">`);
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`<div class="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-1/3"><div class="${ssrRenderClass([`border-${unref(portfolioStore).primaryThemeColour}-${unref(portfolioStore).primaryThemeColourShade}`, "front-into w-full md:mx-0 md:p-8"])}"><h1 class="varela text-2xl sm:text-3xl md:text-4xl">James Dordoy</h1><h2 class="varela sm:text-1xl text-lg md:text-2xl">Full Stack Developer</h2><p class="varela md:text-1xl sm:text-1xl">From Essex</p></div></div></div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker}`, "w-full px-10 py-24"])}">`);
      _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBg}`, "w-full px-10 py-12"])}">`);
      _push(ssrRenderComponent(_sfc_main$8, { projects: __props.projects }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBgDarker}`, "w-full px-10 py-12"])}">`);
      _push(ssrRenderComponent(_sfc_main$1, { timeline: __props.timeline }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([`bg-${unref(portfolioStore).primaryThemeBg}`, "flex w-full flex-wrap px-10 py-12"])}"><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(_sfc_main$3, { "game-clips": __props.gameClips }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = {
  url: "http://portfolio.test",
  port: null,
  defaults: {},
  routes: {
    "ignition.healthCheck": { uri: "_ignition/health-check", methods: ["GET", "HEAD"] },
    "ignition.executeSolution": { uri: "_ignition/execute-solution", methods: ["POST"] },
    "ignition.updateConfig": { uri: "_ignition/update-config", methods: ["POST"] },
    home: { uri: "/", methods: ["GET", "HEAD"] },
    "newsletter.destroy": { uri: "newsletter/unsubscribe", methods: ["GET", "HEAD"] },
    "contact.store": { uri: "contact", methods: ["POST"] },
    "newsletter.store": { uri: "newsletter", methods: ["POST"] }
  }
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/HomePage.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).component("font-awesome-icon", FontAwesomeIcon).use(plugin).use(pinia).use(VueScrollTo).use(VueReCaptcha, { siteKey: "6Lefr8YZAAAAAGORNbgShocEow3cSweBT04iMFFY" }).mixin({ methods: { route } }).use(ZiggyVue, Ziggy);
    }
  })
);
