<!-- https://nuxt.com/docs/api/components/nuxt-link -->

<script setup lang="ts">
const { name, instagram } = useAppConfig()
</script>

<template>
  <header>
    <h1>{{ name }}</h1>

    <NuxtLink :to="instagram" target="_blank" class="cursor-alias">
      Follow me
    </NuxtLink>
  </header>
</template>
