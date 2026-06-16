<script lang="ts" setup>
import SectionHeader from '@/components/base/SectionHeader.vue';
import PortfolioTag from '@/components/generic/PortfolioTag.vue';

const skills = ['Laravel', 'Vue.js', 'TypeScript', 'PHP', 'Inertia.js', 'Tailwind CSS', 'Statamic', 'Relational Databases'];
</script>

<template>
    <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
            <SectionHeader
                eyebrow="About Me"
                title="Software Engineer based in Essex"
            />
            <div class="space-y-4 text-base leading-relaxed text-slate-600 dark:text-zinc-400">
                <p>
                    Hey, I'm James — a software engineer with over a decade and a half of experience building web
                    applications. My focus is Laravel, Vue.js, and TypeScript, but I've worked across the stack from
                    Android applications and static sites to large-scale SaaS, CMS, and CRM platforms.
                </p>
                <p>
                    I care deeply about clean, well-structured code — composition over inheritance, SOLID principles,
                    and keeping things small and purposeful. I'm currently enjoying the benefits of TypeScript, which
                    lets me write stricter, more maintainable code.
                </p>
                <p>
                    Outside of code, I'm a huge Snooker fan, enjoy competitive FPS gaming, and have a growing interest
                    in hardware and electronics.
                </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
                <PortfolioTag
                    v-for="skill in skills"
                    :key="skill"
                    :name="skill"
                />
            </div>
        </div>
        <div class="flex items-center justify-center lg:justify-end">
            <div class="relative">
                <div
                    class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 opacity-20 blur-lg dark:from-cyan-400 dark:to-blue-400 dark:opacity-30"
                ></div>
                <img
                    src="/storage/images/me.jpeg"
                    alt="James Dordoy"
                    class="relative h-72 w-72 rounded-2xl border border-gray-200 object-cover dark:border-zinc-800 lg:h-80 lg:w-80"
                />
            </div>
        </div>
    </div>
</template>
