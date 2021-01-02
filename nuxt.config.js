import getSiteMeta from './utils/getSiteMeta'
import getRoutes from './utils/getRoutes'

const meta = getSiteMeta()

export default {
    mode: 'universal',
    target: 'static',
    head: {
        htmlAttrs: {
            lang: 'es',
        },
        title: 'portfolio-josefc',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, ...meta],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['~assets/scss/site.scss'],

    plugins: [
        '~/plugins/vue-form',
        {
            src: '~plugins/scrollmagic.js',
            ssr: false,
        },
        {
            src: '~plugins/gsap.js',
            ssr: false,
        },
        {
            src: '~plugins/isMobil.js',
            ssr: false,
        },
        {
            src: '~plugins/logrocket.js',
            ssr: false,
        },
        {
            src: '~plugins/vue-smooth-scrollbar.js',
            ssr: false,
        },
    ],

    components: true,

    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/style-resources',
        '@nuxtjs/moment',
        '@nuxtjs/google-analytics',
        '@nuxtjs/dotenv',
    ],

    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },
    moment: {
        locales: ['es'],
    },

    sitemap: {
        hostname: process.env.BASE_URL,
        routes() {
            return getRoutes()
        },
    },

    styleResources: {
        scss: ['./assets/scss/*.scss'],
    },

    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600],
        },
        display: 'swap',
    },

    modules: ['@nuxt/content', '@nuxtjs/sitemap'],

    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-atom-dark.css',
            },
        },
    },

    build: {
        transpile: ['gsap'],
        // extend(config) {
        //     config.resolve.alias['debug.addIndicators'] = path.resolve(
        //         'node_modules',
        //         'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        //     )
        // },
    },
}