<i18n>
{
  "fr": {
    "test":{
      "a":"a",
      "b":"b"
    },
    "projects":[
      {

      "test":"slt"
      }
    ]
  },
  "en": {
  }
}
</i18n>

<template>
  <v-container
    id="scroll-target"
    v-scroll.self="scroll"
    class="overflow-y-auto scroll-snap-container"
  >
    <v-container id="home" ref="home" class="fill-height full-screen">
      <v-layout>
        <v-card outlined class="ma-auto line-top" style="width:50%" tag="section">
          <v-card-title style="padding-left:166px">
            Tom BANCHEREAU
          </v-card-title>
          <v-avatar :size="200" style="position: absolute;top:-50px;left:-50px">
            <img
              src="/images/easy-save.jpg"
              alt="Tom BANCHEREAU"
            >
          </v-avatar>
          <v-card-text style="padding-left:166px" class="text-justify">
            {{ testData }}
            <p>
              Passionné d'informatique, je suis actuellement en 3ème année du cycle d'ingénieur informatique de 5 ans au CESI de Saint-Nazaire.
              <br>
              Durant ces premières années d'études, j'ai pu acquérir de nombreuses connaissances dans des domaines variés. J'ai ensuite eu l'occasion de les approfondir lors de mes stages et mes différents projets personnels.
              <br>
              j'ai acquis une grande autonomie grâce a la méthode PBL (problem based learning) appliquée dans les centres d'enseignement CESI.
            </p>
            <!-- Alors que ma curiosité et ma motivation sont issue de ma passion pour la programmation -->
          </v-card-text>
          <v-row class="ma-0">
            <v-card flat class="col-md-4">
              <v-sheet width="80%" height="2px" color="primary" style="margin-left:10%" />
              <v-card-subtitle class="text-center mt-0 pt-0">
                autonome
              </v-card-subtitle>
            </v-card>
            <v-card flat class="col-md-4">
              <v-sheet width="80%" height="2px" color="primary" style="margin-left:10%" />
              <v-card-subtitle class="text-center mt-0 pt-0">
                curieux
              </v-card-subtitle>
            </v-card>
            <!-- <v-card flat class="col-md-4">
              <v-sheet width="80%" height="2px" color="primary" style="margin-left:10%" />
              <v-card-subtitle class="text-center mt-0 pt-0">
                motivé
              </v-card-subtitle>
            </v-card> -->
            <v-card flat class="col-md-4">
              <v-sheet width="80%" height="2px" color="primary" style="margin-left:10%" />
              <v-card-subtitle class="text-center mt-0 pt-0">
                inventif
              </v-card-subtitle>
            </v-card>
          </v-row>
        </v-card>
      </v-layout>
    </v-container>
    <div id="my-projects" class="full-screen">
      <projects />
    </div>

    <v-container id="my-skills" class="fill-height full-screen">
      <v-layout>
        <v-row class="ma-auto" style="max-width:70%">
          <v-flex xs4 class="px-4">
            <v-card outlined class="line-top fill-height">
              <v-card-title>
                Compétences Linguistiques
              </v-card-title>
              <v-card-text class="text-justify">
                <skill-level title="Francais" :level="5" />
                <skill-level title="Anglais" :level="4" />
                <skill-level title="Espagnol" :level="1" />
                <skill-level title="Coréen" :level="1" />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs8 class="px-4">
            <v-card outlined class="line-top fill-height">
              <v-card-title>
                Compétences Techniques
              </v-card-title>
              <v-card-text class="text-justify">
                <v-row class="ma-0">
                  <skill-level :level="5" title="Vue" />
                  <skill-level :level="4" title="Nuxt" />
                  <skill-level :level="4" title="Vuetify" />
                  <skill-level :level="1.5" title="React" />
                  <skill-level :level="1" title="Angular" />

                  <skill-level :level="5" title="Nodejs" />
                  <skill-level :level="4" title="Php" />
                  <skill-level :level="4" title="Laravel" />

                  <skill-level :level="4" title="Java" />
                  <skill-level :level="4" title="C#" />
                  <skill-level :level="3.5" title="C/C++" />
                  <skill-level :level="3.2" title="" />
                  <skill-level :level="1" title="" />
                </v-row>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-row>
        <!-- Compétences Linguistiques -->
        <!-- Compétences Humaine ? -->
        <!-- Compétences Techniques -->
      </v-layout>
    </v-container>
    <div id="about" class="full-screen">
      <!--  -->
    </div>
    <div id="contact" class="full-screen">
      <!--  -->
    </div>
    <!-- This div is here to prevent an issue with vuetify scroll directive  -->
    <div style="height:1px" />
  </v-container>
</template>

<script>
import skillLevel from '~/components/skill-level'
import eventBus from '~/assets/event-bus'
import testData from '~/static/test.json'
import projects from "~/components/projects"
export default {
  components: {
    projects,
    skillLevel
  },
  nuxtI18n: {
    paths: {
      en: '/',
      fr: '/'
    }
  },
  data: () => ({
    testData,
    lastScrollPos: 0
  }),
  methods: {
    scroll (a) {
      if (Math.abs(a.target.scrollTop - this.lastScrollPos) < 50) {
        const index = Math.round(a.target.scrollTop / this.$refs.home.clientHeight)
        eventBus.$emit('scroll', index)
      }
      this.lastScrollPos = a.target.scrollTop
    }
  }
}
</script>

<style>

.full-screen {
  width: 100%;
  height: calc(100vh - 112px);
  scroll-snap-align: start;
}

.scroll-snap-container{
  min-width: 100% !important;
  padding: 0;
  margin-top: 112px;
  height: calc(100vh - 112px);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

}
html{
  overflow-y: hidden;
}

.line-top::before {
  content: "";
  width: 100%;
  height:1px;
  display: block;
}

.theme--light.line-top::before {
  background-color: #ff9800;
}
.theme--dark.line-top::before {
  background-color: #70fc00 ;
}
</style>
