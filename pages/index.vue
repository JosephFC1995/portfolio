<template>
  <div>
    <Bienvenida />
    <QuienSoy />
    <Habilidades />
    <Trabajo />
    <Blog />
    <Contactame />
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear } from 'gsap'

export default {
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
      title: 'Portafolio',
    }
  },
  mounted() {
    var html = document.documentElement
    var body = document.body
    var _self = this
    var target = document.querySelector('#scroll-container')
    var height = target.clientHeight
    body.style.height = height + 'px'

    //
    const allTitleSection = document.querySelectorAll('.mask-water-title')

    const ctrl = new this.$scrollmagic.Controller()

    allTitleSection.forEach((t, index) => {
      var target = t
      var child = target.childNodes
      var tl = new TimelineMax()
      tl.to(child, 1, { y: -100, ease: Linear.easeNone })

      var scene = new this.$scrollmagic.Scene({
        triggerElement: target,
        triggerHook: 0.4,
        duration: '100%',
      })
        .setTween(tl)
        .addTo(ctrl)
    })
  },
}
</script>

<style></style>
