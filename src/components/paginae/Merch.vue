<script setup lang="ts">
import { computed, ref } from "vue";

const carouselItems = [
  { src: "/imagines/Esclat/Carousel/CajaMockupSola.jpg", alt: "Caja mockup sola" },
  { src: "/imagines/Esclat/Carousel/CajasMockups.jpg", alt: "Cajas mockups" },
  { src: "/imagines/Esclat/Carousel/Cartel1.jpg", alt: "Cartell" },
  { src: "/imagines/Esclat/Carousel/Keychain.jpg", alt: "Keychain" },
  { src: "/imagines/Esclat/Carousel/PegatinaGastada.jpg", alt: "Pegatina gastada" },
  { src: "/imagines/Esclat/Carousel/PegatinaLevantada.jpg", alt: "Pegatina levantada" },
  { src: "/imagines/Esclat/Carousel/PegatinaPuestaBien.jpg", alt: "Pegatina puesta" },
  { src: "/imagines/Esclat/Carousel/PegatinasJuntas.jpg", alt: "Pegatinas juntas" },
  { src: "/imagines/Esclat/Carousel/Wristband.jpg", alt: "Wristband" },
  { src: "/imagines/Esclat/Carousel/Cantimplora.jpg", alt: "Cantimplora" },
  { src: "/imagines/Esclat/Carousel/Samarreta.jpg", alt: "Samarreta" },
] as const;

const merchItems = [
  {
    name: "Caixa",
    price: "10,99€",
    image: "/imagines/Esclat/Carousel/CajasMockups.jpg",
    alt: "Caixa Esclat",
  },
  {
    name: "Cartell",
    price: "14,99€",
    image: "/imagines/Esclat/Carousel/Cartel1.jpg",
    alt: "Cartell Esclat",
  },
  {
    name: "Clauer",
    price: "24,99€",
    image: "/imagines/Esclat/Carousel/Keychain.jpg",
    alt: "Clauer Esclat",
  },
  {
    name: "Pulsera",
    price: "4,99€",
    image: "/imagines/Esclat/Carousel/Wristband.jpg",
    alt: "Pulsera Esclat",
  },
  {
    name: "Cantimplora",
    price: "7,99€",
    image: "/imagines/Esclat/Carousel/Cantimplora.jpg",
    alt: "Cantimplora Esclat",
  },
  {
    name: "Samarreta Esclat",
    price: "29,99€",
    image: "/imagines/Esclat/Carousel/Samarreta.png",
    alt: "Samarreta Esclat",
  },
] as const;

const currentIndex = ref(0);
const currentItem = computed(() => carouselItems[currentIndex.value] ?? carouselItems[0]);

const showPrevious = () => {
  currentIndex.value =
    (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
};

const showNext = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
};

const selectItem = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-4 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-8">
    <div class="relative z-10 mx-auto max-w-[1700px] p-8 md:p-16 lg:p-24">
      <div class="mb-8 flex items-end justify-between pb-4 md:mb-12">
        <h1 class="text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">
          Merch
        </h1>

        <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
          <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
            Volver a Inicio
          </span>
          <img
            src="/imagines/Esclat/ESCLAT.png"
            alt="Boton de Inicio"
            class="h-auto w-20 object-contain md:w-32"
          >
        </RouterLink>
      </div>

      <section class="mx-auto max-w-[1240px]">
        <div class="relative">
          <div class="aspect-[4/3] w-full overflow-hidden">
            <img
              :key="currentItem.src"
              :src="currentItem.src"
              :alt="currentItem.alt"
              class="h-full w-full object-cover"
            >
          </div>

          <button
            type="button"
            aria-label="Imagen anterior"
            class="absolute left-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-transparent p-0 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b] md:left-6 md:h-20 md:w-20"
            @click="showPrevious"
          >
            <img
              src="/imagines/Esclat/ROJA.png"
              alt=""
              class="h-full w-full -rotate-270 object-contain"
              aria-hidden="true"
            >
          </button>

          <button
            type="button"
            aria-label="Imagen siguiente"
            class="absolute right-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-transparent p-0 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b] md:right-6 md:h-20 md:w-20"
            @click="showNext"
          >
            <img
              src="/imagines/Esclat/ROJA.png"
              alt=""
              class="h-full w-full rotate-270 object-contain"
              aria-hidden="true"
            >
          </button>
        </div>

        <div class="mt-5 grid grid-cols-6 gap-2 md:grid-cols-12 md:gap-3">
          <button
            v-for="(item, index) in carouselItems"
            :key="item.src"
            type="button"
            :aria-label="`Ver imagen ${index + 1}`"
            class="aspect-[4/3] overflow-hidden transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb1d2b]"
            :class="index === currentIndex ? 'opacity-100' : 'opacity-55'"
            @click="selectItem(index)"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-full w-full object-cover"
            >
          </button>
        </div>
      </section>

      <section class="mt-20">
        <div
          v-for="item in merchItems"
          :key="item.name"
          class="group -mx-4 grid grid-cols-1 gap-4 px-4 py-10 transition-all duration-300 hover:bg-[#eb1d2b]/10 md:-mx-6 md:grid-cols-[240px_1fr_180px] md:gap-12 md:px-6 lg:-mx-8 lg:px-8"
        >
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="item.image"
              :alt="item.alt"
              class="absolute left-0 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              :class="item.name === 'Samarreta Esclat' ? 'bottom-0 h-[200%] object-bottom' : 'inset-0 h-full'"
            >
          </div>

          <div class="flex flex-col justify-center">
            <h2 class="text-4xl font-black leading-[0.98] tracking-tighter md:text-5xl">
              {{ item.name }}
            </h2>
          </div>

          <div class="flex flex-col items-start justify-between py-2 md:items-end">
            <span class="text-5xl font-black leading-none tracking-tighter md:text-6xl">
              {{ item.price }}
            </span>
            <button
              type="button"
              class="font-hover-alt mt-4 w-full border-4 border-[#eb1d2b] bg-[#eb1d2b] px-6 py-3 text-xl font-black uppercase text-[#fcda4b] transition-all duration-200 hover:italic md:w-auto"
            >
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
