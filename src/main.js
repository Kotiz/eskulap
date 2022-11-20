import { createApp } from 'vue';
import "./assets/app.css";
import App from './App.vue';
import 'tw-elements';

import router from './router';

createApp(App).use(router).mount('#app');

