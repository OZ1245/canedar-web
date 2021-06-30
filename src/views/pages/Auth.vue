<template>
  <div class="auth-page">
    Auth page
    <p class="auth-page__preloader" v-text="$ml.get('preloader')" v-show="loading"></p>

    <div class="auth-page__forms">
      <component :is="form" v-show="!loading"></component>
      <button class="auth-page__link" type="button" v-text="buttonText"></button>
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
        return () => import('@/components/auth/formRegistration')
      }

      return null
    },
    buttonText () {
      if (this.formMode === 'login') {
        return this.$ml.get('auth_button_reg')
      }

      if (this.formMode === 'registration') {
        return this.$ml.get('auth_button_auth')
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
    checkUID () {
      console.log(this.$cookies.get('UID'))
      if (this.$cookies.get('UID')) {
        this.$router.push({ name: 'Calendar' })
        // TODO @ this.$router.push({ name: 'Calendar', params: { userId: 'userId' } })
      } else {
        this.loading = false
      }
    }
  },
  mounted () {
    this.checkUID()
  }
}
</script>
