import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Tree from '@/components/Tree/tree'
import Ide from '@/views/ide/ide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ide/:langId',
      name: 'Ide',
      component: Ide
    }
    // {
    //   path: '/tree',
    //   name: 'Tree',
    //   component: Tree
    // }
  ]
})
