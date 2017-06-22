import Vue from 'vue'
import Router from 'vue-router'
import pIndex from 'modules/index'
import pIndexRec from 'modules/index/recommoned'
import pIndexRank from 'modules/index/rank'
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
          alias: '/index',
          meta: { index: 0 },
          component: pIndexRec
        },
        {
          name: 'indexList',
          path: 'list',
          meta: { index: 1 },
          component: pIndexRec
        },
        {
          name: 'indexDj',
          path: 'dj',
          meta: { index: 2 },
          component: pIndexRec
        },
        {
          name: 'indexRank',
          path: 'rank',
          meta: { index: 3 },
          component: pIndexRank
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
