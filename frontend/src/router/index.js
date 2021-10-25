import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Content from '../views/Content.vue';
import DriverHome from '../views/driver/DriverHome.vue';
import Login from '../views/Login.vue';
import AddEdit from '../views/appointment/AddEdit.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/horses',
    name: 'Content',
    component: Content,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/driver',
    name: 'DriverHome',
    component: DriverHome,
    meta: { driver: true },
  },
  {
    path: '/appointment',
    name: 'AddEdit',
    component: AddEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
