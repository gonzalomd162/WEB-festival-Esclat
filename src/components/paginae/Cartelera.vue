<script setup lang="ts">
const lineup = {
  principales:
    "Wilco - Los Planetas - Carolina Durante - Manel - The Divine Comedy - Hoke",
  secundarios:
    "Adam Green - Alcala Norte - Eels - El Mato a un Policia Motorizado - La Bien Querida - Ill Pekeno y Ergo Pro",
  terciarios: [
    "Boletus - Eldiablo de Shanghai - Nepal Nepal - L`haine",
    "Rita Payes - Els Amics de les Arts - I'm From Barcelona",
    "Nico Miseria - Maria Arnal",
  ],
  cuaternarios: [
    "La buena Vida - Platz - Mala Gestion",
    "Diego 900 - Luna",
  ],
  activitats: [
    "Taller d'escultura musical - Elaboracion d'instruments inusuals",
    "Conferencia de idees absurdes - Creacion de fanzines express",
    "Customitzacio de samarretes - Laboratori de samples",
    "...i molt mes...",
  ],
};
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-6 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-12">
    <div class="relative z-10 mx-auto max-w-[1600px]">
      <div class="mb-16 flex items-end justify-between border-b-4 border-[#eb1d2b] pb-4">
        <h2 class="text-6xl font-black uppercase italic leading-[0.8] tracking-tighter md:text-9xl">
          Cartelera
        </h2>

        <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
          <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
            Volver a Inicio
          </span>
          <img
            src="/imagines/Esclat/Artboard 2_1-8.png"
            alt="Boton de Inicio"
            class="h-auto w-20 object-contain md:w-32"
          >
        </RouterLink>
      </div>

      <div class="flex flex-col items-center space-y-16 text-center">
        <section class="max-w-6xl">
          <h3 class="mb-8 text-3xl font-black uppercase leading-[0.8] md:text-5xl lg:text-6xl">
            {{ lineup.principales }}
          </h3>
        </section>

        <section class="max-w-5xl">
          <h4 class="text-2xl font-black uppercase leading-[0.9] md:text-4xl lg:text-5xl">
            {{ lineup.secundarios }}
          </h4>
        </section>

        <section class="max-w-4xl space-y-4">
          <p
            v-for="(linea, idx) in lineup.terciarios"
            :key="idx"
            class="text-lg font-bold uppercase leading-none md:text-2xl lg:text-3xl"
          >
            {{ linea }}
          </p>
        </section>

        <section class="max-w-3xl space-y-2">
          <p
            v-for="(linea, idx) in lineup.cuaternarios"
            :key="idx"
            class="text-base font-bold uppercase italic leading-tight md:text-lg lg:text-xl"
          >
            {{ linea }}
          </p>
        </section>

        <section class="w-full py-8">
          <div class="space-y-6">
            <p
              v-for="(linea, idx) in lineup.activitats"
              :key="idx"
              class="text-xl font-black uppercase italic leading-none md:text-3xl lg:text-4xl"
            >
              {{ linea }}
            </p>
          </div>
        </section>

        <div class="my-12 h-72 w-72 md:h-[30rem] md:w-[30rem]">
          <img
            src="/imagines/Esclat/RATILLA.png"
            alt=""
            class="h-full w-full object-contain"
          >
        </div>
      </div>

      <div class="mt-24 flex items-center justify-between border-t-4 border-[#eb1d2b] pt-8">
        <p class="text-xs font-bold uppercase tracking-widest">
          Esclat Festival 2026 - Valencia
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.RouterLink {
  transition: all 0.3s ease;
}
</style>
