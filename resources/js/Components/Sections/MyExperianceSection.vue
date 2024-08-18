<script setup lang="ts">
import { PropType } from 'vue';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';
import TimelineEvent from '@/Components/Generic/TimelineEvent.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

defineProps({
    timeline: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.TimelineEvent>>,
        required: true,
    },
});
</script>

<template>
    <section>
        <BaseBookmark
            id="experiance"
            class="jd-bookmark"
        />
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            My Experience
        </h2>
        <div class="timeline-container">
            <div
                class="timeline"
                :class="`timeline-${portfolioStore.primaryThemeColour}`"
            >
                <div class="min-h-screen">
                    <div class="flex min-h-screen justify-center">
                        <div class="mx-2 w-full">
                            <div
                                v-for="event in timeline"
                                :key="event.id"
                            >
                                <TimelineEvent :event="event" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
