import Vue from 'vue'
import Router from 'vue-router'
import pIndex from 'modules/index'
import pIndexRec from 'modules/index/recommoned'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: pIndex,
      children: [
        {
          name: 'indexRecommend',
          path: 'recommend',
          component: pIndexRec
        },
        {
          path: '*',
          redirect: 'recommend'
        }
      ]
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
