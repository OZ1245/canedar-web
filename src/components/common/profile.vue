<template>
  <div class="profile">
    <p class="profile__user-name" v-html="$ml.get('helloUser')"></p>

    <div class="profile__menu">
      <ProfileMenu/>
    </div>
  </div>
</template>

<script>
import ProfileMenu from '@/components/common/profileMenu'
import { MLBuilder } from 'vue-multilanguage'

export default {
  name: 'Profile',
  components: {
    ProfileMenu
  },
  data () {
    return {
      userName: 'User Name'
    }
  },
  computed: {
    mlhelloUser () {
      return new MLBuilder('helloUser').with('userName', this.userName)
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.profile
  display flex
  justify-content center
  align-items center

  &__user-name
    font-size 16px
    line-height 18px
    color cWhite

  &__menu
    margin-left 10px
</style>
