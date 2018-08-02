<template>
    <div class="fullscreen">
        <particles-view></particles-view>
    </div>
</template>
<!-- P5 JS Graphics Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>
<script>

import SteeringBehavior from '../objects/SteeringBehavior'

export default {
    created: function() {
        let str;
        let width;

        if (typeof window.orientation !== 'undefined') {
            str = 'JD';
            width = 300;
        } else {
            str = 'Coming Soon';
            width = 1060;
        }

        // P5 JS Libary
        var steeringBehavior = new SteeringBehavior(str, width);

        function preload() {
            steeringBehavior.preload();
        }

        function setup() {
            steeringBehavior.setup();
        }

        function draw() {
            steeringBehavior.draw();
        }
    }

}
</script>