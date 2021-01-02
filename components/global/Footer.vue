<template>
  <footer class="p-16 pb-4 footer flex justify-between" id="footer">
    <div class="left">
      <span class="top"> <UilCopyright class="mr-2" /> Copyright </span>
      <span class="bottom"> 2020 <UilCopyright class="mx-2" /> <u class="cursor-zoom">Joseph Flores</u> </span>
    </div>

    <div class="right">
      <span class="top text-right"> Sígueme</span>
      <span class="bottom text-right">
        <div class="link-redes">
          <a href="https://www.linkedin.com/in/josefc9512/" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link"> In </b>
          </a>
          <a href="https://www.facebook.com/ByFCJoseph/" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link">Fb </b>
          </a>
          <a href="https://github.com/JosephFC1995" target="_blank" class="pl-5 parallax-wrap">
            <b class="parallax-element cursor-link">Git </b>
          </a>
          <a href="https://twitter.com/josepokus14" target="_blank" class="pl-5 parallax-wrap">
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
      display: flex;
      align-items: center;
    }
  }
}
</style>
