<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    offset?: "left" | "right" | "center";
    height?: "short" | "medium" | "tall";
  }>(),
  {
    offset: "left",
    height: "medium",
  },
);

const offsetClass = {
  left: "lg:col-start-1",
  center: "lg:col-start-4",
  right: "lg:col-start-7",
};

const heightClass = {
  short: "min-h-44 sm:min-h-56",
  medium: "min-h-64 sm:min-h-80",
  tall: "min-h-80 sm:min-h-[28rem]",
};
</script>

<template>
  <section
    class="grid grid-cols-4 border-t border-black/70 py-8 sm:grid-cols-8 lg:grid-cols-12"
  >
    <h2
      class="col-span-4 text-3xl font-extralight leading-none text-black sm:text-5xl lg:col-span-5 lg:text-6xl"
    >
      {{ title }}
    </h2>

    <div
      :class="[
        offsetClass[offset],
        heightClass[height],
        'col-span-4 mt-20 border-l border-black/20 sm:col-span-5 sm:mt-24 lg:col-span-6 lg:mt-32',
      ]"
      aria-hidden="true"
    />
  </section>
</template>
