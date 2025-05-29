import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/main/index.vue';
import Replay from '../pages/replay/index.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/replay',
    name: 'Replay',
    component: Replay
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;