<i18n>
{
  "fr": {
  },
  "en": {
  }
}
</i18n>

<template>
  <v-container
    id="scroll-target"
    v-scroll.self="test"
    class="overflow-y-auto scroll-snap-container"
  >
    <div id="home" ref="home" class="full-screen">
      <!--  -->
    </div>
    <div id="my-projects" class="full-screen">
      <projects />
    </div>
    <div id="my-skills" class="full-screen">
      <!--  -->
    </div>
    <div id="about" class="full-screen">
      <!--  -->
    </div>
    <div id="contact" class="full-screen">
      <!--  -->
    </div>
    <!-- This div is here beacause of an issue with vuetify scroll directive  -->
    <div style="height:1px" />
  </v-container>
</template>

<script>
import eventBus from '~/assets/event-bus'
import projects from "~/components/projects"
export default {
  components: {
    projects
  },
  nuxtI18n: {
    paths: {
      en: '/',
      fr: '/'
    }
  },
  data: () => ({
    lastScrollPos: 0
  }),
  methods: {
    test (a) {
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
</style>
