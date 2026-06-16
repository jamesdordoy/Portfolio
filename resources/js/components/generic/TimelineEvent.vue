<script lang="ts" setup>
import { faCode, faBuilding, faSchool, type IconDefinition } from '@fortawesome/free-solid-svg-icons';

type IconKey = 'code' | 'building' | 'school';

const icons: Record<IconKey, IconDefinition> = {
    code: faCode,
    building: faBuilding,
    school: faSchool,
};

defineProps<{
    event: App.Dto.TimelineEvent;
    index: number;
}>();

const formatDate = (iso: string): string => {
    const [year, month, day] = iso.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
};
</script>

<template>
    <div
        class="relative flex items-start gap-6 pl-12 lg:pl-0"
        :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
        <div
            class="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-600/30 bg-cyan-50 text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400 lg:left-[calc(50%-1rem)]"
        >
            <font-awesome-icon
                :icon="icons[event.icon as IconKey]"
                class="text-xs"
            />
        </div>

        <div class="hidden flex-1 lg:block" />

        <div class="flex-1 lg:max-w-[calc(50%-2rem)]">
            <div class="card p-5">
                <div class="mb-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                    {{ formatDate(event.from) }} – {{ formatDate(event.to) }}
                </div>
                <h3
                    class="mb-0.5 font-semibold text-slate-900 dark:text-zinc-100"
                    v-html="event.name"
                />
                <p class="mb-3 text-sm text-slate-500 dark:text-zinc-400">{{ event.title }}</p>
                <div
                    class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400"
                    v-html="event.body"
                />
            </div>
        </div>
    </div>
</template>
