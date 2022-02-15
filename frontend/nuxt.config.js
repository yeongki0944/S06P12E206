export default {
  ssr: false,
  subdirectory: '/chitchat',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '수화닥터',
    htmlAttrs: {
      lang: 'ko',
      // class : "style"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&amp;display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,600&amp;display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&amp;display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap' }
    ]
  },


  router: {
    base: '/chitchat/',
    mode: 'hash',
    extendRoutes(routes, resolve) {

      routes.push({
        // name: 'pagenotfound',
        path: '*',
        component: resolve(__dirname, 'pages/pagenotfound/index.vue')
      });


    },
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: 'offline/room/:id',
    //     components: resolve(__dirname, 'pages/offline/room.vue')
    //   });
    // },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/scss/app.scss',
      'swiper/css/swiper.css',
      '@/assets/scss/gologin.scss',
      '@/assets/scss/signup.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: '~/plugins/plugin.js', ssr: false },
      { src: "@/plugins/vue-lightbox.js", ssr: false },
      { src: '~/plugins/google.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/bootstrap
      'bootstrap-vue/nuxt',
      '@nuxtjs/toast',
    ],

    axios: {
    },
    generate: {
      dir: '../backend-java/src/main/resources/dist',
      fallback: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: [
        "vee-validate/dist/rules"
      ],
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
      },
      babel: { compact: true }
    }
  }
}