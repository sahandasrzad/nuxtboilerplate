import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    'vue-scrollto/nuxt',
 
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    credentials: false,
    proxy: true,
  },
    proxy: {
      '/api/': { target: 'http://ws1.apipack.net', pathRewrite: {'^/api/': ''} }
      },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          // red #E53935
          // teal #00695C
          // primary #4c57e5
          primary: '#4c57e5',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },

      }
    }
  },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {headers: { 'api-key':'$2y$10$cxPkwmI3cSAM4vcHEVL1i.e3At.X0AaDBgcNap5WkP4ekWWsPZBEO' }, url: '/api/user/otp-validate', method: 'post',propertyName: 'result.token' },
          // user: {headers: { 'api-key':'$2y$10$cxPkwmI3cSAM4vcHEVL1i.e3At.X0AaDBgcNap5WkP4ekWWsPZBEO' ,token:'token'}, url: '/user/profile-get', method: 'post' , propertyName: false},
          user:false,
          logout: false
        },
        redirect: {
          login: '/dashboard',
          logout: '/',
         
        }
      //  tokenRequired: true,
      //  tokenType: 'Authorization',
      //  tokenName:'token'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
