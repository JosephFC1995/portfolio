<template>
  <div class="change-router-component">
    <div class="change-router-component-left change-router-component-panel"></div>
    <div class="change-router-component-rigth change-router-component-panel"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showScreenChangeRouter() {
      this.$gsap.set('.change-router-component', {
        opacity: 1,
        visibility: 'visible',
      })
      this.componentChangeGsap.restart()
    },
    hiddeScreenChangeRouter() {},
  },
  computed: {
    componentChangeGsap() {
      let elementChangeRouter = document.querySelector('.change-router-component')
      let elementLSLeft = elementChangeRouter.querySelector('.change-router-component-left')
      let elementLSRight = elementChangeRouter.querySelector('.change-router-component-rigth')
      return this.$gsap
        .timeline({
          paused: true,
        })
        .from(elementLSLeft, {
          yPercent: -100,
        })
        .from(elementLSRight, {
          yPercent: 100,
        })
        .to(elementLSLeft, {
          yPercent: 100,
        })
        .to(elementLSRight, {
          yPercent: -100,
        })
        .set(elementChangeRouter, {
          opacity: 0,
          visibility: 'hidden',
        })
    },
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.name != oldValue.name) {
        this.showScreenChangeRouter()
      }
    },
  },
}
</script>

<style lang="scss">
.change-router-component {
  position: fixed;
  min-height: 100vh;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  visibility: hidden;
  opacity: 0;
  &-panel {
    background: #0f1010;
    height: 100%;
    width: 100%;
  }
}
</style>
