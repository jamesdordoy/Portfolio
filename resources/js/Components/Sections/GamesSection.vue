<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Game from '@/Components/Generic/Game.vue';

import Carousel from '@/Components/Generic/Carousel.vue';
import Slide from '@/Components/Generic/Slide.vue';

const store = useStore();

defineProps({
    gameClips: {
        type: Array as PropType<Array<App.Models.Data.GameClip>>,
        required: true,
    },
});
</script>

<template>
    <div class="h-full">
        <span
            id="games"
            class="jd-bookmark"
        >
        </span>
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            Game Clips
        </h2>
        <section class="flex h-full w-full flex-wrap overflow-hidden py-4 lg:pl-8">
            <Carousel
                v-slot="{ currentSlide }"
                :navigation="true"
                :auto-play-enabled="false"
                class="carousel mt-2 w-full"
            >
                <Slide
                    v-for="(clip, index) in gameClips"
                    :key="index"
                    class="min-h-80"
                >
                    <Game
                        v-show="currentSlide == index"
                        :clip="clip"
                    />
                </Slide>
            </Carousel>
        </section>
    </div>
</template>

<style></style>
