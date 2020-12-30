// import VueScrollmagic from 'vue-scrollmagic'
// import Vue from 'vue'

// Vue.use(VueScrollmagic)

import Vue from 'vue'
import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'

import { ScrollMagicPluginIndicator, ScrollMagicPluginGsap } from 'scrollmagic-plugins'

ScrollMagicPluginIndicator(ScrollMagic)
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic })