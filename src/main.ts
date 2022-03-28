import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(store.original)
  .use(router)
  .mount('#app');
