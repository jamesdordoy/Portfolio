<template>
    <jet-form-section @submitted="updatePassword">
        <template #title> Add a Language </template>

        <template #description> Enter a name and description for the new language </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <jet-label
                    for="language_name"
                    value="Name"
                />
                <jet-input
                    id="language_name"
                    ref="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                />
                <jet-input-error
                    :message="form.errors.name"
                    class="mt-2"
                />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <jet-label
                    for="language_description"
                    value="Description"
                />
                <JetTextarea
                    id="language_description"
                    ref="description"
                    v-model="form.description"
                    class="mt-1 block w-full"
                />
                <jet-input-error
                    :message="form.errors.description"
                    class="mt-2"
                />
            </div>
        </template>

        <template #actions>
            <jet-action-message
                :on="form.recentlySuccessful"
                class="mr-3"
            >
                Saved.
            </jet-action-message>

            <jet-button
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Save
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script>
import { defineComponent } from 'vue'
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetFormSection from '@/Jetstream/FormSection.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetInputError from '@/Jetstream/InputError.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetTextarea from '@/Components/Textarea.vue'

export default defineComponent({
    components: {
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        JetTextarea,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: '',
                description: '',
            }),
        }
    },

    methods: {
        updatePassword() {
            this.form.post(this.route('languages.store'), {
                errorBag: 'updatePassword',
                preserveScroll: true,
                onSuccess: () => this.form.reset(),
                onError: () => {
                    if (this.form.errors.name) {
                        this.$refs.name.focus()
                    }

                    if (this.form.errors.description) {
                        this.$refs.description.focus()
                    }
                },
            })
        },
    },
})
</script>
