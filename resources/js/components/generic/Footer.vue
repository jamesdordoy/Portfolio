<script lang="ts" setup>
import NewsletterForm from '@/components/forms/NewsletterForm.vue';
import AppLogo from '@/components/generic/AppLogo.vue';
import SocialIconLink from '@/components/base/SocialIconLink.vue';
import { faTwitter, faFacebook, faLinkedin, faGithub, faJsfiddle } from '@fortawesome/free-brands-svg-icons';

const socials = [
    { icon: faGithub, href: 'https://github.com/jamesdordoy', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/james-dordoy-a80686110/', label: 'LinkedIn' },
    { icon: faTwitter, href: 'https://twitter.com/JDordoy', label: 'Twitter' },
    { icon: faFacebook, href: 'https://www.facebook.com/dordoy', label: 'Facebook' },
    { icon: faJsfiddle, href: 'https://jsfiddle.net/user/JamesDordoy/fiddles/', label: 'JSFiddle' },
];
</script>

<template>
    <footer class="border-t border-gray-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div class="mx-auto max-w-6xl px-4 py-12 lg:px-8">
            <div class="grid gap-10 lg:grid-cols-3">
                <div>
                    <div class="mb-4">
                        <AppLogo />
                    </div>
                    <p class="mb-4 text-sm text-slate-500 dark:text-zinc-500">Full Stack Developer based in Essex.</p>
                    <div class="flex gap-4">
                        <SocialIconLink
                            v-for="social in socials"
                            :key="social.label"
                            :href="social.href"
                            :label="social.label"
                            :icon="social.icon"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center text-sm text-slate-500 dark:text-zinc-500">
                    &copy; {{ new Date().getFullYear() }} James Dordoy. All rights reserved.
                </div>

                <div>
                    <NewsletterForm />
                </div>
            </div>
        </div>
    </footer>
</template>
