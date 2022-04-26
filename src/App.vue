<template>
  <a-layout>
    <Navbar/>
    <div class="wrapper-page">
    <div class="wrapper-main">
      <a-layout-content style="background:#fff">
        <Carousel/>     
         <Main/>
      </a-layout-content>

    </div>
    <div class="wrapper-footer">
    <Footer/>
      
    </div>

    </div>
  </a-layout>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carusel.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
import '@/assets/fonts/fonts.scss'

export default {
  name: "App",
  components: {
    Navbar,Carousel,Main,Footer
  },
};
</script>

<style>
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
    display: block !important;
}
body {
  font-family: Manrope !important;
}
.wrapper-page {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.wrapper-main {
	flex: 1 0 auto;
}
.wrapper-footer {
	flex: 0 0 auto;
}


</style>
