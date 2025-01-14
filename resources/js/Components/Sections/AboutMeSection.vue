<script lang="ts" setup>
import { usePortfolioStore } from '@/Stores/index';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';

const portfolioStore = usePortfolioStore();
</script>

<template>
    <section>
        <BaseBookmark
            id="about"
            class="jd-bookmark"
        />
        <h2
            class="varela mb-16 text-center text-4xl text-gray-400"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            About Me
        </h2>
        <p
            class="mb-8 text-center text-xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Hey, my name is James and im a Software Engineer living in Essex. I have been developing software for over a decand and a half and i have a large range of experience from creating simple Android applications, static websites
            and Microsoft Excel dashboards to working on larger scale S.a.s.S., C.M.S. and C.R.M. applications using PHP, Inertia,
            Laravel with Vue.js and Typescript.
        </p>
        <br />
        <p
            class="mb-8 text-center text-xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            Since leaving University, i have mainly been working with PHP &amp; Laravel. I also have a solid background
            in JavaScript &amp; Java but picking up a difference language isn't a problem. I am proficient at writing 
            procedural, functional and object orianted code which provides many different techniques for cleaning up my
            work. I am currently picking up TypeScript and enjoying the benefits as it enables me to write stricter code
            to overcome some of the limitations that JavaScript present such as Type Inference.
        </p>
        <div class="mb-8 flex items-center justify-center">
            <img
                src="/storage/images/me.jpeg"
                alt="James Dordoy - Me"
                class="rounded-full"
            />
        </div>
        <p
            class="text-center text-xl"
            :class="`text-${portfolioStore.primaryThemeTextColour}`"
        >
            I am a huge Snooker fan and also enjoying playing competitive First Person Shooter games. I also like
            learning about hardware and electronics and would love to pick up more basics to create simple robots. I
            have always wanted to learn to play a musical instrument or make YouTube tutorials based on my programming
            knowledge but have never got around to it.
        </p>
    </section>
</template>
