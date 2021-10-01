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
      name: 'Selector',
      component: Selector
    },
    {
      path: '/Rendering',
      name: 'Rendering',
      component: Rendering
    }
  ]
})
