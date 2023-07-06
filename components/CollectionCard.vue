<!-- https://ui.shadcn.com/docs/components/card -->
<!-- https://www.hyperui.dev/components/marketing/cards -->
<!-- https://ui.nuxtlabs.com/layout/card -->
<!-- https://nuxt.com/modules/image/changelog -->
<!-- https://v1.image.nuxtjs.org/providers/ipx -->
<!-- https://github.com/unjs/ipx -->
<!-- https://blog.imgix.com/2021/09/14/nuxt-image-component -->
<!-- https://image.nuxtjs.org/providers/introduction#default-provider -->
<!-- https://placehold.co/600x400 -->
<!-- https://github.com/c1llo/gallery/blob/main/src/pages/index.vue -->
<!-- https://vuejs.org/guide/essentials/computed.html#basic-example -->
<!-- https://router.vuejs.org/api/interfaces/RouteLocation.html -->

<script setup lang="ts">
const props = defineProps<{
  src: string;
  to: string;
  extraCount?: number;
}>()

const extraCountLabel = computed(() => {
  return props.extraCount ? `+${props.extraCount}` : ''
})
</script>

<template>
  <NuxtLink :to="to" class="cursor-zoom-in grid">
    <NuxtImg :src="src" class="col-span-full row-span-full" />

    <div v-if="extraCount" class="col-span-full row-span-full">
      {{ extraCountLabel }}
    </div>
  </NuxtLink>
</template>
