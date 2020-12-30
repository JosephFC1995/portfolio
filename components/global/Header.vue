<template>
  <header class="header-classic flex justify-between hidden md:flex">
    <div class="header-left">
      <nuxt-link to="/" class="logo-portfolio cursor-link"> Josephfc </nuxt-link>
    </div>
    <nav class="menu-primary-container">
      <div class="nav-height">
        <!-- <div class="menu-inner">
          <ul id="menu" class="flex nav-ul hidden">
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Inicio </span>
              </a>
            </li>
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Quien soy </span>
              </a>
            </li>
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Habilidades </span>
              </a>
            </li>
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Trabajos </span>
              </a>
            </li>
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Blog </span>
              </a>
            </li>
            <li class="menu-item menu item-page nav-li">
              <a href="#">
                <span class="cursor-link"> Contactáme </span>
              </a>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nav {
  &-li {
    a {
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 600;

      span {
        overflow: hidden;
        -webkit-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;
        position: relative;
      }
    }
  }
}
</style>
