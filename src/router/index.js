import Vue from 'vue'
import views from '../views/index.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: views }
  ]
})

export default router
