<script lang="ts" setup>
import axios from 'axios';
import { useForm } from '@inertiajs/vue3';
import { useReCaptcha } from 'vue-recaptcha-v3';
import FormField from '@/components/base/FormField.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import BaseTextarea from '@/components/inputs/BaseTextarea.vue';
import AppButton from '@/components/base/AppButton.vue';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { store as contactRoute } from '@/routes/contact';

const route = contactRoute();

const form = useForm(route.method, route.url, {
    name: '',
    email: '',
    message: '',
} as App.Dto.Contact);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const submit = async () => {
    await recaptchaLoaded();
    const token = await executeRecaptcha('contact');

    try {
        const response = await axios.get('/recaptcha/validate', { params: { token } });
        if (response.data.success) {
            form.post(route.url, {
                preserveScroll: (page): boolean => !!Object.keys(page.props.errors).length,
                onSuccess: () => form.reset(),
            });
        }
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <form
        class="space-y-5"
        @submit.prevent="submit"
    >
        <FormField
            label="Name"
            field-id="contact_name"
            name="name"
            :form="form"
        >
            <BaseInput
                id="contact_name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="John Smith"
                @change="form.validate('name')"
            />
        </FormField>

        <FormField
            label="Email"
            field-id="contact_email"
            name="email"
            :form="form"
        >
            <BaseInput
                id="contact_email"
                v-model="form.email"
                type="email"
                name="email"
                placeholder="john@example.com"
                @change="form.validate('email')"
            />
        </FormField>

        <FormField
            label="Message"
            field-id="contact_message"
            name="message"
            :form="form"
        >
            <BaseTextarea
                id="contact_message"
                v-model="form.message"
                name="message"
                :rows="6"
                placeholder="Hello, World!"
            />
        </FormField>

        <AppButton
            type="submit"
            :disabled="form.processing"
        >
            Send Message
            <font-awesome-icon
                :icon="faArrowRight"
                class="text-xs"
            />
        </AppButton>
    </form>
</template>
