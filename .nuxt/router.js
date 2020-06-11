import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e872d47e = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _1f73a8bf = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _faee2f2c = () => interopDefault(import('..\\pages\\suggest\\index.vue' /* webpackChunkName: "pages_suggest_index" */))
const _5ead2dd5 = () => interopDefault(import('..\\pages\\admin\\newPost\\index.vue' /* webpackChunkName: "pages_admin_newPost_index" */))
const _f549788a = () => interopDefault(import('..\\pages\\admin\\_id\\index.vue' /* webpackChunkName: "pages_admin__id_index" */))
const _00c8f266 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _40362b18 = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e872d47e,
    name: "about"
  }, {
    path: "/admin",
    component: _1f73a8bf,
    name: "admin"
  }, {
    path: "/suggest",
    component: _faee2f2c,
    name: "suggest"
  }, {
    path: "/admin/newPost",
    component: _5ead2dd5,
    name: "admin-newPost"
  }, {
    path: "/admin/:id",
    component: _f549788a,
    name: "admin-id"
  }, {
    path: "/",
    component: _00c8f266,
    name: "index"
  }, {
    path: "/:id",
    component: _40362b18,
    name: "id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
