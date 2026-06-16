<script lang="ts" setup>
import ContactForm from '@/components/forms/ContactForm.vue';
import SectionHeader from '@/components/base/SectionHeader.vue';
</script>

<template>
    <div class="grid gap-16 lg:grid-cols-2">
        <div>
            <SectionHeader
                eyebrow="Get in Touch"
                title="Let's Work Together"
            />
            <p class="mb-8 text-base leading-relaxed text-slate-600 dark:text-zinc-400">
                I'm always open to discussing new projects, interesting ideas, or opportunities to be part of something
                great. Drop me a message and I'll get back to you as soon as I can.
            </p>
            <div class="space-y-3 text-sm text-slate-500 dark:text-zinc-500">
                <div>📍 Essex, United Kingdom</div>
                <div>💼 Available for freelance &amp; full-time roles</div>
            </div>
        </div>
        <ContactForm />
    </div>
</template>
