<!-- https://nuxt.com/docs/api/components/nuxt-link -->

<script setup lang="ts">
const { name, instagram } = useAppConfig()
</script>

<template>
  <header class="flex flex-col items-start gap-4 py-16 text-neutral-900">
    <h1 class="text-4xl">
      {{ name }}
    </h1>

    <SocialMediaLink :to="instagram">
      <template #icon>
        <InstagramIcon class="-ml-0.5" />
      </template>
      <template #default>
        Follow me
      </template>
    </SocialMediaLink>
  </header>
</template>
