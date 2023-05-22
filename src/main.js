import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes'
createApp(App)
.use(router)
.use(store)
.mount('#app')
