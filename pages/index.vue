<!-- https://github.com/c1llo/gallery/blob/main/src/pages/index.vue -->

<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <ProfileHeader />

    <main>
      <div class="grid grid-cols-6 gap-2">
        <CollectionTitle title="Black & Night" />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard :extra-count="5" />
      </div>
    </main>
  </div>
</template>
