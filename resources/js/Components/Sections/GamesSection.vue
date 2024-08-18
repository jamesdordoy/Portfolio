<script setup lang="ts">
import { PropType } from 'vue';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';
import Game from '@/Components/Generic/Game.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

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

defineProps({
    gameClips: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.GameClip>>,
        required: true,
    },
});
</script>

<template>
    <section class="h-full">
        <BaseBookmark
            id="games"
            class="jd-bookmark"
        />
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Game Clips
        </h2>
        <div class="flex w-full flex-wrap overflow-hidden py-4 lg:pl-8">
            <swiper
                class="mt-2"
                navigation
                :modules="modules"
                :breakpoints="breakpoints"
            >
                <SwiperSlide
                    v-for="(clip, index) in gameClips"
                    :key="`game_${index}`"
                >
                    <Game :clip="clip" />
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>
