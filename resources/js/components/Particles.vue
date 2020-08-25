<template>
    <div class="h-100">
        <div id='particles-js'></div>
        <div class="overlay" :style="`width: ${width}%;`">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import 'particles.js';
import particlesConfig from '../config/conf.particles';

export default {
    name: 'ParticlesJS',
    mounted () {
        this.$nextTick(() => {
            this.initParticlesJS();
        });
    },
    props: {
        width: {
            type: Number,
            default: 35,
        },
    },
    computed: {
        particleColour() {
            let tailwindColours = require('tailwindcss/defaultTheme');
            return tailwindColours.colors[this.$store.getters.primaryThemeColour][this.$store.getters.primaryThemeColourShade]
        },
        theme() {
            return this.$store.getters.primaryTheme;
        }
    },
    methods: {
        initParticlesJS () {
            if (this.theme === "light") {
                particlesConfig.particles.line_linked.color = this.particleColour;
            } else {
                particlesConfig.particles.line_linked.color = "#ffffff";
            }

            particlesConfig.particles.color.value = this.particleColour;
            particlesJS('particles-js', particlesConfig);
        }
    },
    watch: {
        theme (newTheme, oldCount) {
            if (newTheme === "light") {
                particlesConfig.particles.line_linked.color = this.particleColour;
            } else {
                particlesConfig.particles.line_linked.color = "#ffffff";
            }

            particlesJS('particles-js', particlesConfig);
        },
        particleColour (newCount, oldCount) {
            if (this.theme === "light") {
                particlesConfig.particles.line_linked.color = this.particleColour;
            } else {
                particlesConfig.particles.line_linked.color = "#ffffff";
            }

            particlesConfig.particles.color.value = this.particleColour;
            particlesJS('particles-js', particlesConfig);
        }
    }
}

</script>

<style scoped>
#particles-js {
    position: absolute;
    width: 100%;
    height: 99%;
}

.overlay {
    position: absolute;
    top: 40%;
    right: 50%;
    transform: translate(50%,-50%);
    min-width: 400px;
}
</style>
