import Vue from 'vue';
import VueRouter from 'vue-router';

import DriverAbout from '../views/driver/DriverAbout.vue';
import DriverHome from '../views/driver/DriverHome.vue';
import DriverCalendar from '../views/driver/DriverCalendar.vue';
import DriverUpdate from '../views/driver/DriverUpdate.vue';
import DriverPrevUpdates from '../views/driver/DriverPrevUpdates.vue';
import DriverMoreInfo from '../views/driver/DriverMoreInfo.vue';
import Login from '../views/Login.vue';
import DesktopCalendar from '../views/desktop/DesktopCalendar.vue';
import AddEditAppointment from '../views/desktop/AddEditAppointment.vue';
import ReportLog from '../views/desktop/ReportLog.vue';
import UpdateLog from '../views/desktop/UpdateLog.vue';
import Clients from '../views/desktop/Clients.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/appointment',
    name: 'AddEditAppointment',
    component: AddEditAppointment,
    meta: { admin: true },
  },
  {
    path: '/calendar',
    name: 'DesktopCalendar',
    component: DesktopCalendar,
    meta: { admin: true },
  },
  {
    path: '/reports',
    name: 'ReportLog',
    component: ReportLog,
    meta: { admin: true },
  },
  {
    path: '/updates',
    name: 'UpdateLog',
    component: UpdateLog,
    meta: { admin: true },
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
    meta: { admin: true },
  },
  {
    path: '/driver',
    name: 'DriverHome',
    component: DriverHome,
    meta: { driver: true },
  },
  {
    path: '/driver/about',
    name: 'DriverAbout',
    component: DriverAbout,
    meta: { driver: true },
  },
  {
    path: '/driver/calendar',
    name: 'DriverCalendar',
    component: DriverCalendar,
    meta: { driver: true },
  },
  {
    path: '/driver/moreInfo',
    name: 'DriverMoreInfo',
    component: DriverMoreInfo,
    meta: { driver: true },
  },
  {
    path: '/driver/update',
    name: 'DriverUpdate',
    component: DriverUpdate,
    meta: { driver: true },
  },
  {
    path: '/driver/prev-updates',
    name: 'DriverPrevUpdates',
    component: DriverPrevUpdates,
    meta: { driver: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
