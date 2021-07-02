<template>
  <div class="home-page">
    <p class="home-page__preloader" v-text="$ml.get('preloader')"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {},
  methods: {
    // checkUID () {
    //   // TODO @ Сделать как миксин и проверять на каждой странице
    //   console.log(this.$cookies.get('UID'))
    //   if (this.$cookies.get('UID')) {
    //     // TODO @ Сравнение UID на клиенте и в базе, если разные то перенаправить на авторизацию
    //     this.$router.push({ name: 'Calendar' })
    //     // TODO @ this.$router.push({ name: 'Calendar', params: { userId: 'userId' } })
    //   } else {
    //     this.$router.push({ name: 'Auth' })
    //   }
    // }
    ...mapGetters(['user'])
  }
  // mounted () {
  //   this.checkUID()
  // }
}
</script>
