// https://nuxt.com/docs/guide/directory-structure/app-config
// https://github.com/Atinux/content-wind/blob/main/app.config.ts
// https://nuxt.com/docs/api/composables/use-app-config
// https://github.com/Atinux/content-wind/blob/main/components/AppLayout.vue

import slugify from 'slugify'

interface Photo {
  src: string;
}

interface Collection {
  name: string;
  photos: Photo[];
}

const collections: Collection[] = [
  {
    name: 'Black & Night',
    photos: [
      {
        src: 'https://placehold.co/600x400'
      },
      {
        src: 'https://placehold.co/600x400'
      },
      {
        src: 'https://placehold.co/600x400'
      },
      {
        src: 'https://placehold.co/600x400'
      },
      {
        src: 'https://placehold.co/600x400'
      },
      {
        src: 'https://placehold.co/600x400'
      }
    ]
  }
]

export default defineAppConfig({
  name: 'João Palmeiro',
  instagram: 'https://www.instagram.com/joaompalmeiro/',
  collections: collections.map((collection) => {
    const slug = slugify(collection.name, { lower: true })
    const photos = collection.photos.map((photo, index) => {
      const id = index + 1

      return {
        ...photo,
        id
      }
    })

    return { ...collection, slug, photos }
  })
})
