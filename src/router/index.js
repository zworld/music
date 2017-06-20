import Vue from 'vue'
import Router from 'vue-router'
import pIndex from 'modules/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: pIndex
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
