<template>
  <a-layout-footer class="footer">
    <div class="footer__wrap">
      <a href="#" class="footer__logo">
        <img src="@/assets/logo-white.svg" alt="logo" />
      </a>
      <div class="footer__wrap-links">
        <div class="footer__wrap-first">
          <a class="footer__link" href="">Серверы</a>
          <a class="footer__link" href="">Оборудование</a>
          <a class="footer__link" href="">Облако</a>
          <a class="footer__link" href="">Решения</a>
        </div>
        <div class="footer__wrap-second">
          <a class="footer__link" href="">Дата-центры</a>
          <a class="footer__link" href="">Блог</a>
          <a class="footer__link" href="">О компании</a>
          <a class="footer__link" href="">Офисы</a>
        </div>
      </div>
      <div class="footer__about">
        <span class="footer__about-text">© ООО «Селектел», 2008—2022</span>
        <span class="footer__about-text"
          >Лицензия на телематические услуги № 176267</span
        >
      </div>
      <div class="footer__social">
          <a href="#">
            <TgIcon class="footer__social-icon"/>
          </a>
          <a href="#">
          <VkIcon class="footer__social-icon"/>

          </a>
          <a href="#">
          <TwIcon class="footer__social-icon"/>

          </a>
          <a href="#">
          <HIcon class="footer__social-icon"/>

          </a>
          
          
      </div>
    </div>
  </a-layout-footer>
</template>

<script>
import TgIcon from '@/components/icons/TgIcon.vue'
import VkIcon from '@/components/icons/VkIcon.vue'
import TwIcon from '@/components/icons/TwIcon.vue'
import HIcon from '@/components/icons/HIcon.vue'
export default {
    components: {
    TgIcon,VkIcon,TwIcon,HIcon
    
  },
};
</script>

<style scoped>
.footer {
  background: #092433 !important;
  padding: 0 !important;
  
}
.footer__wrap {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto 690px;
  padding-top: 80px;
  padding-bottom: 78px;

  
}
.footer__logo {
    margin-bottom: 32px;
}
.footer__about-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: block;
    max-width: 220px;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0.5;
    
   
}
.footer__wrap-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
/* identical to box height, or 150% */


/* white */

color: #FFFFFF;

}
.footer__wrap-first {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
 
}
.footer__wrap-second {
    display: grid;
    grid-template-columns: 1fr 1fr;

  
  

}
.footer__social {
    align-self: end;
}
.footer__social a {
    margin-right: 20px;

}
.footer__social-icon {
    transition: all .3s;
    fill: #fff;
}
.footer__social-icon:hover {
    fill: rgb(158, 158, 158);
    transform: scale(1.1);
}


.footer__link {
  line-height: 24px;
    width: fit-content;
  font-weight: 500;
  color: #ffffff;
  margin-top: auto;
  
}
.footer__link:hover {
    text-decoration: underline;
}
@media (max-width:1200px) {
    .footer__wrap {
       grid-template-columns: 1fr
    }

    .footer__social {
        order: -1;
        margin-bottom: 32px;
    }
    .footer__logo {
        order: -2;
        margin-bottom: 24px;
    }
    .footer__wrap-links {
        margin-bottom: 48px;
    }
}
@media (max-width:600px) {
    .footer__wrap-links {
            grid-template-columns: 1fr;
            
    }
    .footer__link {
        margin-bottom: 12px;
    }
    .footer__logo img {
        max-width: 156px ;
    }
}

</style>
