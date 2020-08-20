<template>
    <div>
        <span
            id="contact"
            class="jd-bookmark">
        </span>
        <h2 class="text-3xl varela mb-8 text-gray-500">Contact Me</h2>
        <contact-form
            :url="contactFormUrl"
            :method="'POST'">
        </contact-form>
    </div>
</template>

<script>
export default {
    props: {
        contactFormUrl: {
            type: String,
        }
    }
}
</script>
