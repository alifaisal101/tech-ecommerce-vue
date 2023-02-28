import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin.routes';
import shopRoutes from './shop.routes';

const routes = [...adminRoutes, ...shopRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
