import { describe, expect, it, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { usePortfolioStore } from '@/Stores/index';

describe('usePortfolioStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe('initial state', () => {
        it('has blue as the default primary colour', () => {
            expect(usePortfolioStore().primaryThemeColour).toBe('blue');
        });

        it('has 500 as the default colour shade', () => {
            expect(usePortfolioStore().primaryThemeColourShade).toBe(500);
        });

        it('defaults to dark theme', () => {
            expect(usePortfolioStore().primaryTheme).toBe('dark');
        });

        it('has GDPR not accepted by default', () => {
            expect(usePortfolioStore().acceptedGDRP).toBe(false);
        });
    });

    describe('actions', () => {
        it('userAcceptedGDRP sets acceptedGDRP to true', () => {
            const store = usePortfolioStore();
            store.userAcceptedGDRP();
            expect(store.acceptedGDRP).toBe(true);
        });
    });

    describe('getters — shade arithmetic', () => {
        it('primaryThemeColourShadeLighter subtracts 200', () => {
            const store = usePortfolioStore();
            expect(store.primaryThemeColourShadeLighter).toBe(300);
        });

        it('primaryThemeColourShadeDarker adds 200', () => {
            const store = usePortfolioStore();
            expect(store.primaryThemeColourShadeDarker).toBe(700);
        });
    });

    describe('getters — dark theme', () => {
        it('primaryThemeBg returns slate-800', () => {
            expect(usePortfolioStore().primaryThemeBg).toBe('slate-800');
        });

        it('primaryThemeBgLighter returns slate-700', () => {
            expect(usePortfolioStore().primaryThemeBgLighter).toBe('slate-700');
        });

        it('primaryThemeBgDarker returns slate-900', () => {
            expect(usePortfolioStore().primaryThemeBgDarker).toBe('slate-900');
        });

        it('primaryThemeBgDarkest returns black', () => {
            expect(usePortfolioStore().primaryThemeBgDarkest).toBe('black');
        });

        it('primaryThemeTextColour returns slate-400', () => {
            expect(usePortfolioStore().primaryThemeTextColour).toBe('slate-400');
        });

        it('primaryThemeHoverTextColour returns slate-900', () => {
            expect(usePortfolioStore().primaryThemeHoverTextColour).toBe('slate-900');
        });
    });

    describe('getters — light theme', () => {
        it('primaryThemeBg returns gray-100', () => {
            const store = usePortfolioStore();
            store.primaryTheme = 'light';
            expect(store.primaryThemeBg).toBe('gray-100');
        });

        it('primaryThemeBgDarker returns gray-200', () => {
            const store = usePortfolioStore();
            store.primaryTheme = 'light';
            expect(store.primaryThemeBgDarker).toBe('gray-200');
        });

        it('primaryThemeBgDarkest returns gray-300', () => {
            const store = usePortfolioStore();
            store.primaryTheme = 'light';
            expect(store.primaryThemeBgDarkest).toBe('gray-300');
        });

        it('primaryThemeTextColour returns gray-800', () => {
            const store = usePortfolioStore();
            store.primaryTheme = 'light';
            expect(store.primaryThemeTextColour).toBe('gray-800');
        });
    });

    describe('getters — GDPR', () => {
        it('hasUserAcceptedGDPR is false initially', () => {
            expect(usePortfolioStore().hasUserAcceptedGDPR).toBe(false);
        });

        it('hasUserAcceptedGDPR is true after accepting', () => {
            const store = usePortfolioStore();
            store.userAcceptedGDRP();
            expect(store.hasUserAcceptedGDPR).toBe(true);
        });
    });
});
