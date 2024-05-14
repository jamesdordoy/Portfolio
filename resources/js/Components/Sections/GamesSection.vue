<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Game from '@/Components/Generic/Game.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const modules = [Navigation];

const breakpoints = {
    640: {
        slidesPerView: 1,
        spaceBetween: 14,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 14,
    },
    1024: {
        slidesPerView: 1,
        spaceBetween: 14,
    },
    1280: {
        slidesPerView: 1,
        spaceBetween: 14,
    },
    1536: {
        slidesPerView: 1,
        spaceBetween: 14,
    },
};

const store = useStore();

defineProps({
    gameClips: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.GameClip>>,
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
        <section class="flex w-full flex-wrap overflow-hidden py-4 lg:pl-8">
            <swiper
                class="mt-2"
                navigation
                :modules="modules"
                :breakpoints="breakpoints"
            >
                <SwiperSlide
                    v-for="(clip, index) in gameClips"
                    :key="index"
                >
                    <Game :clip="clip" />
                </SwiperSlide>
            </swiper>
        </section>
    </div>
</template>
