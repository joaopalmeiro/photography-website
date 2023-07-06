<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <NuxtLink to="/p" class="cursor-zoom-in">
    <h2>{{ title }}</h2>
  </NuxtLink>
</template>
