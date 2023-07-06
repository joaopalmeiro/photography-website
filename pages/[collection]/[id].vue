<!-- https://gallery-nuxt.vercel.app/ -->
<!-- https://nuxt.com/docs/api/utils/navigate-to -->
<!-- https://nuxt.com/docs/api/composables/use-router#based-on-history-api -->
<!-- https://github.com/c1llo/gallery/blob/main/src/composables/useGalleryNavigation.ts -->

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

const route = useRoute()
const { collections } = useAppConfig()

const currentCollection = collections.find(
  collection => collection.slug === route.params.collection
)
const numberPhotos = currentCollection?.photos.length

const currentPhoto = currentCollection?.photos.find(
  photo => photo.id.toString() === route.params.id
)

const currentPhotoSrc = currentPhoto?.src
const currentPhotoLocation = currentPhoto?.location

const pagination = `${route.params.id} of ${numberPhotos}`

const PREV_NAVIGATION_KEYS = ['ArrowLeft', 'ArrowUp', 'a', 'A', 'w', 'W']
const NEXT_NAVIGATION_KEYS = ['ArrowRight', 'ArrowDown', 'd', 'D', 's', 'S']

onKeyStroke(PREV_NAVIGATION_KEYS, async () => {
  if (numberPhotos && currentPhoto) {
    const newId = 2

    await navigateTo(`/${route.params.collection}/${newId}`)
  }
})
onKeyStroke(NEXT_NAVIGATION_KEYS, async () => {
  if (numberPhotos && currentPhoto) {
    const newId = 5

    await navigateTo(`/${route.params.collection}/${newId}`)
  }
})
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <NuxtImg :src="currentPhotoSrc" />

      <div class="flex w-full flex-row justify-between">
        <span>{{ currentPhotoLocation }}</span>
        <span>{{ pagination }}</span>
      </div>
    </div>
  </div>
</template>
