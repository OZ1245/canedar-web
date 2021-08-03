<template>
  <p class="alert" :class="'alert--' + type">{{ message }}</p>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: String,
    message: String
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.alert
  alert()
</style>
