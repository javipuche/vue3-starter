import '@/assets/scss/styles.scss'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'
import pinia from '@/stores'
import App from '@/App.vue'
import router from '@/router'
import locales from '@/locales'

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'es',
  messages: locales
})

const head = createHead()

const app = createApp(App)

app.use(pinia)
app.use(head)
app.use(i18n)
app.use(router)
app.mount('#app')
