<script setup lang="ts">
defineProps<{
  title: string;
  to: string;
}>()
</script>

<template>
  <NuxtLink :to="to" class="cursor-zoom-in">
    <h2>{{ title }}</h2>
  </NuxtLink>
</template>
