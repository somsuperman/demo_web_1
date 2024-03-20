import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router/index.ts';
import { createI18n } from 'vue-i18n';
import enMessages from './locales/en.json';

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages: {
        en: enMessages,
    }
  });

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.mount('#app');
