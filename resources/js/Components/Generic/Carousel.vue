<template>
    <div class="carousel">
        <slot :current-slide="currentSlide" />

        <!-- Navigation -->
        <div
            v-if="navEnabled"
            class="flex justify-between p-2"
        >
            <div
                class="toggle-page left cursor-pointer"
                @click="prevSlide"
            >
                <font-awesome-icon
                    :icon="['fas', 'backward']"
                    class="fa-2x"
                    :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeHoverTextColour}`"
                />
            </div>
            <div
                class="toggle-page right cursor-pointer"
                @click="nextSlide"
            >
                <font-awesome-icon
                    :icon="['fas', 'forward']"
                    class="fa-2x"
                    :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeHoverTextColour}`"
                />
            </div>
        </div>

        <!-- Pagination -->
        <div
            v-if="pagintationEnabled"
            class="pagination"
        >
            <span
                v-for="(slide, index) in getSlideCount"
                :key="index"
                :class="{ active: index === currentSlide }"
                @click="goToSlide(index)"
            >
            </span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { useStore } from 'vuex';

export default {
    props: ['startAutoPlay', 'timeout', 'navigation', 'pagination'],
    setup(props) {
        const currentSlide = ref(0);
        const getSlideCount = ref(null);
        const pagintationEnabled = ref(props.pagination === undefined ? true : props.pagination);
        const navEnabled = ref(props.navigation === undefined ? true : props.navigation);
        // next slide
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 0;
                return;
            }
            currentSlide.value += 1;
        };
        // prev slide
        const prevSlide = () => {
            if (currentSlide.value === 0) {
                currentSlide.value = 0;
                return;
            }
            currentSlide.value -= 1;
        };
        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };

        onMounted(() => {
            getSlideCount.value = document.querySelectorAll('.slide').length - 1;
        });

        const store = useStore();

        return {
            currentSlide,
            nextSlide,
            prevSlide,
            getSlideCount,
            goToSlide,
            pagintationEnabled,
            navEnabled,
            store,
        };
    },
};
</script>

<style></style>
