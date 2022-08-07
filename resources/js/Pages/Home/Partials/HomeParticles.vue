<template>
    <Particles
        id="home-particles"
        class="jd-particles min-h-screen"
        :options="particlesConfig"
    />
</template>

<script>
import { defineComponent } from 'vue';
import ParticlesConfig from '@/Config/config.particles.js';

export default defineComponent({
    computed: {
        particlesConfig() {
            return ParticlesConfig;
        },
    },
    methods: {
        particlesInit() {},
        particlesLoaded() {},
    },
});
</script>

<style></style>
