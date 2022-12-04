import { createWebHashHistory, createRouter } from 'vue-router';
import { store } from '../store/index';

// 라우터 정의
const routes = [
  // 루트: 랜딩 페이지
  {
    path: '/',
    component: () => import('../components/OnboardingComponent.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
        next('/save');
        console.log('로그인 함');
      } else {
        next();
        console.log('로그인 안 했음');
      }
    },
  },
  {
    path: '/save',
    component: () => import('../components/MainComponent.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
        next();
        console.log('로그인 함');
      } else {
        next('/');
        console.log('로그인 안 했음');
      }
    },
  },
  {
    path: '/load',
    component: () => import('../components/CategoryComponent.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
        next();
        console.log('로그인 함');
      } else {
        next('/');
        console.log('로그인 안 했음');
      }
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
