import { defineStore } from 'pinia';
import colours from 'tailwindcss/colors';

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        primaryThemeColour: 'blue',
        primaryThemeColourShade: 500,
        primaryTheme: 'dark',
        acceptedGDRP: false,
        primaryThemeRouterAnimation: '',
        particleOptions: {
            
        }
    }),

    actions: {
        userAcceptedGDRP(state): void {
            state.acceptedGDRP = true;
        },
    },
    getters: {
        primaryThemeColourShadeLighter: (state) => state.primaryThemeColourShade - 200,
        primaryThemeColourShadeDarker: (state) => state.primaryThemeColourShade + 200,
        primaryThemeBg: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-800'),
        primaryThemeBgLighter: (state) => (state.primaryTheme === 'light' ? 'gray-100' : 'slate-700'),
        primaryThemeBgDarker: (state) => (state.primaryTheme === 'light' ? 'gray-200' : 'slate-900'),
        primaryThemeBgDarkest: (state) => (state.primaryTheme === 'light' ? 'gray-300' : 'black'),
        primaryThemeBgParticlesColour: (state) => (state.primaryTheme === 'light' ? 'gray' : 'slate'),
        primaryThemeBgParticlesColourShade: (state) => (state.primaryTheme === 'light' ? '100' : '800'),
        primaryThemeTextColour: (state) => (state.primaryTheme === 'light' ? 'gray-800' : 'slate-400'),
        primaryThemeHoverTextColour: (state) => (state.primaryTheme === 'light' ? 'white' : 'slate-900'),
        hasUserAcceptedGDPR: (state) => !!state.acceptedGDRP,
        getParticleOptions: (state) => {

            const bgThemeColour = state.primaryTheme === 'light' ? 'gray' : 'slate';
            const bgThemeShade = state.primaryTheme === 'light' ? '100' : '800';

            const themeColour = state.primaryThemeColour;
            const themeShade = state.primaryThemeColourShade;

            return {
                background: {
                    color: {
                        value: colours[bgThemeColour][bgThemeShade],
                    },
                },
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: colours[themeColour][themeShade],
                    },
                    links: {
                        color: colours[themeColour][themeShade],
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }
            
        }
    },
    persist: true,
});
