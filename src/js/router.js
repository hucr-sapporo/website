import Vue from 'vue'
import Router from 'vue-router'
import Home from '/components/Home.vue'
import Activity from '/components/Activity.vue'
import Schedule from '/components/Schedule.vue'
import Contact from '/components/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
