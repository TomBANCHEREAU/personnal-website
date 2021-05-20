<template>
  <v-card flat>
    <v-card-subtitle class="py-0">
      {{ title }}
    </v-card-subtitle>
    <v-card-actions class="pt-0">
      <v-row class="pa-0 ma-0">
        <template v-for="i in 5">
          <v-sheet :key="i+'-0'" color="primary darken-1" :width="`${Math.min(level-i+1,1)*30}px`" height="2px" class="ml-1" />
          <v-sheet :key="i+'-1'" color="grey lighten-1" :width="`${Math.min(i-level,1)*30}px`" height="2px" />
        </template>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    level: { type: Number, required: true }
    // icon: { type: String, default: '' }
    // comment: { type: String, default: '' }
  }
}
</script>

<style>

</style>
