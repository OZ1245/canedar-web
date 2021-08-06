<template>
  <div class="auth">
    <div class="auth__alert-wrap" ref="alert" v-if="isError">
      <alert :type="errorData.type" :message="errorData.message" />
    </div>

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
import queries from '@/apollo/queries'
import alert from '@/components/common/alert'

export default {
  name: 'AuthForm',
  components: {
    alert
  },
  data () {
    return {
      loginModel: '',
      passwordModel: '',
      isError: false,
      errorData: null
    }
  },
  computed: {},
  methods: {
    ...mapActions(['logIn']),
    checkUser () {
      this.$apollo.queries.checkUser.skip = false
      this.$apollo.queries.checkUser.refetch()
    }
  },
  apollo: {
    checkUser: {
      query: queries.CHECK_USER,
      variables () {
        return {
          name: this.loginModel,
          password: this.passwordModel
        }
      },
      skip: true,
      update (o) {
        if (o.checkUser) {
          this.$store.dispatch('logIn', o.checkUser.id)
          this.$router.push({ name: 'Calendar' })
        } else {
          this.$set(this, 'isError', true)
          this.$set(this, 'errorData', {
            type: 'danger',
            message: this.$ml.get('auth_login_error')
          })
        }
      }
    }
  },
  mounted () {}
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
