<!-- https://nuxt.com/docs/api/components/nuxt-link -->

<script setup lang="ts">
import { InstagramIcon } from 'vue-social-media-icons'

const { name, instagram, portraitMode, gitHub } = useAppConfig()
</script>

<template>
  <header class="flex flex-col items-start gap-6 py-24 text-neutral-900">
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl">
        {{ name }}
      </h1>

      <p class="text-neutral-700">
        My photography portfolio. The photos are grouped by collections.
      </p>
    </div>

    <div class="flex flex-wrap gap-2">
      <SocialMediaLink :to="instagram">
        <template #icon>
          <InstagramIcon class="-ml-0.5" />
        </template>
        Follow me
      </SocialMediaLink>
      <SocialMediaLink :to="portraitMode">
        PortraitMode
      </SocialMediaLink>
      <SocialMediaLink :to="gitHub">
        <template #icon>
          <GitHubIcon class="-ml-0.5" />
        </template>
        Source code
      </SocialMediaLink>
    </div>
  </header>
</template>
