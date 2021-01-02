<template>
  <div>
    <Bienvenida />
    <QuienSoy />
    <Habilidades />
    <Trabajo />
    <Portafolio />
    <Contactame />
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mixin from '~/mixins/globalInit'

gsap.registerPlugin(ScrollTrigger)

export default {
  mixins: [mixin],
  async asyncData({ store, $content }) {},
  head() {
    return {
      title: 'Joseph Flores Castillejo :)',
    }
  },
  mounted() {
    setTimeout(() => {
      this.initPage()
    }, 1000)
  },
}
</script>

<style></style>
