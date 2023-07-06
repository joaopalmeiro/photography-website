<!-- https://github.com/c1llo/gallery/blob/main/src/pages/index.vue -->
<!-- https://github.com/c1llo/gallery/blob/main/src/composables/useImages.ts -->

<script setup lang="ts">
const { collections } = useAppConfig()

const numberPhotos = 5
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <ProfileHeader />

    <main>
      <div
        v-for="{ name, slug, photos } in collections"
        :key="slug"
        class="grid grid-cols-6 gap-2"
      >
        <CollectionTitle :title="name" :to="`/${slug}/${photos[0].id}`" />

        <template v-if="photos.length <= numberPhotos">
          <CollectionCard
            v-for="{ id, src } in photos"
            :key="`${slug}-${id}`"
            :src="src"
            :to="`/${slug}/${id}`"
          />
        </template>

        <template v-else>
          <CollectionCard
            v-for="{ id, src } in photos.slice(0, numberPhotos - 1)"
            :key="`${slug}-${id}`"
            :src="src"
            :to="`/${slug}/${id}`"
          />
          <CollectionCard
            :src="photos[numberPhotos - 1].src"
            :to="`/${slug}/${photos[numberPhotos - 1].id}`"
            :extra-count="photos.length - numberPhotos"
          />
        </template>
      </div>
    </main>
  </div>
</template>
