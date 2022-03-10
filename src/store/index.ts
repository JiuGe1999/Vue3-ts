import { createStore } from 'vuex';
import modules from './modules';
import persist from './vuexPlugins';

const store = createStore({
  modules, // 模块
  state: {}, // 全局
  mutations: {}, // 全局
  actions: {}, // 全局
  getters: {}, // 全局
  plugins: [persist.plugin],
});

export default store;
