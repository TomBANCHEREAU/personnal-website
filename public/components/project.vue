<template>
  <v-hover v-slot="{ hover }" :close-delay="1000">
    <v-card :class="`rounded-lg ma-4 elevation-${hover ? 16 : 2}`">
      <v-img :src="'/images/' + value.img" aspect-ratio="1.5" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.9)">
        <div class="fill-height d-flex" style="flex-direction:column">
          <v-card
            :style="`transition: all 0.5s ease 0s;width:100%;margin-top:auto;flex-grow:${hover?1:0};flex-direction:column;display:flex;`"
            elevation="0"
            outlined
            :color="hover?'':'transparent'"
            :dark="!hover"
          >
            <v-card-title v-text="value.title" />
            <v-card-subtitle
              class="font-weight-light text-caption font-italic d-flex pb-0"
            >
              {{ value.subtitle }}
              <v-spacer />
              <!-- <v-icon color="primary">
                      mdi-account-circle
                    </v-icon> -->
              <v-btn v-if="value.repository" icon :href="value.repository" color="primary" style="top:-12px">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-subtitle>
            <v-expand-transition>
              <v-card-text v-show="hover" class="text-justify" style="flex-grow:1;" v-text="value.description" />
            </v-expand-transition>
          </v-card>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true }
  }
}
</script>

<style>

</style>
