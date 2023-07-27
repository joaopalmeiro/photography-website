<script setup lang="ts">
defineProps<{
  title: string;
  to: string;
}>()
</script>

<template>
  <NuxtLink :to="to" class="cursor-zoom-in">
    <h2 class="text-neutral-900">
      {{ title }}
    </h2>
  </NuxtLink>
</template>
