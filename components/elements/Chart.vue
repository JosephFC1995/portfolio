<template>
  <div class="chart chart-column reveal-skills">
    <div class="chart-line" ref="chartline">
      <div
        class="chart-box cursor-hidden"
        :style="{ '--v': deg + 'deg' }"
        :porcent="porcent"
        v-if="porcent > 50"
        ref="chartbox"
      ></div>
      <div class="chart-box small cursor-hidden" :style="{ '--v': deg + 'deg' }" :porcent="porcent" v-else ref="chartbox"></div>
    </div>
    <span class="chart-name"> {{ name }} </span>
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    name: {
      type: String,
      default: 'HTML',
    },
    porcent: {
      type: Number,
      default: 100,
    },
    deg: {
      type: Number,
      default: 90,
    },
  },
  mounted() {
    // var tl = new TimelineMax({ paused: true })
    // tl.from(this.$refs.chartline, { scaleX: 0 })
    // tl.from(this.$refs.chartbox, { yPercent: 100, ease: Linear.easeNone })
    // const scene2 = this.$scrollmagic
    //   .scene({
    //     triggerElement: this.$refs.chartline,
    //     triggerHook: 0.15,
    //   })
    //   .on('enter', function (event) {
    //     tl.play()
    //   })
    //   .addIndicators({ colorTrigger: 'white', colorStart: 'white', colorEnd: 'white', indent: 40 })
    // this.$scrollmagic.addScene(scene2)
    // this.$scrollmagic.attachTo(this.$refs.chartbox)
  },
}
</script>

<style lang="scss">
.chart {
  &-column {
    flex: 0 0 25%;
    width: 25%;
    text-align: center;
    margin-bottom: 5rem;
    &.mb-0 {
      margin-bottom: 0 !important;
    }
    @media (max-width: 768px) {
      flex: 0 0 50%;
      width: 50%;
    }
  }
  &-line {
    // overflow: hidden;
  }
  &-box {
    width: 150px;
    height: 150px;
    display: inline-block;
    border-radius: 50%;
    border: 5px solid transparent;
    background: linear-gradient(#0f1010, #0f1010) padding-box, linear-gradient(var(--v), white 50%, transparent 0) border-box,
      linear-gradient(to right, #f2f2f200 50%, white 0) border-box;
    position: relative;
    @media (max-width: 768px) {
      width: 125px;
      height: 125px;
    }
    &.small {
      background: linear-gradient(#0f1010, #0f1010) padding-box, linear-gradient(var(--v), #0f1010 50%, transparent 0) border-box,
        linear-gradient(to right, #f2f2f200 50%, white 0) border-box;
    }
    &::after {
      content: attr(porcent) '%';
      font-family: Poppins;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-name {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
