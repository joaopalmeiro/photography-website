<!-- https://www.hyperui.dev/blog/how-to-write-better-containers-in-tailwindcss -->
<!-- https://css-tricks.com/link-header-header-link/ -->

<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <ProfileHeader />

    <div class="grid grid-cols-6 gap-2">
      <CollectionTitle title="Black & Night" />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard :extra-count="5" />
    </div>
  </div>
</template>
