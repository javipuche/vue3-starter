import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

createApp(App)
    .use(router)
    .mount('#app')
