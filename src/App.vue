<script setup lang="ts">
import { RouterView } from "vue-router";

const homeButtonArtwork = "/imagines/Esclat/Artboard 2_1-8.png";
</script>

<template>
  <div class="min-h-dvh font-sans">
    <RouterLink
      to="/"
      aria-label="Volver al inicio"
      class="fixed right-4 top-4 z-50 block w-24 max-w-[28vw] sm:right-6 sm:top-6 sm:w-28 lg:w-32"
    >
      <img
        :src="homeButtonArtwork"
        alt="Volver al inicio"
        class="block w-full object-contain"
      />
    </RouterLink>

    <RouterView />
  </div>
</template>
