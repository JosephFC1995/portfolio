<template>
  <footer class="p-16 pb-4 footer flex justify-between" id="footer">
    <div class="left">
      <span class="top"> <UilCopyright /> Copyright </span>
      <span class="bottom"> 2020 <UilCopyright /> <u class="cursor-zoom">Joseph Flores</u> </span>
    </div>

    <div class="right">
      <span class="top text-right"> Sígueme</span>
      <span class="bottom text-right">
        <div class="link-redes">
          <a href="#" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link"> In </b>
          </a>
          <a href="#" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link">Fb </b>
          </a>
          <a href="#" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link">Git </b>
          </a>
          <a href="#" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link"> Tw </b>
          </a>
        </div>
      </span>
    </div>
  </footer>
</template>

<script>
import { UilCopyright } from '@iconscout/vue-unicons'
export default {
  components: {
    UilCopyright,
  },
}
</script>

<style lang="scss">
.footer {
  .left,
  .right {
    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      line-height: 35px;
      display: block;
    }
  }
}
</style>
