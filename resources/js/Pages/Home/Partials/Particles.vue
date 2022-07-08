
<template>
    <div class="min-h-screen overflow-hidden relative">
        <Particles
            id="home-particles"
            class="jd-particles"
            :options="particlesConfig"
        />
    </div>
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


 