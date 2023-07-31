<script setup lang="ts">
defineProps<{
  to: string;
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
  >
    <slot />
  </NuxtLink>
</template>
