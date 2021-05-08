<template>
  <v-app>
    <app-bar />
    <v-sheet style="min-height:100vh">
      <v-main class="pa-0">
        <nuxt />
      <!-- <v-footer app>
          sltn
        </v-footer> -->
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
