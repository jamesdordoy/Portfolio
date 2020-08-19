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
        }
    },
    methods: {
        initParticlesJS () {
            /* eslint-disable */
            window.particlesJS('particles-js', particlesConfig);
        }
    }
}

</script>

<style scoped>
#particles-js {
    position: absolute;
    width: 100%;
    height: 99%;
	background: #3a4145;
}

.overlay {
	position: absolute;
	top: 40%;
	right: 50%;
	transform: translate(50%,-50%);
    min-width: 400px;
}
</style>
