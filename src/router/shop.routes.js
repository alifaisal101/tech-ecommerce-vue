import ShopView from './../views/shop/ShopView.vue';

import HomeView from './../views/shop/HomeView.vue';

const children = [
  {
    path: '',
    component: HomeView,
    name: 'home',
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
