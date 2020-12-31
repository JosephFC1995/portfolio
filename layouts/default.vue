<template>
  <div class="viewport">
    <MenuNavigation />
    <LoadingScreen />
    <div class="grillas">
      <div class="container mx-auto">
        <div class="grid grid-cols-4">
          <div class="grid-line"></div>
          <div class="grid-line"></div>
          <div class="grid-line"></div>
          <div class="grid-line"></div>
        </div>
      </div>
    </div>
    <div id="scroll-container" class="scroll-container" ref="scrollContainer">
      <Header />
      <div class="container mx-auto">
        <Nuxt />
      </div>
      <Footer />
    </div>
    <div id="follower">
      <div class="cursor"></div>
    </div>
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      porcentaje: 0,
      requestId: null,
      scrollContent: {
        target: null,
        ease: 0.07,
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
      },
    }
  },
  methods: {
    onLoadGsapSmothScroll() {
      var container = document.querySelector('#scroll-container')
      var height

      function setHeight() {
        height = container.clientHeight
        document.body.style.height = height + 'px'
      }
      ScrollTrigger.addEventListener('refreshInit', setHeight)

      this.$gsap.to(container, {
        y: () => -(height - document.documentElement.clientHeight),
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    },
    updateHeightBody() {
      var target = this.$refs.scrollContainer
      var html = document.documentElement
      var body = document.body
      var _self = this

      var height = target.clientHeight
      body.style.height = height + 'px'
      this.scrollContent.resizeRequest = 0
    },
    hiddenLoadingScreen() {
      let elementLoadingScreen = document.querySelector('.loading-screen')
      let elementLSLeft = elementLoadingScreen.querySelector('.loading-left')
      let elementLSRight = elementLoadingScreen.querySelector('.loading-rigth')
      let elementLSFirstHidden = elementLoadingScreen.querySelectorAll('.loading-first-hidden')

      var eL = this.$gsap.timeline()
      eL.to(elementLSFirstHidden, {
        autoAlpha: 0,
        visibility: 'hidden',
        delay: 0.5,
        duration: 0.7,
      })
        .to(elementLSLeft, {
          yPercent: -100,
        })
        .to(elementLSRight, {
          yPercent: 100,
        })
        .to(elementLoadingScreen, {
          autoAlpha: 0,
          visibility: 'hidden',
        })
      eL.play()
    },
  },
  created() {
    // console.log('DEFAULT CREADOR')
  },
  mounted() {
    let _self = this
    this.hiddenLoadingScreen()

    gsap.set('#follower .cursor', { transformOrigin: 'center', scale: 1 })

    window.addEventListener('mousemove', (e) => {
      gsap.to('#follower', 0.6, {
        x: e.clientX,
        y: e.clientY,
        ease: 'out',
      })
    })

    document.body.addEventListener('mouseover', (e) => {
      var t = e.target
      if (t.classList.contains('cursor-link')) {
        gsap.to('#follower .cursor', {
          scale: 2,
          ease: 'in',
        })
      } else if (t.classList.contains('cursor-hidden')) {
        gsap.to('#follower .cursor', {
          scale: 2,
          ease: 'out',
        })
        TweenLite.to('#follower .cursor', {
          background: 'transparent',
        })
      } else if (t.classList.contains('cursor-zoom')) {
        gsap.to('#follower .cursor', {
          scale: 2,
          ease: 'out',
        })
      } else {
        gsap.to('#follower .cursor', { scale: 1, ease: 'out' })
        TweenLite.to('#follower .cursor', {
          background: 'white',
        })
      }

      e.preventDefault()
    })

    window.addEventListener('load', _self.onLoadGsapSmothScroll())

    // grilla

    let grillas = document.querySelectorAll('.grid-line')

    grillas.forEach((grilla, index) => {
      grilla.classList.add('up')
    })

    //TweenLite.set('.mask-water-title.mask-right .block', { xPercent: 0, right: '0', position: 'absolute' })
    //TweenLite.set('.mask-water-title.mask-left .block', { xPercent: 0, left: '0', position: 'absolute' })
  },
  watch: {
    $route(to, from) {
      console.log(this.$ismovil.any())
    },
  },
}
</script>

<style lang="scss">
body {
  background: #0f1010;
  color: #fff;
  -webkit-backface-visibility: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
}
#follower {
  position: fixed;
  pointer-events: none;
  mix-blend-mode: exclusion;
  transform: translate3d(0%, 0%, 0);
  top: 0;
  left: 0;
  right: 0;
  z-index: 222;
  @media (max-width: 768px) {
    display: none;
  }
  .cursor {
    transform-origin: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #100001;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-left: -1rem;
    margin-top: -1rem;
  }
}

.viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.scroll-container {
  position: absolute;
  overflow: hidden;
  z-index: 10;
  transform-style: preserve-3d;
  width: 100%;
}
</style>
