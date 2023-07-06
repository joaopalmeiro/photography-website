<!-- https://gallery-nuxt.vercel.app/ -->

<script setup lang="ts">
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
