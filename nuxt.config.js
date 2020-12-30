export default {
    target: 'static',
    head: {
        title: 'portfolio-josefc',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
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
    ],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/style-resources', '@nuxtjs/moment'],

    moment: {
        locales: ['es'],
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

    modules: ['@nuxt/content'],

    content: {},

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