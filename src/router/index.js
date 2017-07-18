import Vue from 'vue'
import Router from 'vue-router'
import Random from '@/components/random'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Random',
      component: Random
    }
  ]
})
