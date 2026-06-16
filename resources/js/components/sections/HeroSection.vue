<script lang="ts" setup>
import AppButton from '@/components/base/AppButton.vue';
import SocialIconLink from '@/components/base/SocialIconLink.vue';
import HeroBackground from '@/components/sections/HeroBackground.vue';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socials = [
    { icon: faGithub, href: 'https://github.com/jamesdordoy', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/james-dordoy-a80686110/', label: 'LinkedIn' },
];
</script>

<template>
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
        <HeroBackground />

        <div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                <span class="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Available for opportunities
            </div>

            <h1 class="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
                James&nbsp;<span class="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">Dordoy</span>
            </h1>

            <p class="mb-4 text-xl font-medium text-slate-600 dark:text-zinc-400 sm:text-2xl">Full Stack Developer</p>
            <p class="mb-10 text-base text-slate-500 dark:text-zinc-500">
                Building web applications with Laravel, Vue.js &amp; TypeScript · Based in Essex
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
                <AppButton href="#projects">
                    View Projects
                    <font-awesome-icon :icon="faArrowDown" class="text-xs" />
                </AppButton>
                <AppButton variant="secondary" href="#contact">
                    <font-awesome-icon :icon="faEnvelope" class="text-xs" />
                    Get in Touch
                </AppButton>
            </div>

            <div class="mt-10 flex items-center justify-center gap-6">
                <SocialIconLink
                    v-for="social in socials"
                    :key="social.label"
                    :href="social.href"
                    :label="social.label"
                    :icon="social.icon"
                    size="text-xl"
                />
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <font-awesome-icon :icon="faArrowDown" class="text-slate-400 dark:text-zinc-600" />
        </div>
    </section>
</template>
