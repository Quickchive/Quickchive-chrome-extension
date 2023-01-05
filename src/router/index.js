import { createWebHashHistory, createRouter } from 'vue-router';
import { store } from '../store/index';
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
} from '../utils/cookies';

// 라우터 정의
const routes = [
  // 루트: 랜딩 페이지
  {
    path: '/',
    component: () => import('../components/OnboardingComponent.vue'),
    beforeEnter: async (to, from, next) => {
      await getAccessTokenFromCookie();
      await getRefreshTokenFromCookie();
      await store.dispatch('FETCH_PROFILE');
      if (store.getters.isLogin) {
        next('/save');
      } else {
        next();
      }
    },
  },
  {
    path: '/save',
    component: () => import('../components/MainComponent.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/load',
    component: () => import('../components/CategoryComponent.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
        next();
      } else {
        next('/');
      }
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
