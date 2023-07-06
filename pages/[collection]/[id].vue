<script setup lang="ts">
const route = useRoute()
const { collections } = useAppConfig()

const currentCollection = collections.find(collection => collection.slug === route.params.collection)
const numberPhotos = currentCollection?.photos.length

const pagination = computed(() => {
  return `${route.params.id} of ${numberPhotos}`
})
</script>

<template>
  <div>
    {{ pagination }}
  </div>
</template>
