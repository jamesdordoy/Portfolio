<template>
    <input
        :value="value"
        @input="onInput"
        :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
        class="rounded-lg overflow-hidden appearance-none h-3 w-full outline-none" type="range" min="100" max="900" step="100" value="100" />
</template>

<script>
export default {
    data() {
        return {
            value: this.$store.getters.primaryThemeColourShade,
        };
    },
    methods: {
        onInput(event) {
            this.value = event.target.value;
            this.$emit("input", event.target.value);
        }
    }
}
</script>
