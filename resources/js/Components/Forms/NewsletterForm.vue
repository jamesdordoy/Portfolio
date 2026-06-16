<script lang="ts" setup>
import { Form, useForm } from '@inertiajs/vue3';
import { useReCaptcha } from 'vue-recaptcha-v3';
import checkRecapture from '@/checkRecapture';
import { usePortfolioStore } from '@/Stores/index';
import { faNewspaper, faCheck } from '@fortawesome/free-solid-svg-icons';
import { store as newsletterRoute } from '@/routes/newsletter';

const portfolioStore = usePortfolioStore();

const route = newsletterRoute();

const form = useForm(route.method, route.url, {
    email: '',
} as App.Dto.Newsletter);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const submit = async () => {
    if (await checkRecapture(executeRecaptcha, recaptchaLoaded)) {
        form.post(route.url, {
            preserveScroll: (page): boolean => !!Object.keys(page.props.errors).length,
            onSuccess: (): void => {
                form.reset();
            },
        });
    }
};
</script>

<template>
    <div class="pt-2 md:flex md:items-center">
        <h4
            class="mb-1 pr-4 md:mb-0 md:text-right"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            <font-awesome-icon :icon="faNewspaper" />
            &nbsp;Newsletter Signup:
        </h4>
    </div>
    <div class="py-2 md:flex md:items-center">
        <div class="md:w-full">


            <Form>
                <div class="flex items-center pb-2">
                    <input
                        v-model="form.email"
                        type="email"
                        placeholder="john@example.com"
                        aria-label="Email Address"
                        class="mr-3 w-full border-none border-transparent bg-transparent px-2 py-1 leading-tight focus:border-transparent focus:ring-0"
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                        @change="form.validate('email')"
                    />
                    <button
                        class="shrink-0 rounded-sm border bg-transparent px-2 py-1 text-sm"
                        type="button"
                        :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} hover:bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade} hover:text-${portfolioStore.primaryThemeHoverTextColour}`"
                        @click="submit"
                    >
                        <font-awesome-icon :icon="faCheck" />
                        Sign Up
                    </button>
                </div>
                <div
                    v-show="form.invalid('email')"
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                >
                    {{ form.errors.email }}
                </div>
            </Form>
            
        </div>
    </div>
</template>
