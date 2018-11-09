import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/common/Layout'
import Layouts from '@/components/common/Layouts'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Layout,
      redirect: '/index',
      children: [{
        path: 'index',
        component: _import('index/Index')
      }]
    },
    {
      path: '/sub',
      name: 'Sub',
      component: Layout,
      redirect: '/sub/index',
      children: [{
        path: 'index',
        component: _import('common/Sub')
      }]
    },
    {
      path: '/server',
      name: 'server',
      redirect: '/server/company',
      component: Layouts,
      children: [
        {
          path: 'company/:cid',
          component: _import('server/Company')
        },
        {
          path: 'intro/:sid',
          component: _import('server/Intro')
        },
        {
          path: 'sub/:sid',
          component: _import('server/Sub')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Layout,
      redirect: '/login/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Login')
      }]
    },
    {
      path: '/regis',
      name: 'Regis',
      component: Layout,
      redirect: '/regis/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Regis')
      }]
    },
    {
      path: '/repass',
      name: 'Repass',
      component: Layout,
      redirect: '/repass/index',
      children: [
        {
          path: 'index',
          component: _import('regislogin/Repass')
        },
        {
          path: 'succ',
          component: _import('regislogin/Succ')
        }
      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Layouts,
      redirect: '/shop/index',
      children: [
        {
          path: 'index',
          component: _import('shop/Index')
        },
        {
          path: 'goods/:gid',
          component: _import('shop/Goods')
        },
        {
          path: 'comment',
          component: _import('shop/Comment')
        }
      ]
    },
    {
      path: '/person',
      name: 'Person',
      component: Layout,
      redirect: '/person/center',
      children: [
        {
          path: 'center',
          component: _import('person/Center')
        },
        {
          path: 'personmess',
          component: _import('person/Personmess')
        }
      ]
    },
    {
      path: '/persons',
      name: 'Persons',
      component: Layouts,
      redirect: '/person/popu',
      children: [
        {
          path: 'popu',
          component: _import('person/Popu')
        },
        {
          path: 'address',
          component: _import('person/Address')
        },
        {
          path: 'newaddress',
          component: _import('person/Newaddress')
        },
        {
          path: 'editaddress',
          component: _import('person/Editaddress')
        }
      ]
    },
    {
      path: '/shopcar',
      name: 'Buycar',
      component: Layouts,
      redirect: '/shopcar/index',
      children: [
        {
          path: 'index',
          component: _import('shopcar/Buycar')
        },
        {
          path: 'order',
          component: _import('shopcar/Orderbuy')
        }
      ]
    }
  ]
})
