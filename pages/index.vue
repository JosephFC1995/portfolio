<template>
  <div>
    <Bienvenida />
    <QuienSoy />
    <Habilidades />
    <Trabajo />
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
  async asyncData({ store, $content }) {
    let blogs = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'author', 'author', 'categories', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    await store.dispatch('content/GET_ARTICLES', blogs)
  },
  head() {
    return {
      title: 'Joseph Flores Castillejo :)',
    }
  },
  mounted() {
    console.log('MONTADO PAGINA INDEX')

    setTimeout(() => {
      this.initPage()
    }, 1000)
  },
}
</script>

<style></style>
