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
      }
    ]
  }
}
