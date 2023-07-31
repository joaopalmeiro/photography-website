<!-- https://gallery-nuxt.vercel.app/ -->
<!-- https://nuxt.com/docs/api/utils/navigate-to -->
<!-- https://nuxt.com/docs/api/composables/use-router#based-on-history-api -->
<!-- https://github.com/c1llo/gallery/blob/main/src/composables/useGalleryNavigation.ts -->
<!-- https://stackoverflow.com/questions/63244683/detecting-whether-a-click-has-been-made-to-the-left-side-or-on-the-right-side-of -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth -->
<!-- https://devhints.io/wip/intl-datetime -->
<!-- https://image.nuxtjs.org/components/nuxt-img#quality (100, 90, 80 or 55) -->
<!-- class="max-h-[40rem]" -->
<!-- https://image.nuxtjs.org/configuration#screens -->
<!-- https://sharp.pixelplumbing.com/api-output#webp -->
<!-- https://stackoverflow.com/questions/15295697/make-an-image-to-fit-its-parent-dimensions -->
<!-- https://nuxt.com/docs/api/utils/create-error -->
<!-- https://github.com/c1llo/gallery/blob/main/src/layouts/gallery.vue#L18 -->
<!-- https://image.nuxtjs.org/components/nuxt-img#preload or https://image.nuxtjs.org/components/nuxt-img#loading -->
<!-- https://stackoverflow.com/questions/46699452/how-to-set-max-height-to-a-css-grid -->
<!-- https://vuejs.org/guide/essentials/list.html#v-for-with-a-range -->
<!-- https://vueuse.org/core/useSwipe/ -->
<!-- https://github.com/vueuse/vueuse/blob/main/packages/core/useSwipe/demo.vue -->

<script setup lang="ts">
const route = useRoute()
const { collections } = useAppConfig()

const swipeableEl = ref<HTMLElement | null>(null)
const { direction } = useSwipe(swipeableEl, {
  onSwipeEnd () {
    if (direction.value === 'right') {
      handlePrev()
    }
    if (direction.value === 'left') {
      handleNext()
    }
  }
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
})

const currentCollection = collections.find(
  collection => collection.slug === route.params.collection
)

const currentCollectionName = currentCollection?.name
const numberPhotos = currentCollection?.photos.length

const currentPhoto = currentCollection?.photos.find(
  photo => photo.id.toString() === route.params.id
)

if (!currentPhoto) {
  throw createError({
    statusCode: 404,
    message: 'Photo not found',
    fatal: true
  })
}

const currentPhotoSrc = currentPhoto?.src
const currentPhotoLocation = currentPhoto?.location
const currentPhotoDate = dateFormatter.format(currentPhoto?.date)

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
  <main class="grid grid-cols-photo">
    <div
      ref="swipeableEl"
      class="flex h-screen items-center justify-center py-6"
    >
      <NuxtImg
        :src="currentPhotoSrc"
        :quality="80"
        class="aspect-photo max-h-full max-w-full"
      />
    </div>

    <div class="flex flex-col justify-between py-8 text-neutral-900">
      <div class="flex flex-col leading-8">
        <h2 class="text-xl">
          {{ currentCollectionName }}
        </h2>
        <span class="font-medium tabular-nums">{{ pagination }}</span>
      </div>

      <div>
        <hr
          v-for="n in Number(route.params.id)"
          :key="n"
          class="my-4 border-neutral-200"
        >
      </div>

      <div class="flex flex-col leading-6">
        <span>{{ currentPhotoLocation }}</span>
        <span>{{ currentPhotoDate }}</span>
      </div>
    </div>
  </main>
</template>
