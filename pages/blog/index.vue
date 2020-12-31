<template>
  <div>
    <QuienSoySmall />
    <section class="section section-general section-blog">
      <div class="mask-water-title mask-water-title mask-left reveal-mask">
        <span class="block"> Ult. Artículos </span>
      </div>
      <div class="content-columns grid grid-cols-1 md:grid-cols-1 mt-10 reveal-content">
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
          <div class="button-group flex justify-start mt-3">
            <NuxtLink :to="{ name: 'blog' }" class="btn-simple animation cursor-link"> 1 </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear } from 'gsap'
import mixin from '~/mixins/globalInit'

export default {
  mixins: [mixin],
  async asyncData({ store, $content }) {
    let blogs = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'author', 'author', 'categories', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    await store.dispatch('content/GET_ARTICLES', blogs)
  },
  data() {
    return {
      hoverArticle: null,
    }
  },
  head() {
    return {
      title: 'Últimos articulos - Joseph Flores Castillejo :)',
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
  async mounted() {
    this.initPage()
  },
}
</script>

<style lang="scss"></style>
