import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Events from '@/components/events/Events'
import Radio from '@/components/radio/Radio'
import Notifications from './../components/notifications/Notifications'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
})
