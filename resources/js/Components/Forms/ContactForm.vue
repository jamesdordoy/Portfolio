<script lang="ts" setup>
import axios from 'axios';
import { notify } from 'notiwind';
import { useForm } from '@inertiajs/vue3';
import { useStore } from 'vuex';
import { useReCaptcha } from 'vue-recaptcha-v3';

import route from 'ziggy-js';

const contact: App.Models.Data.Contact = {
    name: '',
    email: '',
    message: '',
};

const form = useForm(contact);

const store = useStore();

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const submit = async () => {
    await recaptchaLoaded();

    const token = await executeRecaptcha('login');

    const response = await axios.get(`/recaptcha/validate`, {
        params: {
            token,
        },
    });

    if (response.data.success) {
        form.post(route('contact.store'), {
            preserveScroll: (page) => !!Object.keys(page.props.errors).length,
            onSuccess: () => {
                notify(
                    {
                        group: 'toasts',
                        title: 'Success',
                        text: `${form.email}, thanks for messaging me!`,
                        colour: 'green',
                    },
                    4000
                );

                form.reset();
            },
        });
    }
};
</script>

<template>
    <form
        class="w-full"
        @submit.prevent="submit"
    >
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0">
                <div
                    class="border-b"
                    :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_name"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${store.getters.primaryThemeTextColour}`"
                    >
                        Name:
                    </label>
                    <input
                        id="contact_name"
                        v-model="form.name"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        :class="`bg-${store.getters.primaryThemeBgDarker} text-${store.getters.primaryThemeTextColour} focus:bg-${store.getters.primaryThemeBgDarkest}`"
                        class="block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"
                    />
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0">
                <div
                    class="border-b"
                    :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_email"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${store.getters.primaryThemeTextColour}`"
                    >
                        Email:
                    </label>
                    <input
                        id="contact_email"
                        v-model="form.email"
                        name="email"
                        type="email"
                        class="block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${store.getters.primaryThemeBgDarker} text-${store.getters.primaryThemeTextColour} focus:bg-${store.getters.primaryThemeBgDarkest}`"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="w-full px-3">
                <div
                    class="border-b"
                    :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_message"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${store.getters.primaryThemeTextColour}`"
                    >
                        Message:
                    </label>
                    <textarea
                        id="contact_message"
                        v-model="form.message"
                        rows="10"
                        name="message"
                        placeholder="Hello, World!"
                        class="block w-full appearance-none border-none py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${store.getters.primaryThemeBgDarker} text-${store.getters.primaryThemeTextColour} focus:bg-${store.getters.primaryThemeBgDarkest}`"
                    >
                    </textarea>
                </div>
            </div>
        </div>
        <div class="-mx-3 flex flex-wrap pl-3">
            <button
                type="submit"
                class="g-recaptcha flex-shrink-0 rounded border bg-transparent py-1 px-2 text-sm"
                :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:bg-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeHoverTextColour}`"
            >
                <font-awesome-icon :icon="['fas', 'check']" />
                Submit
            </button>
        </div>
    </form>
</template>
