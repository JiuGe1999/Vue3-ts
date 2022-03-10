// import ElementPlus from 'element-plus'; // 暂不使用
import { createApp } from 'vue';
import App from './App.vue';
// import './styles/element-theme.sass'; // ++
import router from './router';
import store from './store/index'; // ++

// createApp(App).use(store).use(router).mount('#app');
// createApp(App).use(ElementPlus, { locale }).use(store).mount('#app');
createApp(App).use(router).use(store).mount('#app');
