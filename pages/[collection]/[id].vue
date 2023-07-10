<!-- https://gallery-nuxt.vercel.app/ -->
<!-- https://nuxt.com/docs/api/utils/navigate-to -->
<!-- https://nuxt.com/docs/api/composables/use-router#based-on-history-api -->
<!-- https://github.com/c1llo/gallery/blob/main/src/composables/useGalleryNavigation.ts -->
<!-- https://stackoverflow.com/questions/63244683/detecting-whether-a-click-has-been-made-to-the-left-side-or-on-the-right-side-of -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth -->

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

async function handlePrev () {
  if (numberPhotos && currentPhoto) {
    const newId = getNextImageId(currentPhoto.id, -1, numberPhotos)
    // console.log("PREV", newId)

    await navigateTo(`/${route.params.collection}/${newId}`)
  }
}

async function handleNext () {
  if (numberPhotos && currentPhoto) {
    const newId = getNextImageId(currentPhoto.id, 1, numberPhotos)
    // console.log("NEXT", newId)

    await navigateTo(`/${route.params.collection}/${newId}`)
  }
}

onKeyStroke(PREV_NAVIGATION_KEYS, handlePrev)
onKeyStroke(NEXT_NAVIGATION_KEYS, handleNext)
onKeyStroke('Escape', async () => await navigateTo('/'))
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
