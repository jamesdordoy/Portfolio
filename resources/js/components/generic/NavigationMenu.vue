<script lang="ts" setup>
import { ref } from 'vue';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '@/composables/useDarkMode';
import AppLogo from '@/components/generic/AppLogo.vue';

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
        <nav
            class="border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80"
        >
            <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
                <a href="/"><AppLogo /></a>

                <div class="hidden items-center gap-8 lg:flex">
                    <a
                        v-for="link in navLinks"
                        :key="link.anchor"
                        v-scroll-to="link.anchor"
                        class="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
                    >
                        {{ link.label }}
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        aria-label="Toggle dark mode"
                        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-gray-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                        @click="toggle"
                    >
                        <font-awesome-icon
                            :icon="isDark ? faSun : faMoon"
                            class="text-sm"
                        />
                    </button>

                    <button
                        aria-label="Toggle menu"
                        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800 lg:hidden"
                        @click="mobileOpen = !mobileOpen"
                    >
                        <font-awesome-icon
                            :icon="mobileOpen ? faXmark : faBars"
                            class="text-sm"
                        />
                    </button>
                </div>
            </div>

            <div
                v-show="mobileOpen"
                class="border-t border-gray-200 dark:border-zinc-800 lg:hidden"
            >
                <div class="flex flex-col gap-1 px-4 py-3">
                    <a
                        v-for="link in navLinks"
                        :key="link.anchor"
                        v-scroll-to="link.anchor"
                        class="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-100 hover:text-cyan-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-cyan-400"
                        @click="mobileOpen = false"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>
