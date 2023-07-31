# photography-website

My photography portfolio.

## Development

Get social media icons from the [social-media-icons](https://github.com/joaopalmeiro/social-media-icons) repo.

```bash
fnm install && fnm use && node --version
```

```bash
npm install
```

```bash
npm run dev -- -o
```

```bash
npx nuxi typecheck
```

```bash
npx nuxi cleanup && rm -rf .vercel/output/ node_modules/
```

```bash
npm outdated
```

## Deployment

```bash
npm run login
```

```bash
npm run vbuild
```

```bash
npm run deploy
```

## Notes

- https://github.com/Schniz/fnm
- https://nuxt.com/docs/getting-started/installation
- `rm -rf node_modules/ .nuxt`
- `npm install -D nuxt @nuxtjs/eslint-config-typescript eslint-plugin-nuxt eslint @nuxtjs/tailwindcss`
- `npm install -D @nuxt/image@rc`
- `npm install slugify`
- `npm install -D slugify`
- `npm install -D eslint-plugin-tailwindcss`
- `npm install @vueuse/core` or `npm install -D @vueuse/nuxt @vueuse/core`
- `npm install -D vercel`
- https://nuxt.com/docs/api/commands/prepare
- https://nuxt.com/docs/guide/directory-structure/server
- https://github.com/c1llo/gallery
- https://nuxt.com/docs/examples/hello-world
- https://github.com/nuxt-modules/eslint
- https://tailwindcss.com/docs/guides/nuxtjs#3
- https://nuxt.com/modules
- https://github.com/nuxt/eslint-config
- https://github.com/nuxt/eslint-plugin-nuxt
- https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/package.json
- https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/index.js
- https://eslint.org/docs/latest/use/configure/configuration-files
- https://github.com/nuxt/eslint-config/tree/main/packages/eslint-config-legacy
- https://github.com/nuxt/eslint-config/tree/main/packages/eslint-config-legacy-typescript
- https://github.com/nuxt/content/blob/main/.eslintrc + https://github.com/nuxt/content/blob/main/package.json + https://github.com/nuxt/image/blob/main/package.json
- https://ui.nuxtlabs.com/getting-started
- https://tailwindcss.nuxtjs.org/examples/nuxtlabs-ui
- https://www.npmjs.com/package/eslint-plugin-tailwindcss
- https://tailwindcss.com/docs/translate#hardware-acceleration
- https://heroicons.com/
- https://lucide.dev/
- https://nuxt.com/modules/icons
- https://tailwindui.com/
- https://spotlight.tailwindui.com/ + https://ui.nuxtlabs.com/getting-started + https://ark-ui.com/docs/vue/overview/getting-started
- https://headlessui.com/
- https://www.anron.pro/
- https://www.adobe.com/express/discover/sizes/photo-aspect-ratio
- https://vercel.com/docs/cli/deploying-from-cli
- https://github.com/lucide-icons/lucide/blob/main/icons/instagram.svg?short_path=e435f4b
- https://www.npmjs.com/package/lucide-vue-next?activeTab=code
- https://nuxt.com/docs/guide/concepts/typescript
- https://eslint.vuejs.org/rules/multi-word-component-names.html + https://github.com/nuxt/content/blob/main/.eslintrc + https://github.com/nuxt/eslint-plugin-nuxt/issues/189
- https://github.com/nuxt/nuxt/issues/6830
- https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
- https://knowledge.evinced.com/elements/landmarks/aside + https://imgs.so/posts/39345d
- https://github.com/nuxt-modules/fontaine
- https://tailwindui.com/documentation
- https://github.com/evilmartians/mono + https://github.com/evilmartians/mono/releases
- https://rsms.me/inter + https://github.com/rsms/inter/releases
- https://evilmartians.com/chronicles/the-joy-of-variable-fonts-getting-started-on-the-frontend
- https://uploadcare.com/pricing/
- https://support.cloudinary.com/hc/en-us/articles/202520592-Do-you-have-a-file-size-limit-
- https://dev.to/jacobandrewsky/optimized-images-in-nuxt-with-cloudinary-4897 + https://github.com/nuxt-modules/cloudinary
- https://faizalwestcott.com/lisbon-22
- https://nuxt.com/docs/api/commands/cleanup
- https://medium.com/design-bridges/optical-effects-9fca82b4cd9a
- https://github.com/cpsoinos/nuxt-svgo
- https://github.com/jpkleemans/vite-svg-loader + https://github.com/damianstasik/vue-svg-loader/issues/180
- https://github.com/nuxt-community/svg-module
- https://github.com/shrpne/vue-inline-svg
- https://github.com/shadcn-ui/ui/blob/main/tailwind.config.cjs
- https://ui.shadcn.com/docs/theming
- https://ui.shadcn.com/docs/components/button#outline + https://ui.shadcn.com/docs/components/button#with-icon
- https://tailwindui.com/components/application-ui/elements/buttons
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2`
- https://vercel.com/docs/cli:
  - Build Command: `npm run generate`
  - Install Command: `npm install`
  - Development Command: `npm run dev`
- https://github.com/nuxt/image/issues/757 + https://github.com/unjs/nitro/pull/1073
- https://github.com/nuxt/image/issues/689#issuecomment-1399187132
- https://github.com/nuxt/image/issues/617
- https://vercel.com/docs/frameworks/nuxt#nuxt-route-middleware-on-vercel
- `npm cache clean --force`
- https://github.com/nuxt/nuxt/issues/22083 + https://github.com/nuxt/nuxt/issues/22072
- https://github.com/nuxt/image/issues/933 + https://github.com/nuxt/image/issues/893
- https://github.com/nuxt/image/pull/882

## Snippets

### `middleware/trailing-slash.global.ts`

```ts
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
```
