<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Project from '@/Components/Generic/Project.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

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
        type: Array as PropType<App.Models.Data.Collection<App.Models.Data.Project>>,
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
            <Swiper
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
            </Swiper>
        </section>
    </div>
</template>
