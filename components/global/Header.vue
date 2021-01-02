<template>
  <header class="header-classic flex justify-between hidden md:flex">
    <div class="header-left">
      <nuxt-link to="/" class="logo-portfolio cursor-link"> Josephfc </nuxt-link>
    </div>
    <nav class="menu-primary-container">
      <div class="nav-height">
        <div class="menu-inner">
          <ul id="menu" class="flex nav-ul">
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link :to="{ path: '/' }" class="navigation-link">Inicio </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link
                :to="{ path: '/', hash: '#quiensoy' }"
                class="navigation-link"
                data-hash="#quiensoy"
                @click.native="goToSection($event)"
              >
                Quien soy
              </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link
                :to="{ path: '/', hash: '#habilidades' }"
                class="navigation-link"
                data-hash="#habilidades"
                @click.native="goToSection($event)"
              >
                Habilidades
              </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link
                :to="{ path: '/', hash: '#trabajo' }"
                class="navigation-link"
                data-hash="#trabajo"
                @click.native="goToSection($event)"
              >
                Trabajos
              </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link
                :to="{ path: '/', hash: '#portafolio' }"
                class="navigation-link"
                data-hash="#portafolio"
                @click.native="goToSection($event)"
              >
                Portafolio
              </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link
                :to="{ path: '/', hash: '#contactame' }"
                class="navigation-link"
                data-hash="#contactame"
                @click.native="goToSection($event)"
              >
                Contactáme
              </nuxt-link>
            </li>
            <li class="menu-item menu item-page nav-li cursor-link">
              <nuxt-link :to="{ name: 'blog' }" class="navigation-link"> Blog </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    goToSection(e) {
      const target = e.target
      const archor = target.getAttribute('href')
      console.log(archor, 'archor')
      const targetEl = document.querySelector(archor.replace('/', ''))
      if (targetEl) {
        const targetRect = targetEl.getBoundingClientRect()
      }
      // console.log(targetEl, targetRect)
    },
  },
}
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
