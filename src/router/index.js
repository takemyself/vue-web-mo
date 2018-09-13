import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/common/Layout'
import Index from '@/components/index/Index'
import Newslist from '@/components/news/Newslist'
import Newscontent from '@/components/news/Newscontent'
import Abouts from '@/components/about/Abouts'
import Recruit from '@/components/recruit/Recruit'
import Recruitcontent from '@/components/recruit/Recruitcontent'
import Volunteers from '@/components/volunteers/Volunteers'
import Voluncontent from '@/components/volunteers/Voluncontent'
import Pro from '@/components/pro/Pro'
import Contact from '@/components/contact/Contact'
import Login from '@/components/regislogin/Login'
import Regis from '@/components/regislogin/Regis'
import Person from '@/components/center/Person'
import Help from '@/components/center/Help'
import Actives from '@/components/center/Actives'
import Safety from '@/components/center/Safety'
import Repass from '@/components/center/Repass'
import Succ from '@/components/center/Succ'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Layout,
      redirect: '/index',
      children: [{
        path: 'index',
        component: Index
      }]
    },
    {
      path: '/News',
      name: 'News',
      component: Layout,
      redirect: '/News/lists',
      children: [
        {
          path: 'lists',
          component: Newslist
        },
        {
          path: 'content',
          component: Newscontent
        }
      ]
    },
    {
      path: '/Abouts',
      name: 'Abouts',
      component: Layout,
      redirect: '/Abouts/index',
      children: [{
        path: 'index',
        component: Abouts
      }]
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component: Layout,
      redirect: '/Recruit/index',
      children: [
        {
          path: 'index',
          component: Recruit
        },
        {
          path: 'content',
          component: Recruitcontent
        }
      ]
    },
    {
      path: '/Volunteers',
      name: 'Volunteers',
      component: Layout,
      redirect: '/Volunteers/index',
      children: [
        {
          path: 'index',
          component: Volunteers
        },
        {
          path: 'content',
          component: Voluncontent
        }
      ]
    },
    {
      path: '/Pro',
      name: 'Pro',
      component: Layout,
      redirect: '/Pro/index',
      children: [{
        path: 'index',
        component: Pro
      }]
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Layout,
      redirect: '/Contact/index',
      children: [{
        path: 'index',
        component: Contact
      }]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Layout,
      redirect: '/Login/index',
      children: [{
        path: 'index',
        component: Login
      }]
    },
    {
      path: '/Regis',
      name: 'Regis',
      component: Layout,
      redirect: '/Regis/index',
      children: [{
        path: 'index',
        component: Regis
      }]
    },
    {
      path: '/Person',
      name: 'Person',
      component: Layout,
      redirect: '/Person/index',
      children: [
        {
          path: 'index',
          component: Person
        },
        {
          path: 'safety',
          component: Safety
        },
        {
          path: 'actives',
          component: Actives
        },
        {
          path: 'repass',
          component: Repass
        },
        {
          path: 'succ',
          component: Succ
        },
        {
          path: 'help',
          component: Help
        }
      ]
    }
  ]
})
