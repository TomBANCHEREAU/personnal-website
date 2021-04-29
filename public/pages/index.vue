<template>
  <div />
</template>

<script>
export default {
  async asyncData ({ redirect, app }) {
    redirect(app.localePath({ name: 'home' }))
  }
}
</script>

<style>

</style>
