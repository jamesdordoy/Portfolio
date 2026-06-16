import { describe, expect, it, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { usePortfolioStore } from '@/stores/index';

describe('usePortfolioStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe('initial state', () => {
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

    describe('getters', () => {
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
