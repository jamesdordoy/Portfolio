import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        acceptedGDRP: false,
    }),
    actions: {
        userAcceptedGDRP(): void {
            this.acceptedGDRP = true;
        },
    },
    getters: {
        hasUserAcceptedGDPR: (state) => !!state.acceptedGDRP,
    },
    persist: true,
});
