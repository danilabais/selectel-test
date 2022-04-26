import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import '@/assets/fonts/fonts.scss'

import store from './store'


createApp(App).use(store).use(Antd).mount('#app')
