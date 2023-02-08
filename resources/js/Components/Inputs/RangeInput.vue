<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

let value = ref(store.getters.primaryThemeColourShade);

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    value.value = target.value;
};
</script>

<template>
    <input
        :value="value"
        :class="`bg-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
        class="h-3 w-full appearance-none overflow-hidden rounded-lg outline-none"
        type="range"
        min="100"
        max="900"
        step="100"
        @input="onInput"
    />
</template>
