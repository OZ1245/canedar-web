<template>
  <div id="app">
    <Header/>

    <main class="page">
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
@import 'assets/styles/global'

#app
  height 100vh
  width 100vw
  display flex
  flex-direction column

.page
  height 100%
  padding 60px 0
</style>
