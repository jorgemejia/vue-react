import Vue from 'vue'
//import Router from 'vue-router'
import VueRouter from 'vue-router'

import GuestCreate from '@/components/guest/Create';
import App from '@/App';

//Vue.use(Router)

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: App
  },
  {
    path: '/create',
    name: 'create',
    component: GuestCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router