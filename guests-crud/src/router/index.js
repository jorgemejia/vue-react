import Vue from 'vue'
import VueRouter from 'vue-router'
import GuestEdit from '@/components/guest/Edit'
import GuestCreate from '@/components/guest/Create'
import GuestViewAll from '@/components/guest/ViewAll'
import App from '@/App'

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
  },
  {
    path: '/view',
    name: 'view',
    component: GuestViewAll
  },
  {
    path: '/edit',
    name: 'edit',
    component: GuestEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router