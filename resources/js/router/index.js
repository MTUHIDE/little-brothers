import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../../views/Login.vue')
  },
  {
    path: '/appointment',
    name: 'AddEditAppointment',
    component: () => import('../../views/desktop/AddEditAppointment.vue')
  },
  {
    path: '/calendar',
    name: 'DesktopCalendar',
    component: () => import('../../views/desktop/DesktopCalendar.vue')
  },
  {
    path: '/reports',
    name: 'ReportLog',
    component: () => import('../../views/desktop/ReportLog.vue')
  },
  {
    path: '/updates',
    name: 'UpdateLog',
    component: () => import('../../views/desktop/UpdateLog.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../../views/desktop/Clients.vue')
  },
  {
    path: '/drivers',
    name: 'DriverList',
    component: () => import('../../views/desktop/DriverList.vue')
  },
  {
    path: '/driver',
    name: 'DriverHome',
    component: () => import('../../views/driver/DriverHome.vue')
  },
  {
    path: '/driver/about',
    name: 'DriverAbout',
    component: () => import('../../views/driver/DriverAbout.vue')
  },
  {
    path: '/driver/calendar',
    name: 'DriverCalendar',
    component: () => import('../../views/desktop/DesktopCalendar.vue')
  },
  {
    path: '/driver/moreInfo',
    name: 'DriverMoreInfo',
    component: () => import('../../views/driver/DriverMoreInfo.vue')
  },
  {
    path: '/driver/update',
    name: 'DriverUpdate',
    component: () => import('../../views/driver/DriverUpdate.vue')
  },
  {
    path: '/driver/prev-updates',
    name: 'DriverPrevUpdates',
    component: () => import('../../views/driver/DriverPrevUpdates.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
