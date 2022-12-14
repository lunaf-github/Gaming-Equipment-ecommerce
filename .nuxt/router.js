import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f17eed0 = () => interopDefault(import('../pages/Accessories.vue' /* webpackChunkName: "pages/Accessories" */))
const _53c9e2ee = () => interopDefault(import('../pages/All.vue' /* webpackChunkName: "pages/All" */))
const _f5c94630 = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _017d9116 = () => interopDefault(import('../pages/Chairs.vue' /* webpackChunkName: "pages/Chairs" */))
const _7b4fa162 = () => interopDefault(import('../pages/Desks.vue' /* webpackChunkName: "pages/Desks" */))
const _0b793359 = () => interopDefault(import('../pages/headsets.vue' /* webpackChunkName: "pages/headsets" */))
const _09393658 = () => interopDefault(import('../pages/Keyboards.vue' /* webpackChunkName: "pages/Keyboards" */))
const _619b18be = () => interopDefault(import('../pages/Monitors.vue' /* webpackChunkName: "pages/Monitors" */))
const _eb2c8b80 = () => interopDefault(import('../pages/MouseDevices.vue' /* webpackChunkName: "pages/MouseDevices" */))
const _31c97522 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _6caa295a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Accessories",
    component: _7f17eed0,
    name: "Accessories"
  }, {
    path: "/All",
    component: _53c9e2ee,
    name: "All"
  }, {
    path: "/Cart",
    component: _f5c94630,
    name: "Cart"
  }, {
    path: "/Chairs",
    component: _017d9116,
    name: "Chairs"
  }, {
    path: "/Desks",
    component: _7b4fa162,
    name: "Desks"
  }, {
    path: "/headsets",
    component: _0b793359,
    name: "headsets"
  }, {
    path: "/Keyboards",
    component: _09393658,
    name: "Keyboards"
  }, {
    path: "/Monitors",
    component: _619b18be,
    name: "Monitors"
  }, {
    path: "/MouseDevices",
    component: _eb2c8b80,
    name: "MouseDevices"
  }, {
    path: "/product/:id?",
    component: _31c97522,
    name: "product-id"
  }, {
    path: "/",
    component: _6caa295a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
