<template>
 <a-layout-header class="header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
     <div class="header__container">
      <a href="">
        <div class="logo" />

      </a>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        class="menu"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item><a href="#"><span class="none">8 800 555 06 75</span><img class="none" src="@/assets/icons/tel.svg" alt=""></a></a-menu-item>
        <a-menu-item><a href="#"><span class="none">sales@selectel.ru</span><img class="none" src="@/assets/icons/mail.svg" alt=""></a></a-menu-item>
      </a-menu>
     </div>
    </a-layout-header>
    <div class="fix-header"></div>
</template>

<script>
export default {
    
}
</script>

<style  >
.logo {
  width: auto;
  width: 135px;
  height: 32px;
  background: url('@/assets/logo.svg');
  background-repeat: no-repeat;
  margin: 16px 24px 16px 0;
  float: left;
}
.menu {
    justify-content: flex-end;
}
.header {
    background: #fff !important;
    max-width: 100% !important;
}
.fix-header {
    height: 64px;
}
.header__container {
    max-width: 1160px;
    margin: 0 auto;
}
img.none  {
    display: none ;
}
@media (max-width:600px) {
    span.none {
        display: none;
        }
        img.none  {
    display: inline;
}
    .header {
       
        padding: 0 15px !important;
    }
}
</style>