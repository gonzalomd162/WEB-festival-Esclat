<script setup lang="ts">
import posterIllustration from "@/assets/img/rana-gonzalo-roja.png";

const links = [
  { label: "Tickets", to: "/entradas" },
  { label: "Cartelera", to: "/cartelera" },
  { label: "Sobre el Festival", to: "/sobre-el-festival" },
  { label: "Ubicación", to: "/ubicacion" },
] as const;
</script>

<template>
  <div>
    <main
      class="relative flex min-h-dvh flex-col overflow-hidden bg-[#fcda4b] px-6 py-8 text-[#eb1d2b] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
    <img 
    class="flex w-200 h-auto"
    src="/imagines/Esclat/Artboard 2-8.png" 
    alt="">
      <nav
        aria-label="Navegacion principal"
        class="relative z-20 mt-auto flex flex-col items-start gap-4 pb-6 sm:gap-5 sm:pb-8 lg:pb-10"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-hover-alt text-[clamp(2.3rem,4.6vw,4rem)] font-normal leading-none tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#FF2A2A]"
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

    <footer class="bg-black px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-16">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.2em] text-white/60">Contacto</p>
          <!-- <h2 class="text-3xl uppercase leading-none sm:text-4xl">
            Informacion del festival
          </h2> -->
          <!-- <p class="max-w-xl text-base text-white/75">
            Anade aqui el correo, redes sociales, telefono o cualquier otra via
            de contacto que quieras mostrar al final de la pagina.
          </p> -->
        </div>

        <div class="grid gap-4 text-lg sm:justify-self-end sm:text-right">
          <p>esclat@gmail.com</p>
          <p>+34 000 000 000</p>
          <p>@esclatfestival</p>
          <p>Valencia, España</p>
        </div>
      </div>
    </footer>
  </div>
</template>
