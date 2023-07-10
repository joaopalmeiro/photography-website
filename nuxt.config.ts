// https://tailwindcss.nuxtjs.org/getting-started/setup
// https://nuxt.com/docs/api/configuration/nuxt-config#css
// https://tailwindui.com/documentation#optional-add-the-inter-font-family
// https://nuxt.com/docs/api/configuration/nuxt-config#head

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  tailwindcss: {
    viewer: false
  },
  css: ['@/assets/font.css']
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'preconnect', href: 'https://rsms.me/' },
  //       { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  //     ]
  //   }
  // }
})
