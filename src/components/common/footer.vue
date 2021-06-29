<template>
  <footer class="footer">
    2021 &mdash; {{ currentYear }} &copy; Nadezhda Boldyreva
  </footer>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Footer',
  computed: {
    currentYear () {
      return moment().year()
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.footer
  width 100%
  height auto
  border-top 1px solid cGray
  padding 20px 30px
  box-sizing border-box
  font-size 14px
  line-height 16px
  color cGreenDark
</style>
