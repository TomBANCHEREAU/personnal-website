<template>
  <v-app>
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->
    <app-bar />
    <!-- <v-sheet color="grey lighten-3" style="min-height:100vh"> -->
    <v-sheet style="min-height:100vh">
      <v-main>
        <!-- <v-parallax src="/images/space2.jpg" :height="windowHeight"> -->
        <nuxt />
      <!-- <v-footer app>
          sltn
        </v-footer> -->
      <!-- </v-parallax> -->
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import appBar from "~/components/layout/app-bar"
export default {
  components: {
    appBar
  },
  data: () => ({
  }),
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
/* html {
  overflow-y: hidden;
} */
</style>
