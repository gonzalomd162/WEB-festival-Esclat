<script setup lang="ts">
import posterIllustration from "@/assets/img/rana-gonzalo-roja.png";

const links = [
  { label: "TICKETS", to: "/tickets" },
  { label: "CARTELERA", to: "/cartelera" },
  { label: "SOBRE EL FESTIVAL", to: "/sobre-el-festival" },
  { label: "UBICACIÓ", to: "/ubicacio" },
] as const;
</script>

<template>
  <main
    class="relative min-h-dvh overflow-hidden bg-[#E5C51A] px-6 py-8 text-[#FF2A2A] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
  >
    <h1
      class="relative z-10 text-[clamp(5.25rem,16vw,13rem)] font-bold uppercase leading-[0.74] tracking-normal"
    >
      ESCLAT
    </h1>

    <nav
      aria-label="Navegación principal"
      class="relative z-20 mt-16 flex flex-col items-start gap-4 font-neue-regular sm:mt-20 sm:gap-5 lg:mt-24"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-[clamp(2.3rem,4.6vw,4rem)] font-normal uppercase leading-none tracking-normal transition duration-200 hover:translate-x-1 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#FF2A2A]"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <img
      :src="posterIllustration"
      alt=""
      class="pointer-events-none absolute bottom-0 right-0 z-0 w-[92vw] max-w-none translate-x-[10%] translate-y-[1%] select-none object-contain sm:w-[76vw] md:w-[70vw] lg:w-[68vw] xl:w-[66vw]"
    />
  </main>
</template>
