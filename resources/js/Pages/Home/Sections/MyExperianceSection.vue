<script setup>
import { useStore } from 'vuex';
import TimelineEvent from '@/Components/Generic/TimelineEvent.vue';

const store = useStore();

defineProps({
    timeline: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div>
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
