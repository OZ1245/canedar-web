<template>
  <div class="auth">
    <input
      type="text"
      class="auth__field"
      v-model="login"
      :placeholder="$ml.get('input_login_text')"
    >

    <input
      type="text"
      class="auth__field"
      v-model="password"
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
      login: '',
      password: ''
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
