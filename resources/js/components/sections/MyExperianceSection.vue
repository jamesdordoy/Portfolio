<script setup lang="ts">
import TimelineEvent from '@/components/generic/TimelineEvent.vue';
import SectionHeader from '@/components/base/SectionHeader.vue';

defineProps<{
    timeline: App.Dto.TimelineEvent[];
}>();
</script>

<template>
    <div>
        <SectionHeader
            eyebrow="Career"
            title="My Experience"
        />
        <div class="relative">
            <div class="absolute left-4 top-0 h-full w-px bg-gray-200 dark:bg-zinc-800 lg:left-1/2" />
            <div class="space-y-8">
                <TimelineEvent
                    v-for="event in timeline"
                    :key="event.id"
                    :event="event"
                    :index="Number(event.id)"
                />
            </div>
        </div>
    </div>
</template>
