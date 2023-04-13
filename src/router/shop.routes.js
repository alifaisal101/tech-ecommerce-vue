import ShopView from './../views/shop/ShopView.vue';
import LoginView from './../views/shop/auth/LoginView.vue';
import RegisterView from './../views/shop/auth/RegisterView.vue';

import HomeView from './../views/shop/HomeView.vue';

const children = [
  {
    path: '',
    component: HomeView,
    name: 'home',
  },
  {
    path: 'login',
    component: LoginView,
    name: 'login',
  },
  {
    path: 'register',
    component: RegisterView,
    name: 'register',
  },
];

export default [
  {
    path: '/',
    name: 'shop',
    component: ShopView,
    children,
  },
];
