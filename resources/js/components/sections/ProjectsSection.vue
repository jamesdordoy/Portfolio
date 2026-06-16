<script setup lang="ts">
import Project from '@/components/generic/Project.vue';
import SectionHeader from '@/components/base/SectionHeader.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const modules = [Navigation];
const swiperNavigation = { enabled: true } as never;

const breakpoints = {
    640: { slidesPerView: 1, spaceBetween: 24 },
    1024: { slidesPerView: 2, spaceBetween: 24 },
    1280: { slidesPerView: 3, spaceBetween: 24 },
};

defineProps<{
    projects: App.Data.Project[];
}>();
</script>

<template>
    <div>
        <SectionHeader
            eyebrow="Work"
            title="Projects"
        />
        <Swiper
            :navigation="swiperNavigation"
            :modules="modules"
            :breakpoints="breakpoints"
        >
            <SwiperSlide
                v-for="(project, i) in projects"
                :key="`project_${i}`"
                class="pb-4"
            >
                <Project :project="project" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
