<template>
  <div class="reg">
    <input
      type="text"
      class="auth__field"
      v-model="login"
      :placeholder="$ml.get('input_login_text')"
    >

    <input
      type="text"
      class="auth__field"
      v-model="email"
      :placeholder="$ml.get('input_email_text')"
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
      v-text="$ml.get('input_register_text')"
      @click="sendForm()"
    ></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegisterForm',
  data () {
    return {
      login: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    sendForm () {
      this.register(this.authDetails)
        .then(() => this.$router.push({ name: 'Calendar' }))
    }
  }
}
</script>
