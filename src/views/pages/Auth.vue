<template>
  <div class="auth-page">
    <p class="auth-page__intro">{{ introText }}</p>
    <div class="auth-page__forms">
      <component :is="form"></component>
      <button class="auth-page__link" type="button" v-text="buttonText" @click="toggleForms()"></button>
    </div>
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
      }

      if (this.formMode === 'registration') {
        return () => import('@/components/auth/formRegistration.vue')
      }

      return null
    },
    introText () {
      if (this.formMode === 'login') {
        return this.$ml.get('auth_text_auth')
      }

      if (this.formMode === 'registration') {
        return this.$ml.get('auth_text_reg')
      }

      return null
    },
    buttonText () {
      if (this.formMode === 'login') {
        return this.$ml.get('auth_text_reg')
      }

      if (this.formMode === 'registration') {
        return this.$ml.get('auth_text_auth')
      }

      return null
    }
  },
  methods: {
    // checkUser(id) {
    //   this.$apollo.mutate({
    //     mutation: checkUserMutation,
    //     variables: { id }
    //   })
    // },
    toggleForms () {
      if (this.formMode === 'login') {
        this.formMode = 'registration'
      }

      if (this.formMode === 'registration') {
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

  &__link
    linkButton()
    fontSmallNormal()
</style>
