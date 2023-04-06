<script lang="ts" setup>
import ContactForm from '@/Components/forms/ContactForm.vue';
import { useStore } from 'vuex';

const store = useStore();
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
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            Contact Me
        </h2>
        <ContactForm />
    </div>
</template>
