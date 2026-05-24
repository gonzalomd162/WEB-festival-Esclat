<script setup lang="ts">
const links = [
  { label: "Cartelera", to: "/cartelera" },
  { label: "Sobre el festival", to: "/festival" },
  { label: "Ubicación", to: "/ubicacion" },
  { label: "Tickets", to: "/tickets" },
];
</script>

<template>
  <nav
    aria-label="Navegación principal"
    class="fixed left-0 top-0 z-30 grid w-full grid-cols-2 gap-y-4 px-5 py-5 text-[11px] font-light uppercase tracking-[0.22em] text-black/80 mix-blend-multiply sm:grid-cols-5 sm:px-8 lg:px-12"
  >
    <RouterLink
      to="/"
      class="w-fit transition duration-300 hover:-translate-y-px hover:text-black"
    >
      ESCLAT
    </RouterLink>

    <div
      class="col-span-2 grid grid-cols-1 gap-2 justify-self-start sm:col-span-4 sm:grid-cols-4 sm:justify-self-end sm:gap-8"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="group w-fit transition duration-300 hover:-translate-y-px hover:text-black"
      >
        <span class="border-b border-transparent pb-1 transition-[border-color,opacity] duration-300 group-hover:border-black/70">
          {{ link.label }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>
