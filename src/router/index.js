import Vue from 'vue'
import Router from 'vue-router'
import Selector from '@/pages/Selector'
import Rendering from '@/pages/Rendering'
import scene_test from "@/components/Scene_Test"
import About from "@/pages/About"
import Parameter from "@/pages/Parameter"
import Quiz from "@/pages/Quiz"

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
      path: '/parameter',
      name: 'Parameter',
      component: Parameter
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Renderer',
      name: 'Renderer',
      component: Rendering
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
