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
        <project :value="item" />
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import project from "./project"
export default {
  components: {
    project
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
