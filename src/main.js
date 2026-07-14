import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
})