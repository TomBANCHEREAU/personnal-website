<i18n>
{
  "fr": {
    "home": "Accueil",
    "about": "Mon histoire",
    "my-projects": "Mes projets",
    "my-skills": "Mes compétences",
    "contact": "Contact"
  },
  "en": {
    "home": "Home",
    "about": "About me",
    "my-projects": "My projects",
    "my-skills": "My skills",
    "contact": "Contact"
  }
}
</i18n>

<template>
  <div>
    <div class="d-md-none">
      <v-app-bar app dense>
        <v-btn icon @click="menu=!menu">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div style="width:200px">
          {{ $vuetify.breakpoint.name }}
        </div>
      </v-app-bar>
      <v-navigation-drawer
        v-model="menu"
        class="pt-12"
        absolute
      >
        <v-list>
          <v-list-item
            v-for="name in appBarItems" :key="`navigation-drawer-item-${name}`"
          >
            <!-- :to="localePath({name})" -->
            <v-list-item-title v-text="$t(name)" />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-app-bar
      :color="$vuetify.theme.dark ? '' : 'white'"
      class="app-bar pa-0 ma-0 d-none d-md-block"
      app
    >
      <!-- scroll-off-screen
      elevate-on-scroll -->
      <v-app-bar-title>
        Tom BANCHEREAU
      </v-app-bar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-hover v-slot="{ hover }" :close-delay="5000">
            <v-chip outlined class="ma-4 text-uppercase" :style="hover?'':'border-color: rgba(0, 0, 0, 0)'" v-on="on">
              <v-icon :class="hover?'mx-n1':'mx-n3'" :color="$vuetify.theme.dark?'#FFFFFF':'rgba(0, 0, 0, 0.54)'" v-text="'mdi-earth'" />
              <v-expand-x-transition>
                <div v-if="hover" class="ml-2" v-text="currentLocale.name" />
              </v-expand-x-transition>
            </v-chip>
          </v-hover>
        </template>
        <v-list>
          <v-list-item v-for="locale in availableLocales" :key="'locales-list-'+locale.code" :to="switchLocalePath(locale.code)" v-text="locale.name" />
        </v-list>
      </v-menu>
      <v-icon @click="$vuetify.theme.dark =! $vuetify.theme.dark">
        mdi-brightness-6
      </v-icon>
      <template v-slot:extension>
        <v-tabs :value="selected" centered>
          <v-tab
            v-for="name in appBarItems"
            :key="`app-bar-item-${name}`"
            style="width:200px"
            @click="$vuetify.goTo(`#${name}`,{ container: '#scroll-target' })"
            v-text="$t(name)"
          />
          <!-- :to="`#${name}`" -->
          <!-- :to="localePath({name})" -->
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import eventBus from '~/assets/event-bus'
export default {
  data: () => ({
    menu: false,
    appBarItems: [
      'home',
      'my-projects',
      'my-skills',
      'about',
      'contact'
    ],
    selected: 0
  }),
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    currentLocale () {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale) || {}
    }
  },
  async mounted () {
    eventBus.$on('scroll', (newSelected) => {
      this.selected = newSelected
      // history.pushState(
      //   {},
      //   null,
      //   this.$route.path + '#' + encodeURIComponent(this.appBarItems[newSelected])
      // )
    })
  },
  async beforeDestroy () {
    eventBus.$off('scroll')
  }
}
</script>

<style>
</style>
