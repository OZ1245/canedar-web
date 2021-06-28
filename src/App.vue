<template>
  <div id="app">
    <Header/>

    <router-view/>

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

</style>
