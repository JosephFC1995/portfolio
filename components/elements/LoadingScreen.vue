<template>
  <div class="loading-screen">
    <div class="lading-separator"></div>
    <div class="loading-name loading-first-hidden">JosephFC</div>
    <div class="loading-left loading-panel"></div>
    <div class="loading-rigth loading-panel"></div>
    <div class="loading-text loading-first-hidden">cargando</div>
  </div>
</template>

<script>
export default {
  props: {
    porcentaje: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.loading {
  &-screen {
    position: fixed;
    min-height: 100vh;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
  }
  &-panel {
    background: #0f1010;
    height: 100%;
    width: 100%;
  }
  &-text {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    color: #ccc;
    font-weight: 600;
    animation: pulse 1.5s infinite;
  }
  &-separator {
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height: 100%;
    width: 1px;
    background: #ffffff14;
    position: absolute;
  }
  &-name {
    pointer-events: none;
    font-family: Poppins;
    font-style: normal;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
}

@keyframes pulse-loading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
