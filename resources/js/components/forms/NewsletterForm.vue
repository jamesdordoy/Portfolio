<script lang="ts" setup>
import { useForm, Form } from '@inertiajs/vue3';
import { useReCaptcha } from 'vue-recaptcha-v3';
import checkRecapture from '@/checkRecapture';
import BaseInput from '@/components/inputs/BaseInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { store as newsletterRoute } from '@/routes/newsletter';

const route = newsletterRoute();

const form = useForm(route.method, route.url, {
    email: '',
} as App.Data.Newsletter);

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
    <div>
        <h4 class="mb-3 text-sm font-semibold text-slate-900 dark:text-zinc-100">Newsletter</h4>
        <p class="mb-4 text-sm text-slate-500 dark:text-zinc-500">Get notified when I post something new.</p>
        <Form class="flex gap-2">
            <BaseInput
                v-model="form.email"
                type="email"
                size="sm"
                placeholder="your@email.com"
                aria-label="Email Address"
                class="flex-1"
                @change="form.validate('email')"
            />
            <AppButton
                size="compact"
                type="button"
                @click="submit"
            >
                <font-awesome-icon
                    :icon="faArrowRight"
                    class="text-xs"
                />
            </AppButton>
        </Form>
        <div
            v-if="form.invalid('email')"
            class="mt-1 text-xs text-red-500"
        >
            {{ form.errors.email }}
        </div>
    </div>
</template>
