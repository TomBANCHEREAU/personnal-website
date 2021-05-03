<i18n>
{
  "fr": {
    "title": "Mes projets"
  },
  "en": {
    "title": "My projects"
  }
}
</i18n>

<template>
  <v-container>
    <v-card-title v-text="$t('title')" />
    <v-row>
      <v-flex
        v-for="(item,index) in projects" :key="index" xs12 sm6 md6
        lg4 xl3
      >
        <v-hover v-slot="{ hover }" :close-delay="1000">
          <v-card :class="`rounded-lg ma-4 elevation-${hover ? 16 : 2}`">
            <v-img :src="'/images/' + item.img" aspect-ratio="1.5" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.9)">
              <div class="fill-height d-flex" style="flex-direction:column">
                <v-card
                  :style="`transition: all 0.5s ease 0s;width:100%;margin-top:auto;flex-grow:${hover?1:0};flex-direction:column;display:flex;`"
                  elevation="0"
                  outlined
                  :color="hover?'':'transparent'"
                  :class="hover?'':'white--text'"
                >
                  <v-card-title v-text="item.title" />
                  <v-card-subtitle class="font-weight-light text-caption font-italic d-flex pb-0" :style="''+(hover?'':'color: rgba(255, 255, 255, 0.6);')">
                    {{ item.subtitle }}
                    <v-spacer />
                    <!-- <v-icon color="primary">
                      mdi-account-circle
                    </v-icon> -->
                    <v-btn v-if="item.repository" icon :href="item.repository" color="primary" style="top:-12px">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </v-card-subtitle>
                  <v-expand-transition>
                    <v-card-text v-show="hover" class="text-justify" style="flex-grow:1;" v-text="item.description" />
                  </v-expand-transition>
                </v-card>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/my-projects',
      fr: '/mes-projets'
    }
  },
  data: () => ({
  }),
  computed: {
    projects () {
      return {
        fr: [
          {
            title: "Logiciel de sauvegarde",
            subtitle: "C# / .NET",
            date: "17 Nov 2020 - 17 Dec 2020",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia alias laboriosam dicta unde recusandae similique excepturi est iste dolorem ad odit, reiciendis facere ex expedita sapiente voluptate praesentium facilis?",
            img: "easy-save.jpg",
            repository: "https://github.com/TomBANCHEREAU/EasySave"
          },
          {
            title: "Boulder Dash",
            subtitle: "Java",
            date: "21 Mai 2019 -  3 Juin 2019",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia alias laboriosam dicta unde recusandae similique excepturi est iste dolorem ad odit, reiciendis facere ex expedita sapiente voluptate praesentium facilis?",
            img: "boulder-dash.jpg",
            repository: "https://github.com/TomBANCHEREAU/Boulder-Dash"
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        en: [

        ]
      }[this.$i18n.locale]
    }
  }
}
</script>

<style>

</style>
