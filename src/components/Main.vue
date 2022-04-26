<template>
  <div class="container main" >
    <a-row class="selects fixed">
      <a-space :size="20">
        
          <a-select
            class="select"
            v-model:value="value"
            mode="tags"
            style="width: 295px"
            placeholder="Tags Mode"
            :options="options"
            @change="handleChange"
          ></a-select>
       
        <a-col>
          <a-range-picker style="width: 295px" v-model:value="value6" />
        </a-col>
      </a-space>
    </a-row>
    <a-skeleton active />
    <a-space :size="20" class="cards-wrapper">
      <Card v-for="item in 9" />
    </a-space>
    <a-alert message="Текст не найден" banner />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style>
.fixed {
    background: #fff !important;
    position: sticky !important;
    z-index: 100;
    top: 64px !important;
    width: 100%;
}
.selects {
  padding-top: 10px;
  margin-top: 68px;
  margin-bottom: 27px;
  padding-bottom: 10px;
  
}
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
