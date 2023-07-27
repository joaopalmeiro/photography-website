<!-- https://nuxt.com/docs/api/components/nuxt-link -->

<script setup lang="ts">
const { name, instagram } = useAppConfig()
</script>

<template>
  <header class="flex flex-col gap-4 py-16 text-neutral-900">
    <h1 class="text-4xl">
      {{ name }}
    </h1>

    <NuxtLink :to="instagram" target="_blank" class="cursor-alias">
      Follow me
    </NuxtLink>
  </header>
</template>
