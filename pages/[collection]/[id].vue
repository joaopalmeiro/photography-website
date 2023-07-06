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

const pagination = `${route.params.id} of ${numberPhotos}`
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <NuxtImg :src="currentPhotoSrc" />
      <p>{{ pagination }}</p>
    </div>
  </div>
</template>
