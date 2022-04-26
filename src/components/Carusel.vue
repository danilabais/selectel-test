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
  background-position: center;
 
  
}
.slide__title {
    color: #fff !important;
    margin-bottom: 24px;
    min-width: 574px;
    font-size: 32px !important;

}
.slide__text {
    color: #fff !important;
    max-width: 453px;
    font-size: 16px !important;
}
.slide__card {
    padding-bottom: 100px;
    margin-top: 290px;
    min-width: 574px !important;
}
@media (max-width:700px) {
    .slide__title {
        font-size: 20px !important;
    }
    .slide__text {
        font-size: 14px !important;
        max-width: 360px;
    }
}
@media (max-width:360px) {
    .slide__title {
        max-width: 200px;
    }
    .slide__text {

        max-width: 200px;
    }
}

</style>