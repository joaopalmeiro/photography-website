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
<!-- https://flowbite.com/docs/components/bottom-navigation/ -->

<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const { collections, name } = useAppConfig()

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

const prevPath = computed(() => {
  if (numberPhotos && currentPhoto) {
    const newId = getNextImageId(currentPhoto.id, -1, numberPhotos)

    return `/${route.params.collection}/${newId}`
  }

  return route.path
})

const nextPath = computed(() => {
  if (numberPhotos && currentPhoto) {
    const newId = getNextImageId(currentPhoto.id, 1, numberPhotos)

    return `/${route.params.collection}/${newId}`
  }

  return route.path
})

async function handlePrev () {
  await navigateTo(prevPath.value)
}

async function handleNext () {
  await navigateTo(nextPath.value)
}

onKeyStroke(PREV_NAVIGATION_KEYS, handlePrev)
onKeyStroke(NEXT_NAVIGATION_KEYS, handleNext)
onKeyStroke('Escape', async () => await navigateTo('/'))

useSeoMeta({
  title: () => `${currentCollectionName} ${route.params.id}`,
  ogTitle: () => `${currentCollectionName} ${route.params.id}`,
  description: () => `A photo by ${name}.`,
  ogDescription: () => `A photo by ${name}.`,
  author: () => name
})
</script>

<template>
  <main class="grid grid-cols-none gap-8 px-4 pt-4 md:grid-cols-photo md:p-0">
    <div
      ref="swipeableEl"
      class="flex items-center justify-center md:h-screen md:py-8 md:pl-8"
    >
      <NuxtImg
        :src="currentPhotoSrc"
        :quality="80"
        class="max-h-full max-w-full object-contain"
      />
    </div>

    <div class="flex flex-col justify-between md:py-8 md:pr-8">
      <div
        class="fixed bottom-0 left-0 z-50 flex w-full justify-center gap-2 border-t border-neutral-100 bg-white p-4 md:static md:z-auto md:justify-start md:border-0 md:p-0"
      >
        <InternalLink to="/" class="cursor-zoom-out">
          <HomeIcon class="h-6 w-6" />
        </InternalLink>
        <div class="m-2 rounded-md border border-neutral-100" />
        <InternalLink :to="prevPath" class="cursor-w-resize">
          <ChevronLeftIcon class="h-6 w-6" />
        </InternalLink>
        <InternalLink :to="nextPath" class="cursor-e-resize">
          <ChevronRightIcon class="h-6 w-6" />
        </InternalLink>
      </div>

      <div class="flex flex-col gap-4 pb-[6.5rem] text-neutral-900 md:pb-0">
        <div class="flex flex-col leading-8">
          <h2 class="text-xl">
            {{ currentCollectionName }}
          </h2>
          <span class="font-medium tabular-nums">{{ pagination }}</span>
        </div>

        <div class="flex flex-col text-sm leading-6">
          <span>{{ currentPhotoLocation }}</span>
          <span>{{ currentPhotoDate }}</span>
        </div>
      </div>
    </div>
  </main>
</template>
