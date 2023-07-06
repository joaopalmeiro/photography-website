<!-- https://nuxt.com/docs/api/components/nuxt-link -->

<script setup lang="ts">
const { instagram } = useAppConfig()
</script>

<template>
  <header>
    <h1>João Palmeiro</h1>

    <NuxtLink :to="instagram" target="_blank" class="cursor-alias">
      Follow me
    </NuxtLink>
  </header>
</template>
