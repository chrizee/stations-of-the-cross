import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stations from '@/components/Stations'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'stations',
      component: Stations
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
