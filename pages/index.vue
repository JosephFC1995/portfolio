<template>
  <div>
    <Bienvenida />
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mixin from '~/mixins/globalInit'
import Bienvenida from '@/components/sections/Bienvenida'
gsap.registerPlugin(ScrollTrigger)

export default {
  mixins: [mixin],
  async asyncData({ store, $content }) {},
  components: {
    Bienvenida
  },
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
