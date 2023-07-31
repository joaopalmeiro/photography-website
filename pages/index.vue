<!-- https://github.com/c1llo/gallery/blob/main/src/pages/index.vue -->
<!-- https://github.com/c1llo/gallery/blob/main/src/composables/useImages.ts -->
<!-- https://nuxt.com/docs/api/composables/use-head + https://nuxt.com/docs/api/composables/use-seo-meta -->
<!-- https://github.com/harlan-zw/zhead/blob/main/src/metaFlat.ts -->

<script setup lang="ts">
const { collections, name: userName } = useAppConfig()

useSeoMeta({
  title: () => userName,
  ogTitle: () => userName,
  description: 'My photography portfolio.',
  ogDescription: 'My photography portfolio.',
  author: () => userName
})

// console.log(JSON.stringify(collections, null, 2))
const numberPhotos = 3
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 pb-4 md:px-8 md:pb-8">
    <ProfileHeader />

    <main>
      <div
        v-for="{ name, slug, photos } in collections"
        :key="slug"
        class="grid grid-cols-2 gap-2 md:grid-cols-4"
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
