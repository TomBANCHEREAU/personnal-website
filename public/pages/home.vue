<i18n>
{
  "fr": {
    "hello": "Bonjour monde!"
  },
  "en": {
    "hello": "hello world!"
  }
}
</i18n>

<template>
  <v-container>
    <v-card-title primary-title>
      title
    </v-card-title>
  </v-container>
  <!-- <v-card> -->
  <!-- </v-card> -->
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/home',
      fr: '/accueil'
    }
  }
}
</script>

<style>

</style>
