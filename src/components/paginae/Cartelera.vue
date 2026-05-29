<script setup lang="ts">
import { ref } from 'vue';
// 1. Importamos desde tu archivo de datos (usa @/data/artistas o ./artistas según tu estructura)
import { obtenerArtistaPorNombre, type Artista } from './artistas';

const lineup = {
  principales:
    "Wilco - Los Planetas - Carolina Durante - Manel - The Divine Comedy - Hoke",
  secundarios:
    "Adam Green - Alcala Norte - Eels - El Mato a un Policia Motorizado - La Bien Querida - Ill Pekeño y Ergo Pro",
  terciarios: [
    "Boletus - El diablo de Shanghai - Nepal Nepal - L`haine",
    "Rita Payés - Els Amics de les Arts - I'm From Barcelona",
    "Nico Miseria - Maria Arnal",
  ],
  cuaternarios: [
    "La buena Vida - Platz - Mala Gestión",
    "Diego 900 - Luna",
  ],
  activitats: [
    "Taller d'escultura musical - Elaboració d'instruments inusuals",
    "Conferència de idees absurdes - Creació de fanzines express",
    "Customització de samarretes - Laboratori de samples",
    "...i molt més...",
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

const artistaSeleccionado = ref<Artista | null>(null);

const abrirDetalleArtista = (nombre: string) => {
  const nombreLimpio = nombre.trim();
  const artista = obtenerArtistaPorNombre(nombreLimpio);
  
  if (artista) {
    artistaSeleccionado.value = artista;
  } else {
    console.warn(`No se encontró la información para el artista: ${nombreLimpio}`);
  }
};

const cerrarModal = () => {
  artistaSeleccionado.value = null;
};
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
              <button 
                type="button" 
                :class="botonArtistaClase"
                @click="abrirDetalleArtista(artista)"
              >
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
              <button 
                type="button" 
                :class="botonArtistaClase"
                @click="abrirDetalleArtista(artista)"
              >
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
              class="text-xl font-black uppercase leading-none md:text-3xl lg:text-4xl"
            >
              {{ linea }}
            </p>
          </div>
        </section>
      </div>
    </div>

    <img 
      src="/imagines/Esclat/silla.png" 
      alt="" 
      class="absolute bottom-4 left-4 lg:top-1/2 lg:bottom-auto lg:left-10 z-0 w-32 md:w-64 lg:w-96 pointer-events-none opacity-90 lg:-translate-y-1/2"
    >
    <img 
      src="/imagines/Esclat/flores.png" 
      alt="" 
      class="absolute bottom-4 right-4 lg:top-1/2 lg:bottom-auto lg:right-10 z-0 w-40 md:w-80 lg:w-[400px] pointer-events-none opacity-90 lg:-translate-y-1/2"
    >

    <div 
      v-if="artistaSeleccionado" 
      class="artist-modal fixed inset-0 z-50 grid w-screen bg-[#fcda4b] text-[#eb1d2b] animate-in"
    >
      <div class="artist-modal__media relative min-h-0 w-full bg-black">
        <img 
          :src="artistaSeleccionado.foto" 
          :alt="artistaSeleccionado.nombre" 
          class="h-full w-full object-cover"
        />
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 text-left">
          <h4 class="artist-modal__title font-black uppercase tracking-tighter drop-shadow-md">
            {{ artistaSeleccionado.nombre }}
          </h4>
        </div>

        <button 
          type="button" 
          class="group absolute right-4 top-4 h-12 w-12 transition-transform hover:scale-105 active:scale-95 focus:outline-none md:right-6 md:top-6 md:h-16 md:w-16"
          aria-label="Cerrar detalle del artista"
          @click="cerrarModal"
        >
          <img
            src="/imagines/Esclat/BACKRED.png"
            alt=""
            class="h-full w-full object-contain group-hover:hidden"
          />
          <img
            src="/imagines/Esclat/BACKYW.png"
            alt=""
            class="hidden h-full w-full object-contain group-hover:block"
          />
        </button>
      </div>

      <div class="artist-modal__content min-h-0 w-full overflow-y-auto bg-[#fcda4b] px-5 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 lg:px-12 lg:py-7">
        <div class="flex h-full items-center text-left">
          <p class="artist-modal__description font-bold leading-snug tracking-tight">
            {{ artistaSeleccionado.descripcion }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.RouterLink {
  transition: all 0.3s ease;
}

/* Animación de entrada para el lienzo completo */
.animate-in {
  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.artist-modal {
  height: 100vh;
  height: 100dvh;
  grid-template-rows: minmax(0, 72fr) minmax(0, 28fr);
}

.artist-modal__media,
.artist-modal__content {
  min-width: 0;
}

.artist-modal__title {
  font-size: clamp(2.75rem, 12vw, 8.5rem);
  line-height: 0.82;
}

.artist-modal__description {
  font-size: clamp(1.15rem, 5vw, 1.75rem);
}

@media (min-width: 768px) {
  .artist-modal {
    grid-template-rows: minmax(0, 76fr) minmax(0, 24fr);
  }

  .artist-modal__title {
    font-size: clamp(3.5rem, 8vw, 6.5rem);
  }

  .artist-modal__description {
    font-size: clamp(0.95rem, 3.2vw, 2.1rem);
  }
}

@media (max-height: 560px) and (orientation: landscape) {
  .artist-modal {
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: minmax(0, 58fr) minmax(0, 42fr);
  }
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>
