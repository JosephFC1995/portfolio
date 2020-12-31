<template>
  <div class="menu-navigation">
    <div class="button-navigation">
      <div class="button-navigation-content">
        <UilBars size="25px" />
      </div>
    </div>
  </div>
</template>

<script>
import { UilBars } from '@iconscout/vue-unicons'

export default {
  components: {
    UilBars,
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
  }
}
</style>
