<template>
  <div class="auth">
    <input
      type="text"
      class="auth__field"
      v-model="loginModel"
      :placeholder="$ml.get('input_login_text')"
    >

    <input
      type="password"
      class="auth__field"
      v-model="passwordModel"
      :placeholder="$ml.get('input_password_text')"
    >

    <button
      type="button"
      class="auth__submit"
      v-text="$ml.get('input_submit_text')"
      @click="checkUser()"
    ></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import gql from 'graphql-tag'

export default {
  name: 'AuthForm',
  data () {
    return {
      loginModel: '',
      passwordModel: ''
    }
  },
  methods: {
    ...mapActions(['logIn']),
    checkUser () {
      this.$apollo.queries.checkUser.refetch()
    }
  },
  apollo: {
    checkUser: {
      query: gql`query ($name: String!, $password: String!) {
        checkUser(name: $name, password: $password)
      }`,
      variables () {
        return {
          name: this.loginModel,
          password: this.passwordModel
        }
      },
      skip: true,
      result (data) {
        console.log(data)
      },
      update (data) {
        console.log(data)
      }
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.auth
  display flex
  flex-direction column

  &__field
    formField()

  &__submit
    formSubmit()
</style>
