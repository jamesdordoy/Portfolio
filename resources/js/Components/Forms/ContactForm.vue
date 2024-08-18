<script lang="ts" setup>
import axios from 'axios';
import { notify } from 'notiwind';
import { useForm } from 'laravel-precognition-vue-inertia';
import { useReCaptcha } from 'vue-recaptcha-v3';
import { route } from 'ziggy-js';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

const contact: App.Dto.Contact = {
    name: '',
    email: '',
    message: '',
};

const form = useForm('post', route('contact.store'), contact);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const submit = async () => {
    await recaptchaLoaded();

    const token = await executeRecaptcha('contact');

    const response = await axios.get(`/recaptcha/validate`, {
        params: {
            token,
        },
    });

    if (response.data.success) {
        form.submit({
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
                    :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_name"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    >
                        Name:
                    </label>
                    <input
                        id="contact_name"
                        v-model="form.name"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        :class="`bg-${portfolioStore.primaryThemeBgDarker} text-${portfolioStore.primaryThemeTextColour} focus:bg-${portfolioStore.primaryThemeBgDarkest}`"
                        class="block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none"
                        @change="form.validate('name')"
                    />
                </div>
                <div v-if="form.invalid('name')" :class="`text-${portfolioStore.primaryThemeTextColour}`">
                    {{ form.errors.name }}
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0">
                <div
                    class="border-b"
                    :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_email"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    >
                        Email:
                    </label>
                    <input
                        id="contact_email"
                        v-model="form.email"
                        name="email"
                        type="email"
                        class="block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none"
                        :class="`bg-${portfolioStore.primaryThemeBgDarker} text-${portfolioStore.primaryThemeTextColour} focus:bg-${portfolioStore.primaryThemeBgDarkest}`"
                        placeholder="john@example.com"
                        @change="form.validate('email')"
                    />
                </div>
                <div v-if="form.invalid('email')" :class="`text-${portfolioStore.primaryThemeTextColour}`">
                    {{ form.errors.email }}
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="w-full px-3">
                <div
                    class="border-b"
                    :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_message"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    >
                        Message:
                    </label>
                    <textarea
                        id="contact_message"
                        v-model="form.message"
                        rows="9"
                        name="message"
                        placeholder="Hello, World!"
                        class="block w-full appearance-none border-none px-4 py-3 leading-tight focus:outline-none"
                        :class="`bg-${portfolioStore.primaryThemeBgDarker} text-${portfolioStore.primaryThemeTextColour} focus:bg-${portfolioStore.primaryThemeBgDarkest}`"
                        @change="form.validate('message')"
                    >
                    </textarea>
                </div>
                <div v-if="form.invalid('message')" :class="`text-${portfolioStore.primaryThemeTextColour}`">
                    {{ form.errors.message }}
                </div>
            </div>
        </div>
        <div class="-mx-3 flex flex-wrap pl-3">
            <button
                type="submit"
                class="g-recaptcha flex-shrink-0 rounded border bg-transparent px-2 py-1 text-sm"
                :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} hover:bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} hover:text-${portfolioStore.primaryThemeHoverTextColour}`"
                :disabled="form.processing"
            >
                <font-awesome-icon :icon="['fas', 'check']" />
                Submit
            </button>
        </div>
    </form>
</template>
