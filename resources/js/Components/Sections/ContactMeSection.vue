<script lang="ts" setup>
import ContactForm from '@/Components/Forms/ContactForm.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();
</script>

<template>
    <div>
        <span
            id="contact"
            class="jd-bookmark"
        >
        </span>
        <h2
            class="varela mb-8 text-3xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Contact Me
        </h2>
        <ContactForm />
    </div>
</template>
