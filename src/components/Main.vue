<template>
  <div class="container main">
    <div class="selects fixed">
      <div class="selects__wrap">
        <a-select
          class="select input"
          mode="tags"
          placeholder="Выберите автора"
          @change="handleChange"
        >
          <v-option
            v-for="(key, item) in value"
            :key="key"
          >{{item}}</v-option>
        </a-select>

        <a-col>
          <a-range-picker
            @change="handleChange2"
            format="DD.MM.YYYY"
            :placeholder="['От', 'До']"
            class="input"
          >
            <template #suffixIcon></template>
          </a-range-picker>
        </a-col>
      </div>
    </div>
    <a-skeleton :loading="loading" />
    <a-space :size="20" class="cards-wrapper">
      <Card :item="item" v-for="item in sorted" :key="item.id" />
    </a-space>
    <a-alert v-if="!sorted.length && !loading" message="Текста не найдены" banner class="not-found" />
    <br />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      loading: true,
      sortByName: [],
      sortByDate: [],
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    value() {
      return this.$store.getters.authors;
    },
    sorted() {
        let sortedArr = this.posts;
      if (this.sortByName.length !== 0) {
        sortedArr = sortedArr.filter((element) =>
          element.userName.includes(this.sortByName)
        );
      } 
       
      if (this.sortByDate.length !== 0) {
          sortedArr=sortedArr.filter((element)=>element.date.getTime()<=this.sortByDate[1])
          sortedArr=sortedArr.filter((element)=>element.date.getTime()>=this.sortByDate[0])
      } 
    
      return sortedArr;
    },
  },
  methods: {
    handleChange(e) {
      this.sortByName = e;
    },
    handleChange2(e) {
        if (e==null) {
            this.sortByDate = [0,Infinity]
        } else {

            this.sortByDate = [
              new Date(e[0].$d).getTime(),
              new Date(e[1].$d).getTime(),
            ];
        }
     
    },
    
  },
  async created() {
    await this.$store.dispatch("fetchPosts");
    this.loading = false;
  },
};
</script>

<style>
.ant-input-suffix {
  display: none;
}
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
  align-items: stretch !important;
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
