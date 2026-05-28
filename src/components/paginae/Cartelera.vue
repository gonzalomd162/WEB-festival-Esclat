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

const artistasSecundarios = [
  lineup.secundarios,
  ...lineup.terciarios,
  ...lineup.cuaternarios,
];

const separarArtistas = (linea: string) => linea.split(" - ");

const botonArtistaClase =
  "inline cursor-pointer bg-transparent p-0 text-inherit hover:italic focus-visible:outline-none";
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-4 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-8">
    <div class="relative z-10 mx-auto max-w-[1600px]">
      <div class="mb-8 flex items-end justify-between pb-4">
        <h2 class="text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">
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

      <div class="flex flex-col items-center space-y-8 text-center md:space-y-10">
        <section class="max-w-6xl">
          <h3 class="mb-8 text-3xl font-black uppercase leading-[0.9] md:text-5xl lg:text-6xl">
            <template
              v-for="(artista, idx) in separarArtistas(lineup.principales)"
              :key="artista"
            >
              <button type="button" :class="botonArtistaClase">
                {{ artista }}
              </button>
              <span v-if="idx < separarArtistas(lineup.principales).length - 1"> - </span>
            </template>
          </h3>
        </section>

        <section class="max-w-5xl space-y-2">
          <p
            v-for="(linea, idx) in artistasSecundarios"
            :key="idx"
            :class="[
              'uppercase leading-tight',
              idx === 0
                ? 'text-2xl font-black md:text-4xl lg:text-5xl'
                : 'text-lg font-bold leading-none md:text-2xl lg:text-3xl',
              idx === 1 ? 'pt-4 md:pt-15' : '',
            ]"
          >
            <template
              v-for="(artista, artistaIdx) in separarArtistas(linea)"
              :key="artista"
            >
              <button type="button" :class="botonArtistaClase">
                {{ artista }}
              </button>
              <span v-if="artistaIdx < separarArtistas(linea).length - 1"> - </span>
            </template>
          </p>
        </section>

        <section class="w-full py-2">
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

        <div class="-mt-16 mb-2 h-[32rem] w-[32rem] max-w-full md:-mt-28 md:h-[64rem] md:w-[64rem]">
          <img
            src="/imagines/Esclat/RATILLA.png"
            alt=""
            class="h-full w-full object-contain"
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.RouterLink {
  transition: all 0.3s ease;
}
</style>
