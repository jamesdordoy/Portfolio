<template>
    <div class="relative min-h-screen overflow-hidden">
        <Particles
            id="home-particles"
            class="jd-particles min-h-screen"
            :options="particlesConfig"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import ParticlesConfig from '@/Config/config.particles'

export default defineComponent({
    components: {
        Head,
        Link,
    },
    computed: {
        particlesConfig() {
            return ParticlesConfig
        },
    },
    methods: {
        particlesInit() {},
        particlesLoaded() {},
    },
})
</script>
