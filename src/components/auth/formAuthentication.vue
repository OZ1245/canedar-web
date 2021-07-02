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
      @click="sendForm()"
    ></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthForm',
  data () {
    return {
      loginModel: '',
      passwordModel: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    sendForm () {
      this.login(this.authDetails)
        .then(() => this.$router.push({ name: 'Calendar' }))
    }
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
