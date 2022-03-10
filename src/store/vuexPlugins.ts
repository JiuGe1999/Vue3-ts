import VuexPersistence from 'vuex-persist';

const persist = new VuexPersistence({
  storage: window.localStorage,
  // 仅对设置的模块进行本地存储
  modules: ['Session'],
});

export default persist;
