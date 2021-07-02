<template>
  <div class="reg">
    <input
      type="text"
      class="reg__field"
      v-model="loginModel"
      :placeholder="$ml.get('input_login_text')"
    >

    <input
      type="email"
      class="reg__field"
      v-model="emailModel"
      :placeholder="$ml.get('input_email_text')"
    >

    <input
      type="text"
      class="reg__field"
      v-model="passwordModel"
      :placeholder="$ml.get('input_password_text')"
    >

    <button
      type="button"
      class="reg__submit"
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
      loginModel: '',
      emailModel: '',
      passwordModel: ''
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

<style lang="stylus">
@import '../../assets/styles/_variables'
@import '../../assets/styles/_mixins'

.reg
  display flex
  flex-direction column

  &__field
    formField()

  &__submit
    formSubmit()
</style>
