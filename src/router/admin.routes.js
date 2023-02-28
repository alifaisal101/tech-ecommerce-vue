import adminView from './../views/admin/AdminView.vue';

const children = [];

export default [
  { path: '/admin', name: 'admin', component: adminView, children },
];
