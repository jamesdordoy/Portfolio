<template>
    <div>
        <span
            id="contact"
            class="jd-bookmark">
        </span>
        <h2
            class="text-3xl varela mb-8"
            :class="`text-${$store.getters.primaryThemeTextColour}`">Contact Me</h2>
        <contact-form
            :url="contactFormUrl"
            :method="'POST'">
        </contact-form>
    </div>
</template>

<script>

import ContactForm from "../forms/ContactForm";

export default {
    components: {
        ContactForm
    },
    props: {
        contactFormUrl: {
            type: String,
        }
    }
}
</script>
