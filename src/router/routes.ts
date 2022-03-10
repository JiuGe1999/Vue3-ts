import { RouteRecordRaw } from 'vue-router';
import Home from '../views/homeIndex.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  //   },
];

export default routes;
