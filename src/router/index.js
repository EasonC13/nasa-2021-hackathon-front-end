import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Selector from '@/components/Selector'
import Rendering from '@/components/Rendering'
import scene_test from "@/components/Scene_Test"

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
    },
    {
      path: '/scene_test',
      name: 'scene_test',
      component: scene_test
    },
  ]
})
