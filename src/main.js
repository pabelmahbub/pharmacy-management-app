import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt';
import 'ayoflex/dist/ayoflex.min.css';

const eventBus = mitt();

const app = createApp(App);

app.config.globalProperties.$eventBus = eventBus;

app.mount('#app')
