<template>
  <div>
    <ArticuloSingle
      :title="article.title"
      :categories="article.categories"
      :fecha="$moment(article.createdAt).format('MMMM DD YYYY')"
    />
    <section class="section section-general section-blog-single">
      <img :src="article.img" :alt="article.title" v-if="article.img" class="section-blog-image mx-auto reveal-content-blog" />
      <div class="content-single grid grid-cols-1 md:grid-cols-1 mt-2 reveal-content-blog">
        <article>
          <nuxt-content :document="article" />
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap, TweenMax, TimelineMax, TweenLite, Power1, Power2, Back, Linear } from 'gsap'
import mixin from '~/mixins/globalInit'
import getSiteMeta from '~/utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  mixins: [mixin],
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.categories ? this.article.categories.toString() : '',
        },
        { name: 'twitter:label1', content: 'Escrito por' },
        { name: 'twitter:data1', content: 'Joseph Flores Castillejo' },
        { name: 'twitter:label2', content: 'Archivado bajo' },
        {
          name: 'twitter:data2',
          content: this.article.categories ? this.article.categories.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://bobross.com/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://josephfc.dev/blog/${this.$route.params.slug}`,
        mainImage: this.article.image,
      }
      return getSiteMeta(metaData)
    },
  },
  created() {},
  async mounted() {
    setTimeout(() => {
      this.initPage()
    }, 1000)
  },
}
</script>

<style></style>
