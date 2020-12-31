<template>
  <div class="section-navigation">
    <div class="button-navigation open" @click="openMenu">
      <div class="button-navigation-content">
        <UilBars size="25px" />
      </div>
    </div>
    <div class="content-navigation">
      <div class="button-navigation close" @click="closeMenu">
        <div class="button-navigation-content">
          <UilTimes size="25px" />
        </div>
      </div>
      <div class="content-navigation-left content-navigation-panel"></div>
      <div class="content-navigation-right content-navigation-panel"></div>
      <div class="content-navigation-nav">
        <ul class="navigation-list">
          <li class="navigation-li">
            <nuxt-link :to="{ path: '/', hash: '#quiensoy' }" class="navigation-link" @click.native="goToSection($event)">
              Quien soy
            </nuxt-link>
          </li>
          <li class="navigation-li">
            <nuxt-link :to="{ path: '/', hash: '#habilidades' }" class="navigation-link" @click.native="goToSection($event)">
              Habilidades
            </nuxt-link>
          </li>
          <li class="navigation-li">
            <nuxt-link :to="{ path: '/', hash: '#trabajo' }" class="navigation-link" @click.native="goToSection($event)">
              Trabajo
            </nuxt-link>
          </li>
          <li class="navigation-li">
            <nuxt-link :to="{ path: '/', hash: '#contactame' }" class="navigation-link" @click.native="goToSection($event)">
              Contáctame
            </nuxt-link>
          </li>
          <li class="navigation-li">
            <nuxt-link :to="{ path: 'blog' }" class="navigation-link" @click.native="goToSection($event)">
              Últimos articulos
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { UilBars, UilTimes } from '@iconscout/vue-unicons'
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {}
  },
  components: {
    UilBars,
    UilTimes,
  },
  methods: {
    openMenu() {
      let elementContentScreen = document.querySelector('.content-navigation')
      let buttonCloseCS = elementContentScreen.querySelector('.button-navigation')
      let elementCSLeft = elementContentScreen.querySelector('.content-navigation-left')
      let elementCSRight = elementContentScreen.querySelector('.content-navigation-right')
      this.eLCN.play()
    },
    closeMenu() {
      this.eLCN.reverse()
    },
    goToSection(e) {
      const target = e.target
      const archor = target.getAttribute('href')
      const targetEl = document.querySelector(archor.replace('/', ''))
      if (targetEl) {
        const targetRect = targetEl.getBoundingClientRect()
      }
      // console.log(targetEl, targetRect)
      this.closeMenu()
    },
  },
  computed: {
    eLCN() {
      let elementContentScreen = document.querySelector('.content-navigation')
      let buttonCloseCS = elementContentScreen.querySelector('.button-navigation')
      let elementCSLeft = elementContentScreen.querySelector('.content-navigation-left')
      let elementCSRight = elementContentScreen.querySelector('.content-navigation-right')
      let links = elementContentScreen.querySelectorAll('.navigation-link')

      return this.$gsap
        .timeline({ paused: true })
        .to(elementContentScreen, {
          autoAlpha: 1,
          visibility: 'visible',
          delay: 0.5,
          duration: 0.1,
        })
        .to(elementCSLeft, {
          y: 0,
        })
        .to(elementCSRight, {
          y: 0,
        })
        .to(buttonCloseCS, {
          autoAlpha: 1,
          visibility: 'visible',
          delay: 0.5,
          duration: 0.1,
          scaleX: 1,
          scaleY: 1,
        })
        .from(links, {
          autoAlpha: 0,
          yPercent: 40,
          overwrite: true,
          delay: 0.5,
          duration: 0.3,
          stagger: 0.2,
        })
    },
  },
}
</script>

<style lang="scss">
.button {
  &-navigation {
    position: absolute;
    right: 4rem;
    font-size: 2rem;
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    color: #0f1010;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 88;
    top: 3rem;
    &-content {
      display: flex;
      align-items: center;
    }
    &.close {
      opacity: 0;
      z-index: 999;
    }
  }
}
.content {
  &-navigation {
    position: fixed;
    min-height: 100vh;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    visibility: hidden;
    &-panel {
      background: #0f1010;
      height: 100%;
      width: 100%;
    }
    &-left {
      transform: translateY(-100%);
    }
    &-right {
      transform: translateY(100%);
    }
    &-nav {
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      font-size: 3rem;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      letter-spacing: 6px;
      .navigation {
        &-li {
          padding: 1rem 1rem;
          display: flex;
          justify-content: center;
        }
        &-link {
          cursor: pointer;
          position: relative;
          display: flex;
          &:before {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 1);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.2s ease-out;
          }
          &:hover {
            &:before {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }
      }
    }
  }
}
</style>
