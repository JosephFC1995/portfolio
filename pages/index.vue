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

gsap.registerPlugin(ScrollTrigger)

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

    //

    // let revealContainers = document.querySelectorAll('.reveal')

    ScrollTrigger.batch('.reveal', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          yPercent: 100,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 1.8,
          duration: 1.3,
        })
      },
    })

    ScrollTrigger.batch('.reveal-small', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          yPercent: -100,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 2.8,
          duration: 1.1,
          stagger: { each: 0.15, grid: [1, 2] },
        })
      },
    })

    ScrollTrigger.batch('.reveal-mask', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 0.8,
          duration: 1,
        })
      },
    })

    ScrollTrigger.batch('.reveal-content', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 1.7,
          duration: 1,
        })
      },
    })

    ScrollTrigger.batch('.reveal-h3', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          yPercent: 100,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 1.2,
          duration: 1.3,
        })
      },
    })

    ScrollTrigger.batch('.reveal-skills', {
      onEnter: (batch) => {
        gsap.from(batch, {
          autoAlpha: 0,
          yPercent: 30,
          overwrite: true,
          ease: Expo.easeInOut,
          delay: 1.3,
          duration: 1,
          stagger: { each: 0.1, grid: [1, 4] },
        })
      },
    })
  },
}
</script>

<style></style>
