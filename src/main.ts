import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/utils/routerBeforeEach'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(router)

app.mount('#app')
