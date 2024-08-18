<script lang="ts" setup>
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';
import ContactForm from '@/Components/Forms/ContactForm.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();
</script>

<template>
    <section>
        <BaseBookmark
            id="contact"
            class="jd-bookmark"
        />
        <h2
            class="varela mb-8 text-3xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Contact Me
        </h2>
        <ContactForm />
    </section>
</template>
