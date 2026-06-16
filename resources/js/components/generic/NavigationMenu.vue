<script lang="ts" setup>
import { ref } from 'vue';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '@/composables/useDarkMode';
import AppLogo from '@/components/generic/AppLogo.vue';
import NavLink from '@/components/generic/NavLink.vue';
import NavIconButton from '@/components/generic/NavIconButton.vue';

const { isDark, toggle } = useDarkMode();
const mobileOpen = ref(false);

const navLinks = [
    { label: 'About', anchor: '#about' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Experience', anchor: '#experience' },
    { label: 'Contact', anchor: '#contact' },
];
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50">
        <nav class="border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
            <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
                <a href="/"><AppLogo /></a>

                <div class="hidden items-center gap-8 lg:flex">
                    <NavLink
                        v-for="link in navLinks"
                        :key="link.anchor"
                        :anchor="link.anchor"
                        :label="link.label"
                    />
                </div>

                <div class="flex items-center gap-3">
                    <NavIconButton
                        aria-label="Toggle dark mode"
                        class="hover:text-slate-900 dark:hover:text-zinc-100"
                        @click="toggle"
                    >
                        <font-awesome-icon :icon="isDark ? faSun : faMoon" class="text-sm" />
                    </NavIconButton>

                    <NavIconButton
                        aria-label="Toggle menu"
                        class="lg:hidden"
                        @click="mobileOpen = !mobileOpen"
                    >
                        <font-awesome-icon :icon="mobileOpen ? faXmark : faBars" class="text-sm" />
                    </NavIconButton>
                </div>
            </div>

            <div v-show="mobileOpen" class="border-t border-gray-200 dark:border-zinc-800 lg:hidden">
                <div class="flex flex-col gap-1 px-4 py-3">
                    <NavLink
                        v-for="link in navLinks"
                        :key="link.anchor"
                        :anchor="link.anchor"
                        :label="link.label"
                        mobile
                        @click="mobileOpen = false"
                    />
                </div>
            </div>
        </nav>
    </header>
</template>
