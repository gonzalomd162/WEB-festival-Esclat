<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
}>();
//pongamos que añado un cometario
</script>

<template>
  <section class="min-h-screen px-5 pb-24 pt-36 text-black sm:px-8 sm:pt-44 lg:px-12">
    <div class="grid min-h-[72vh] grid-cols-4 gap-x-5 border-t border-black/80 pt-8 sm:grid-cols-8 lg:grid-cols-12">
      <p
        v-if="eyebrow"
        class="col-span-4 text-[11px] font-light uppercase tracking-[0.28em] text-black/55 sm:col-span-2"
      >
        {{ eyebrow }}
      </p>

      <h1
        class="col-span-4 mt-20 text-5xl font-extralight leading-[0.96] text-black sm:col-span-6 sm:mt-0 sm:text-7xl lg:col-span-8 lg:text-8xl"
      >
        {{ title }}
      </h1>

      <div class="col-span-4 mt-28 sm:col-span-8 lg:col-span-12">
        <slot />
      </div>
    </div>
  </section>
</template>
