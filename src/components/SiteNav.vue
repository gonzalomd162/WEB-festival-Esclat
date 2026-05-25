<script setup lang="ts">
const links = [
  { label: "Cartelera", to: "/cartelera" },
  { label: "Sobre el festival", to: "/sobre-el-festival" },
  { label: "Ubicacion", to: "/ubicacion" },
  { label: "Entradas", to: "/entradas" },
];
</script>

<template>
  <nav
    aria-label="Navegacion principal"
    class="fixed left-0 top-0 z-30 grid w-full grid-cols-2 gap-y-4 px-5 py-5 text-[11px] font-light uppercase tracking-[0.22em] text-black/80 mix-blend-multiply sm:grid-cols-5 sm:px-8 lg:px-12"
  >
    <RouterLink
      to="/"
      class="font-hover-alt w-fit"
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
        class="font-hover-alt w-fit"
      >
        <span class="border-b border-transparent pb-1">
          {{ link.label }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>
