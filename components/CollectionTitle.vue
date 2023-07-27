<script setup lang="ts">
defineProps<{
  title: string;
  to: string;
}>()
</script>

<template>
  <NuxtLink :to="to" class="flex cursor-zoom-in items-center justify-center border-y-2 border-r-2 border-neutral-900 p-2">
    <h2 class="w-full text-xl text-neutral-900">
      {{ title }}
    </h2>
  </NuxtLink>
</template>
