import Vue from 'vue'
import views from '../views/index.vue'
import bb from '../views/bb.vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: views },
    { path: '/b', component: bb }
  ]
});

export default router
