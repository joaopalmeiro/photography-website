<!-- https://www.hyperui.dev/blog/how-to-write-better-containers-in-tailwindcss -->

<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <ProfileHeader />

    <div class="grid grid-cols-6 gap-2">
      <div>
        <h2>Black & Night</h2>
      </div>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard :extra-count="5" />
    </div>
  </div>
</template>
