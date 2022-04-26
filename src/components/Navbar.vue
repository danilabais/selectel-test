<template>
 <a-layout-header class="header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
  
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        class="menu"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item><a href="#">8 800 555 06 75</a></a-menu-item>
        <a-menu-item><a href="#">sales@selectel.ru</a></a-menu-item>
      </a-menu>
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
}
.fix-header {
    height: 64px;
}

</style>