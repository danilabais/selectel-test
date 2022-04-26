<template>
  <div class="container main" >
    <div class="selects fixed">
      <div class="selects__wrap" >
          <a-select
            class="select input"
            v-model:value="value"
            mode="tags"
            
            placeholder="Tags Mode"
            :options="options"
            @change="handleChange"
            
          ></a-select>
       
        <a-col>
          <a-range-picker   class="input" v-model:value="value6" />
        </a-col>
      </div>
    </div>
    <a-skeleton active />
    <a-space :size="20" class="cards-wrapper">
      <Card v-for="item in 9" />
    </a-space>
    <a-alert message="Текст не найден" banner class="not-found" />
    <br>
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
    top: 62px !important;
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
  justify-content: space-around;
  margin-bottom: 60px;
}
.not-found {
    margin-bottom: 60px !important;
}
.selects__wrap {
    display: flex;
   gap: 20px;
}
.input {
    flex: 1 1 auto !important;
    max-width: 295px;
}
@media (max-width: 650px) {
    .selects__wrap {
        flex-direction: column;
    }
}
</style>
