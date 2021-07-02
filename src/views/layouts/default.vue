<template>
  <div class="page">
    <Header/>

    <main>
      <slot/>
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
