<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import TimelineEvent from '@/components/generic/TimelineEvent.vue';

const store = useStore();

defineProps({
    timeline: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.TimelineEvent>>,
        required: true,
    },
});
</script>

<template>
    <div>
        <span
            id="experiance"
            class="jd-bookmark"
        >
        </span>
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            My Experience
        </h2>
        <div class="timeline-container">
            <div
                class="timeline"
                :class="`timeline-${store.getters.primaryThemeColour}`"
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
    </div>
</template>
