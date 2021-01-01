<template>
  <div class="change-router-component"></div>
</template>

<script>
export default {
  methods: {
    showScreenChangeRouter() {
      console.log('MOSTRANDO PANTALLA DE CAMBIO DE ROUTE')
    },
    hiddeScreenChangeRouter() {
      console.log('MOSTRANDO PANTALLA DE CAMBIO DE ROUTE')
    },
  },
  watch: {
    $route(newValue, oldValue) {
      console.log('CAMBIANDO LOCO')
      this.showScreenChangeRouter()
    },
  },
}
</script>

<style></style>
