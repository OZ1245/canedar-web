<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/" class="header__link-home" v-text="$ml.get('home')"></router-link>
    </div>

    <div class="header__right">
      <Profile/>
    </div>
  </header>
</template>

<script>
import Profile from '@/components/common/profile'

export default {
  name: 'Header',
  components: {
    Profile
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.header
  background cGreen
  display flex
  align-items center
  justify-content space-between
  padding 20px 30px

  &__link-home
    font-size 18px
    line-height 20px
    link('l')
</style>
