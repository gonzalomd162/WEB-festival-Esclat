<script setup lang="ts">
import { computed, ref } from "vue";

const festivalDays = [
  { id: "23-10", label: "23/10", background: "#fcda4b" },
  { id: "24-10", label: "24/10", background: "#fcda4b" },
  { id: "25-10", label: "25/10", background: "#fcda4b" },
] as const;

const selectedDay = ref<(typeof festivalDays)[number]["id"]>("23-10");

const activeDay = computed(
  () => festivalDays.find((day) => day.id === selectedDay.value) ?? festivalDays[0],
);
</script>

<template>
  <main
    class="min-h-dvh px-4 py-24 transition-colors duration-300 sm:px-6 lg:px-8"
    :style="{ backgroundColor: activeDay.background }"
  >
    <div class="mx-auto flex min-h-[calc(100dvh-12rem)] max-w-[1700px] flex-col">
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <button
          v-for="day in festivalDays"
          :key="day.id"
          type="button"
          class="font-hover-alt flex min-h-18 items-center justify-center gap-3 px-6 py-5 text-2xl uppercase transition-colors duration-200 sm:text-3xl"
          :class="
            selectedDay === day.id
              ? 'text-[#eb1d2b]'
              : 'text-black hover:text-[#eb1d2b]'
          "
          @click="selectedDay = day.id"
        >
          <span>{{ day.label }}</span>
        </button>
      </div>
    </div>
  </main>
</template>
