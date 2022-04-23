import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './index.vue'

createApp(App).use(createPinia()).mount('#app')
