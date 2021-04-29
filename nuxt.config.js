module.exports = {
  srcDir: 'public/',
  quiet: true,
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['nuxt-i18n'],
  i18n: {
    strategy: 'prefix',
    vueI18nLoader: true,
    defaultLocale: 'fr',
    // detectBrowserLanguage:{
    //   alwaysRedirect: false,
    //   fallbackLocale: '',
    //   onlyOnRoot: false,
    //   useCookie: true,
    //   cookieCrossOrigin: false,
    //   cookieDomain: null,
    //   cookieKey: 'i18n_redirected',
    //   cookieSecure: false
    // },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français'
      // },
      // {
      //   code: 'kr',
      //   iso: 'kr-KR',
      //   name: '한국'
      }
    ]
  },
  head: {
    title: 'Tom BANCHEREAU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'application', name: 'application-name', content: 'Tom BANCHEREAU' },
      // { hid: 'description', name: 'description', content: '' },
      // { hid: 'robots', name: 'robots', content: 'noindex' },
    ]
  },
  vuetify: {
    theme: {
      dark: false,
      default: 'light',
      themes: {
        light: {
          primary: '#FF9800'
        },
        dark: {
          primary: '#70fc00'
        }
      }
    }
  }
}
