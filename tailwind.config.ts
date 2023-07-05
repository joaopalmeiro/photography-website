// https://tailwindcss.nuxtjs.org/tailwind/config#merging-strategy
// https://github.com/tailwindlabs/tailwindcss/blob/v3.3.2/stubs/config.full.js#L27
// https://tailwindcss.com/docs/aspect-ratio

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        photo: '3 / 2'
      }
    }
  }
}
