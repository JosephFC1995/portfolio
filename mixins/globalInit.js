import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Scrollbar from 'smooth-scrollbar'

export default {
    methods: {
        initPage() {
            // var html = document.documentElement
            // var body = document.body
            // var target = document.querySelector('#scroll-container')
            // var height = target.clientHeight
            // body.style.height = height + 'px'
            let gsap_e = gsap
            gsap_e.registerPlugin(ScrollTrigger)

            var scrollbar = Scrollbar.get(document.querySelector('#content-scroll-container'))

            ScrollTrigger.scrollerProxy('#content-scroll-container', {
                scrollTop(value) {
                    if (arguments.length) {
                        scrollbar.scrollTop = value
                    }
                    return scrollbar.scrollTop
                },
            })

            scrollbar.addListener(ScrollTrigger.update)
            ScrollTrigger.defaults({ scroller: document.querySelector('#content-scroll-container') })

            //
            const allTitleSection = document.querySelectorAll('.mask-water-title')

            const ctrl = new this.$scrollmagic.Controller()

            // allTitleSection.forEach((t, index) => {
            //     var target = t
            //     var child = target.childNodes
            //     var tl = new TimelineMax()
            //     tl.to(child, 1, { y: -100, ease: Linear.easeNone })

            //     var scene = new this.$scrollmagic.Scene({
            //             triggerElement: target,
            //             triggerHook: 0.4,
            //             duration: '100%',
            //         })
            //         .setTween(tl)
            //         .addTo(ctrl)
            // })

            //

            // let revealContainers = document.querySelectorAll('.reveal')

            ScrollTrigger.batch('.reveal', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                            yPercent: 100,
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 1.8,
                            duration: 1.3,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-small', {
                onEnter: (batch) => {
                    this.$gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                            yPercent: -100,
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 2.8,
                            duration: 1.1,
                            stagger: 0.15,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-mask', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                        }, {
                            autoAlpha: 1,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 0.5,
                            duration: 1,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-content', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                        }, {
                            autoAlpha: 1,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 1,
                            duration: 1,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-content-blog', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                        }, {
                            autoAlpha: 1,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 1,
                            duration: 1,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-h3', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                            yPercent: 100,
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 1.2,
                            duration: 1.3,
                        }
                    )
                },
            })

            ScrollTrigger.batch('.reveal-skills', {
                onEnter: (batch) => {
                    gsap.fromTo(
                        batch, {
                            autoAlpha: 0,
                            yPercent: 30,
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            overwrite: true,
                            ease: Expo.easeInOut,
                            delay: 1,
                            duration: 1,
                            stagger: 0.3,
                        }
                    )
                },
            })
        },
    },
}