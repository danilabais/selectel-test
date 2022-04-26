<template>
  <a-layout>
    <Navbar/>
      <a-layout-content style="background:#fff">
        <Carousel/>     
          <Main/>
      </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carusel.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,Carousel,Main,Footer
  },
};
</script>

<style>
.container {
    max-width: 930px;
    margin: 0 auto;
    display: block !important;
}

</style>
