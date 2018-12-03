<template id="particles-template" class="fullscreen">
  <div id="name">
    <div class="h-100" id="particles">
      
    </div>
    <div class="heading-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.particles-js-canvas-el{
  margin: 0;
  height: 100%
}

#particles{
	width: 100%;
	background: #263138;
    text-align: center;
}

#name{
  text-align: center;
  height: 100%;
}

.heading-content{
  text-align: center;
	z-index: 9999;
  position: absolute;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  margin: 800px 0 auto auto;
  border-radius: 30px;

}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #defaultCanvas0 {
    top:0;
    bottom:0;
    margin: auto;
    left: 50%;
    transform: translateX(50%);
  }
}

</style>

<script>

export default {
  created: function(){
    particlesJS.load('particles', '/particles.json', () => {});
  },
};

</script?>
