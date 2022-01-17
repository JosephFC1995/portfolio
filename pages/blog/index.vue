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
              class="allBlogs blog-list flex"
              v-for="(blog, index) in paginationBlogs"
              :key="index"
              @mouseenter="hoverArticle = index"
              @mouseleave="hoverArticle = null"
              :class="[hoverArticle == index ? 'active' : '']"
            >
              <div class="blog-date mr-10 capitalize cursor-link">
                {{ $moment(blog.published).format('MMMM DD') }}
              </div>
              <div class="blog-info flex-1">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }" class="blog-title cursor-link">
                  {{ blog.title }}
                </NuxtLink>
                <div class="blog-categories">
                  <span v-for="(cat, index) in blog.tags" :key="index">
                    <span v-if="index != 0" class="px-2"> | </span>
                    <span class="cursor-link">{{ cat }}</span>
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div class="button-group flex justify-start mt-3">
            <PaginationArticles :articles="paginationBlogs" :total="allBlogs.length" :page="page" @page="changePage" />
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
import getContent from '@/utils/getContent'
import PaginationArticles from '@/components/elements/PaginationArticles'

export default {
  mixins: [mixin],
  components: {
    PaginationArticles,
  },
  async asyncData({ store, $content, app, params, error }) {
    const content = await getContent($content, { page: 1 }, error)
    await store.dispatch('content/GET_ARTICLES', content)
    return {
      page: 1,
    }
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
      if (!categories) return ''
      return categories.split(', ')
    },
    async changePage($emit) {
      this.page = $emit
      const content = await getContent(this.$content, { page: $emit }, this.$error)
      await this.$store.dispatch('content/GET_ARTICLES', content)
    },
  },
  computed: {
    ...mapGetters({
      allBlogs: 'content/getArticles',
      paginationBlogs: 'content/getPaginated',
    }),
  },
  async mounted() {
    // setTimeout(() => {
    //   this.initPage()
    // }, 1000)
  },
}
</script>

<style lang="scss"></style>
