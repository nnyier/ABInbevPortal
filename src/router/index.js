import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Reports from '../components/reports/reports'
import Help from '../components/header/help'
import Lang from '../components/header/lang'
import User from '../components/header/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/reports',
      component: Reports

    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/lang',
      component: Lang
    },
    {
      path: '/user',
      component: User
    }
  ]
})
