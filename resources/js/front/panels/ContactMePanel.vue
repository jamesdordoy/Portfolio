<template>
    <div>
        <span
            id="contact"
            style="
                display: block;
                position: relative;
                top: -100px;
                visibility: hidden;">
        </span>
        <h2 class="varela mb-4 py-4 text-grey">Contact Me</h2>
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