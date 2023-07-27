// Source: https://blog.adriaan.io/redirect-trailing-slashes-in-nuxt-3.html
// https://nuxt.com/docs/guide/directory-structure/middleware#what-order-middleware-runs-in
// https://github.com/unjs/ufo
// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware
// https://router.vuejs.org/api/interfaces/RouteLocationNormalized.html

import { withoutTrailingSlash } from 'ufo'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    const newPath = withoutTrailingSlash(to.path)

    return navigateTo(newPath, { redirectCode: 308 })
  }
})
