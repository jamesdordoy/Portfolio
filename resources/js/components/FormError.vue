<template>
    <div class="text-left text-grey mt-2">
        <template v-if="errors.length">
            <span
                v-for="error in errors"
                :key="error"
                :class="`text-${$store.getters.primaryThemeTextColour}`"
            >
                <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
                {{ error }}
            </span>
            <br />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        errors: {
            type: Array,
            default() {
                return [];
            },
        },
    },
};
</script>
