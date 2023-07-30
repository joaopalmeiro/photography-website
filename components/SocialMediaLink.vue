<script setup lang="ts">
defineProps<{
  to: string;
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    target="_blank"
    class="flex cursor-alias items-center justify-center gap-1.5 rounded-md border border-neutral-100 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
  >
    <slot name="icon" />
    <slot />
  </NuxtLink>
</template>
