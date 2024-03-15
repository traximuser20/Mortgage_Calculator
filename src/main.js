import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Slider from 'primevue/slider';
import Calendar from 'primevue/calendar';
import Chart from 'primevue/chart';
import SelectButton from 'primevue/selectbutton';

import 'primevue/resources/themes/aura-light-noir/theme.css'

const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue, {
    ripple: true
});
app.component('Slider', Slider);
app.component('Calendar', Calendar);
app.component('Chart', Chart);
app.component('SelectButton', SelectButton);
app.use(pinia)
app.mount('#app')
