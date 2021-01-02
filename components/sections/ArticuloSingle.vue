<template>
  <section class="section section-general section-quiensoy mb-5">
    <div class="quiensoy-name">
      <div class="profesional-title flex reveal-box">
        <span class="reveal-small reveal-style block" v-for="(cat, index) in tags" :key="index">
          {{ cat }}
        </span>
      </div>
      <div class="reveal-box reveal-title-h1">
        <span class="title-grand reveal flex" data-delay="1.2"> {{ title }} _. </span>
        <span class="title-grand block outline reveal flex" data-delay="1.6">- soy Joseph Flores :)</span>
      </div>

      <div class="profesional-title flex reveal-box">
        <span class="reveal-small reveal-style block">{{ fecha }} </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: [],
    },
    fecha: {
      type: String,
      default: '',
    },
  },
  methods: {
    returnCategories(categories) {
      if (!categories) return ''
      return categories.split(', ')
    },
  },
}
</script>

<style lang="scss">
.profesional {
  &-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    span {
      padding-right: 15px;
    }
  }
}
</style>
