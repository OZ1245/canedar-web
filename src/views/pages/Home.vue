<template>
  <div class="home-page">
    <p class="home-page__preloader" v-text="$ml.get('preloader')"></p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  methods: {},
  mounted () {
    setTimeout(() => {
      this.$router.push({ name: 'Auth' })
    }, 1000)
  }
}
</script>
