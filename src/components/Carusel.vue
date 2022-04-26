<template>
  <a-carousel :after-change="onChange" autoplay effect="fade">
          <div class="container">
            <div class="slide__card">
                <a-typography-title class="slide__title">
                IT-инфраструктура для бизнеса
                </a-typography-title>
                <a-typography-paragraph class="slide__text">
                Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных международных компаний. Более 20 000 клиентов по всему миру доверяют Selectel.
                </a-typography-paragraph>
            </div>  
          </div>
           
 </a-carousel>
</template>

<script>
export default {

}
</script>

<style>
.ant-carousel  {
  background:  url('@/assets/bg.png');
  background-repeat: no-repeat;
  background-size:cover ;
 
  
}
.slide__title {
    color: #fff !important;
    margin-bottom: 24px;
    min-width: 574px;

}
.slide__text {
    color: #fff !important;
    max-width: 453px;
}
.slide__card {
    padding-bottom: 100px;
    margin-top: 290px;
    min-width: 574px !important;
}


</style>