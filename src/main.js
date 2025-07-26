import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: 'G-W3G7NRX1PM' }
})

app.mount('#app')