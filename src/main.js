import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MenuItem from "./components/menu-item-comp.vue"
import Slider from "./components/slider.vue"
import kategoriler from "./views/kategoriler.vue"
const app = createApp(App)
app.component('MenuItem', MenuItem);
app.component('Slider', Slider);
app.component('kategoriler', kategoriler);

app.use(router)

app.mount('#app')
