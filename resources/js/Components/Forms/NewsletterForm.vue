<template>
    <div class="pt-2 md:flex md:items-center">
        <h4
            class="mb-1 pr-4 md:mb-0 md:text-right"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            <font-awesome-icon :icon="['fas', 'newspaper']" />
            &nbsp;Newsletter Signup:
        </h4>
    </div>
    <div class="py-2 md:flex md:items-center">
        <div class="md:w-full">
            <div class="flex items-center pb-4">
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    aria-label="Email Address"
                    class="mr-3 w-full border-none border-transparent bg-transparent py-1 px-2 leading-tight focus:border-transparent focus:ring-0"
                    :class="`text-${$store.getters.primaryThemeTextColour}`"
                />
                <button
                    class="flex-shrink-0 rounded border bg-transparent py-1 px-2 text-sm"
                    type="button"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                    @click="submit"
                >
                    <font-awesome-icon :icon="['fas', 'check']" />
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { notify } from 'notiwind';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('newsletter.store'), {
        preserveScroll: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
            notify(
                {
                    group: 'toasts',
                    title: 'Success',
                    text: `${form.email}, thanks for signing up!`,
                    colour: 'green',
                },
                4000
            );

            form.reset();
        },
    });
};
</script>
