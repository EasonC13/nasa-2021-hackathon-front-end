import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Selector from '@/components/Selector'
import Rendering from '@/components/Rendering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/selector' },
    {
      path: '/selector',
      name: 'Selector',
      component: Selector
    },
    {
      path: '/rendering',
      name: 'Rendering',
      component: Rendering
    }
  ]
})
