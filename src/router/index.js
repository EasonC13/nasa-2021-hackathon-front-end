import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Selector from '@/components/Selector'
import Rendering from '@/components/Rendering'
import scene_test from "@/components/Scene_Test"
import About from "@/components/About"
import Parameter from "@/components/Parameter"
import question from "@/components/question"
import Upload from "@/components/Upload"

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
      path: '/scene_test',
      name: 'scene_test',
      component: scene_test
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
  ]
})
