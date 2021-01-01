import Vue from 'vue'
import SmoothScrollbar, { Scrollbar } from 'vue-smooth-scrollbar'
import AnchorPlugin from '~/utils/anchorPlugin.js'

Scrollbar.use(AnchorPlugin)
Vue.use(SmoothScrollbar)