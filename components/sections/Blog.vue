<template>
  <section class="section section-general section-blog">
    <div class="mask-water-title mask-water-title mask-left" ref="mask">
      <span class="block"> Articulos </span>
    </div>
    <div class="content-columns grid grid-cols-1 md:grid-cols-1 mt-10">
      <div class="column-left">
        <div class="blog mt-10" :class="[hoverArticle != null ? 'selected-now' : '']">
          <article
            class="blogs blog-list flex"
            v-for="(blog, index) in blogs"
            :key="index"
            @mouseenter="hoverArticle = index"
            @mouseleave="hoverArticle = null"
            :class="[hoverArticle == index ? 'active' : '']"
          >
            <div class="blog-date mr-10 capitalize cursor-link">
              {{ $moment(blog.createdAt).format('MMMM DD') }}
            </div>
            <div class="blog-info flex-1">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }" class="blog-title cursor-link">
                {{ blog.title }}
              </NuxtLink>
              <div class="blog-categories">
                <span v-for="(cat, index) in returnCategories(blog.categories)" :key="index">
                  <span v-if="index != 0" class="px-2"> | </span>
                  <span class="cursor-link">{{ cat }}</span>
                </span>
              </div>
            </div>
          </article>
        </div>
        <div class="button-group flex justify-end mt-3">
          <NuxtLink :to="{ name: 'blog' }" class="btn-simple animation cursor-link"> Ver más blogs </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      hoverArticle: null,
    }
  },
  methods: {
    returnCategories(categories) {
      return categories.split(', ')
    },
  },
  computed: {
    ...mapGetters({
      blogs: 'content/getArticles',
    }),
  },
  async mounted() {},
}
</script>

<style lang="scss"></style>
