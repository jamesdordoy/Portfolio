
<template>
    <Particles
        id="home-particles"
        class="jd-particles min-h-screen"
        :options="particlesConfig"
    />
</template>

<script>
    import { defineComponent } from 'vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import ParticlesConfig from '@/Config/config.particles.js'

    export default defineComponent({
        components: {
            Head,
            Link,
        },
        computed: {
            particlesConfig() {
                return ParticlesConfig;
            }
        },
        methods: {
            particlesInit() {

            },
            particlesLoaded() {
                
            }
        }
    })
</script>


 