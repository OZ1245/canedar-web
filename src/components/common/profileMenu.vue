<template>
  <div class="profile-menu">
    <button class="profile-menu__button" :class="{'profile-menu__button--active': isOpen}" type="button" @click="toggleMenu()">
      <img src="@/assets/svg/up-white.svg" :alt="$ml.get('menu')" :title="$ml.get('menu')" v-if="isOpen">
      <img src="@/assets/svg/down-white.svg" :alt="$ml.get('menu')" :title="$ml.get('menu')" v-else>
    </button>

    <ul class="profile-menu__menu" v-show="isOpen">
      <li class="profile-menu__item" v-for="(item, i) in items" :key="i">
        <router-link :to="item.href" class="profile-menu__link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data () {
    return {
      isOpen: false,
      items: [
        {
          title: this.$ml.get('profile_menu_settings'),
          href: '/'
        },
        {
          title: this.$ml.get('profile_menu_logout'),
          href: '/'
        }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.isOpen = (!this.isOpen)
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.profile-menu
  position relative

  &__button
    toggleButton(cWhite)

  &__menu
    padding 0
    margin 0
    position absolute
    top 100%
    right 0
    background cWhite
    border 1px solid cGreen
    border-radius 4px 0px 4px 4px

  &__item
    list-style none

  &__link
    display inline-block
    padding 10px 20px
    font-size 14px
    line-height 16px
    link('d')

    &:hover
      background-color cGreen
      color cWhite
      text-decoration none
</style>
