<script setup lang="ts">
import { PropType } from 'vue';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';
import { usePortfolioStore } from '@/Stores/index';

const portfolioStore = usePortfolioStore();

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
            <!-- <swiper
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
            </swiper> -->
        </div>
    </section>
</template>
