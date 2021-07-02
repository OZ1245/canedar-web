<template>
  <div class="auth-page">
    <p class="auth-page__intro">{{ introText }}</p>
    <div class="auth-page__form">
      <component :is="form"></component>
    </div>
    <button class="auth-page__link" type="button" v-text="buttonText" @click="toggleForms()"></button>
  </div>
</template>

<script>
// import { userQuery, checkUserMutation } from '@/graphql/queries.js'
// import { userQuery } from '@/graphql/queries.js'

export default {
  name: 'AuthPage',
  components: {},
  // apollo: {
  //   user: {
  //     query: userQuery
  //   }
  // },
  data () {
    return {
      loading: true,
      formMode: 'login'
    }
  },
  computed: {
    form () {
      if (this.formMode === 'login') {
        return () => import('@/components/auth/formAuthentication.vue')
      } else if (this.formMode === 'registration') {
        return () => import('@/components/auth/formRegistration.vue')
      } else {
        return null
      }
    },
    introText () {
      if (this.formMode === 'login') {
        return this.$ml.get('auth_text_auth')
      } else if (this.formMode === 'registration') {
        return this.$ml.get('auth_text_reg')
      } else {
        return null
      }
    },
    buttonText () {
      if (this.formMode === 'login') {
        return this.$ml.get('auth_text_reg')
      } else if (this.formMode === 'registration') {
        return this.$ml.get('auth_text_auth')
      } else {
        return null
      }
    }
  },
  methods: {
    toggleForms () {
      if (this.formMode === 'login') {
        this.formMode = 'registration'
      } else if (this.formMode === 'registration') {
        this.formMode = 'login'
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.auth-page
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 100%

  &__intro
    fontBigBold()
    margin-bottom 20px
    color cGreen

  &__form
    margin 0 0 20px

  &__link
    linkButton()
    fontSmallNormal()
    margin 0 auto
</style>
