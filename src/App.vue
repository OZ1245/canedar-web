<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'

export default {
  components: {},
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>

<style lang="stylus">
@import 'assets/styles/global'
</style>
