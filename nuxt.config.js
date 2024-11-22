

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    dir: 'dist',
    fallback: 'index.html'
  },
  loadingScreen: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'بانک صادرات ایران',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    base: '/'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/styles.scss',
    '@/assets/fonts/fonts.scss',
    "@node_modules/vuetify/dist/vuetify.css",
    '@node_modules/swiper/swiper.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/leaflet.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify'],
    ['@alireza-ab/vue-persian-datepicker/nuxt', { PersianDate: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // 'nuxt-swiper'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  loading: {
    color: '#0D47A1'
  },

  loadingIndicator: {
    background: '',
    name: 'circle',
    color: '#0D47A1'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || ''
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({                                                   
        path: '*',                                                    
        component: resolve(__dirname, 'pages/index.vue')                   
      })                                                             
    },
    // base: '/SitePages/dist/',
    base: '/public/',
    //base: '',
    linkActiveClass: 'active-link'
  },

  vuetify: {
    customVariables: ["@/assets/styles/variables.scss"],
    rtl: true,
    treeShake: true,
    theme: {
      primary: '#3462CD'
    }
  },



  // swiper: {
  //   // Swiper options
  //   //----------------------
  //   prefix: 'Swiper',
  //   styleLang: 'scss'
  //   // modules: ['navigation', 'pagination'], // all modules are imported by default
  // }
}
