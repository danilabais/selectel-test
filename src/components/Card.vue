<template>
  <a-card :title="item.title" style="width: 295px;height:auto">
    <a-typography-paragraph>
     {{item.body}}
    </a-typography-paragraph>
    <a-space :size="16" />
    <a-row class="chips">
      <a-tag class="chips__name">{{item.userName}}</a-tag
      ><a-tag class="chips__date">{{time}}</a-tag>
    </a-row>
  </a-card>
  <!-- <a-skeleton :loading="loading" /> -->
</template>

<script>
export default {
  props: {
    item: {
         type: Object,
        required: true

    },
  },
 
  computed: {
      time(){
          return `${this.item.date.toLocaleDateString("ru-RU", {day:"numeric",month:"long"})} ${this.item.date.getFullYear()}`
      }
  }
};
</script>

<style>
.chips {
  margin-top: 16px !important;
  justify-content: space-between;
}

.chips__name {
  background: #092433 !important;
  border-radius: 10px !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #fff !important;
  margin-bottom: 4px !important;
}

.chips__date {
  border-radius: 10px !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 20px !important;
  border: 1px solid #e8e8e8;
  color: #595959 !important;
}
</style>
