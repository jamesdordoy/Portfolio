<script setup lang="ts">
import { PropType } from 'vue';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';
import Project from '@/Components/Generic/Project.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { usePortfolioStore } from '@/Stores/index';

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
        slidesPerView: 2,
        spaceBetween: 14,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 14,
    },
    1536: {
        slidesPerView: 3,
        spaceBetween: 14,
    },
};

defineProps({
    projects: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.Project>>,
        required: true,
    },
});
</script>

<template>
    <section>
        <BaseBookmark
            id="projects"
            class="jd-bookmark"
        />
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Projects
        </h2>
        <div class="flex flex-wrap">
            <Swiper
                navigation
                :modules="modules"
                :breakpoints="breakpoints"
            >
                <SwiperSlide
                    v-for="(project, i) in projects"
                    :key="`project_${i}`"
                >
                    <Project :project="project" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
