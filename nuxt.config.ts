// https://tailwindcss.nuxtjs.org/getting-started/setup
// https://nuxt.com/docs/api/configuration/nuxt-config#css
// https://tailwindui.com/documentation#optional-add-the-inter-font-family
// https://nuxt.com/docs/api/configuration/nuxt-config#head
// https://image.nuxtjs.org/configuration#dir + https://nuxt.com/docs/getting-started/assets
// https://nuxt.com/docs/api/configuration/nuxt-config#generate + https://nitro.unjs.io/config#prerender
// https://nitro.unjs.io/config#routerules
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307

import type { NitroConfig } from 'nitropack'
import config from './photos.config'

const dynamicPhotoRoutes: string[] = config.collections
  .map(collection =>
    collection.photos.map(photo => `/${collection.slug}/${photo.id}`)
  )
  .flat()

const collectionToFirstPhoto = config.collections.reduce<NitroConfig['routeRules']>((acc, collection) => {
  const from = `/${collection.slug}`
  const to = `${from}/1`

  return {
    ...acc,
    [from]: { redirect: { to, statusCode: 307 } }
  }
}, {})

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt'],
  tailwindcss: {
    viewer: false
  },
  css: ['@/assets/font.css'],
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'preconnect', href: 'https://rsms.me/' },
  //       { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  //     ]
  //   }
  // }
  image: {
    dir: 'assets/images'
  },
  nitro: {
    prerender: { crawlLinks: false, ignore: [], routes: dynamicPhotoRoutes },
    routeRules: collectionToFirstPhoto
  }
})
