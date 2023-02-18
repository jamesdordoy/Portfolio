<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Project from '@/Components/Generic/Project.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

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

const store = useStore();

defineProps({
    projects: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div>
        <span
            id="projects"
            class="jd-bookmark"
        >
        </span>
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            Projects
        </h2>
        <section class="flex flex-wrap">
            <swiper
                navigation
                :modules="modules"
                :breakpoints="breakpoints"
            >
                <SwiperSlide
                    v-for="project in projects"
                    :key="project.id"
                >
                    <Project :project="project" />
                </SwiperSlide>
            </swiper>
        </section>
    </div>
</template>
