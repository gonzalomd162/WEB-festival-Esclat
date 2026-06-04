<script setup lang="ts">
import { ref } from "vue";

const introVideo = ref<HTMLVideoElement | null>(null);
const contentSection = ref<HTMLElement | null>(null);
const isAudioEnabled = ref(false);

const syncVideoAudio = () => {
  const video = introVideo.value;

  if (!video) return;

  video.muted = !isAudioEnabled.value;
  video.volume = isAudioEnabled.value ? 1 : 0;
};

const toggleAudio = () => {
  isAudioEnabled.value = !isAudioEnabled.value;
  syncVideoAudio();
};

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: "smooth" });
};

const highlights = [
  {
    value: "3 Dies de festival",
    label: "Dies de festival",
    text: "Una programació pensada per descobrir bandes, tornar als teus favorits i quedar-se fins al tancament.",
  },
  {
    value: "+25 Artistes i activitats",
    label: "Artistes i activitats",
    text: "Concerts, tallers, fanzines, sessions i petites rareses repartides per tot el recinte.",
  },
  {
    value: "Recinte urbà",
    label: "Recinte urbà",
    text: "Les naus concentra escenaris, zona gastronòmica, espais de descans i punts de trobada.",
  },
];

const manifesto = [
  "Música independent, cultura visual i energia de barri en un mateix punt de trobada per joves en inquietuds.",
  "Esclat néix per poder enfortir una comunitat social oberta, on la voluntad de fer i la creativitat envolten els concerts.",
  "El festival converteix València en l'epicentre de la imaginación, en qualsevol àmbit cultural.",
];

const experience = [
  "Escenaris propers, sense distàncies impossibles entre públic i artistes.",
  "Activitats de dia per crear, escoltar i trobar abans dels concerts.",
  "Una zona comuna amb menjar, beguda, merch i descans per viure el festival sencer.",
  "Disseny gràfic, cartellisme i peces visuals repartides pel recorregut.",
];
</script>

<template>
  <div class="bg-[#fcda4b] text-[#eb1d2b]">
    <section class="relative flex min-h-dvh flex-col overflow-hidden bg-black px-6 py-8 text-[#fcda4b] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
      <video
        ref="introVideo"
        class="absolute inset-0 z-0 h-full w-full bg-black object-cover"
        src="/videos/CORTOWEB.mp4"
        autoplay
        :muted="!isAudioEnabled"
        loop
        playsinline
        aria-hidden="true"
      ></video>

      <button
        type="button"
        :aria-label="isAudioEnabled ? 'Desactivar audio del video' : 'Activar audio del video'"
        class="absolute left-4 top-4 z-30 flex h-8 w-8 items-center justify-center bg-transparent p-0 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b] sm:left-6 sm:top-6 sm:h-16 sm:w-16"
        @click="toggleAudio"
      >
        <img
          :src="isAudioEnabled ? '/imagines/Esclat/UNMUTE.png' : '/imagines/Esclat/MUTE.png'"
          alt=""
          class="h-full w-full object-contain"
          aria-hidden="true"
        >
      </button>

      <RouterLink
        to="/"
        class="group absolute right-6 top-6 z-30 flex flex-col items-end transition-transform hover:scale-105 active:scale-95 sm:right-10 sm:top-8"
      >
        <span class="mb-1 text-[10px] font-black uppercase tracking-widest text-[#fcda4b] opacity-0 transition-opacity group-hover:opacity-100">Volver a inicio</span>
        <img
          src="/imagines/Esclat/ESCLAT.png"
          alt="Botón de inicio"
          class="h-auto w-20 object-contain md:w-32"
        >
      </RouterLink>

      <button
        type="button"
        aria-label="Bajar a la informacion del festival"
        class="absolute bottom-2 left-1/2 z-30 flex h-16 w-16 -translate-x-1/2 items-center justify-center bg-transparent p-0 transition-transform hover:translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b] sm:bottom-3 sm:h-20 sm:w-20"
        @click="scrollToContent"
      >
        <img
          src="/imagines/Esclat/AMARILLA.png"
          alt=""
          class="h-full w-full object-contain rotate-180"
          aria-hidden="true"
        >
      </button>
    </section>

    <main ref="contentSection" class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-4 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-8">
      <div class="relative z-10 mx-auto max-w-[1700px] p-8 md:p-16 lg:p-24">
        <div class="relative z-10">
          <div class="mb-12 flex items-end justify-between pb-4">
          <h2 class="text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">Informació</h2>
          <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
            <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">Volver a inicio</span>
            <img
              src="/imagines/Esclat/ESCLAT.png"
              alt="Botón de inicio"
              class="h-auto w-20 object-contain md:w-32"
            >
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <section class="flex flex-col lg:col-span-8">
            <div>
              <div
                v-for="item in highlights"
                :key="item.label"
                class="group -mx-4 grid grid-cols-1 gap-4 px-4 py-10 transition-all duration-300 md:-mx-6 md:grid-cols-[240px_1fr] md:gap-24 md:px-6 lg:-mx-8 lg:px-8"
              >
                <div class="flex flex-col">
                  <div class="flex items-baseline gap-2">
                    <span class="text-8xl font-black leading-none tracking-tighter md:text-5xl">{{ item.value }}</span>
                    
                  </div>
                </div>

                <div class="flex flex-col justify-center space-y-4">
                  <p class="text-xl font-bold leading-tight opacity-90 md:text-2xl">
                    {{ item.text }}
                  </p>
                </div>
              </div>

              <!-- Manifiesto como sección destacada -->
              <div class="mt-12 space-y-8 pt-12">
                <p
                  v-for="line in manifesto"
                  :key="line"
                  class="text-4xl font-black leading-[0.9] tracking-tighter md:text-6xl cursor-default"
                >
                  {{ line }}
                </p>
              </div>
            </div>
          </section>

          <section class="flex flex-col space-y-12 lg:col-span-4">
            <div class="relative flex min-h-[650px] flex-col justify-between p-10 text-[#eb1d2b]">
              <div class="relative z-10">
                <div class="mb-10 flex items-start justify-between">
                  <h3 class="text-5xl font-black uppercase leading-[0.98] tracking-tighter md:text-6xl">
                    EXPERIÈNCIA <br> ESCLAT
                  </h3>
                </div>

                <ul class="space-y-6 text-sm font-bold tracking-tight md:text-lg">
                  <li v-for="(item, index) in experience" :key="index" class="flex items-start gap-3">
                    <span class="mt-1 h-4 w-4 shrink-0 bg-[#eb1d2b]"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="relative z-10 mt-12 flex flex-col items-start gap-6 pt-8 -ml-1 md:-ml-2">
                <div class="flex items-baseline gap-2">
                  <span class="text-6xl font-black leading-none tracking-tighter md:text-8xl ">2026</span>
                </div>
                <RouterLink
                  to="/entradas"
                  class="font-hover-alt w-full max-w-sm bg-[#eb1d2b] py-5 text-3xl font-black text-[#fcda4b] transition-all duration-200 hover:italic text-center"
                >
                  Reserva tickets
                </RouterLink>
                <img
                  src="/imagines/Esclat/CALAMAR.PNG"
                  alt="Calamar"
                  class="mt-4 h-auto w-[165%] max-w-[calc(100vw-2rem)] self-center object-contain sm:w-[190%] md:w-[220%] lg:w-[260%]"
                >
              </div>
            </div>
          </section>
        </div>

        <!-- Footer Info - Igual que en Tickets -->
        <div class="mt-20 flex flex-col gap-6 md:flex-row md:items-start md:justify-start md:gap-16">
          <div class="min-w-0">
            <span class="mb-3 block text-sm font-black  ">Ubicació principal</span>
            <span class="block text-4xl font-black leading-[0.85] tracking-tighter md:text-6xl">
              Les <br>
              naus <br>
              València
            </span>
          </div>

          <div>
            <span class="mb-3 block text-sm font-black  ">Dates oficials</span>
            <span class="text-4xl font-black md:text-6xl leading-none">23-25 oct</span>
          </div>

          <div>
            <span class="mb-3 block text-sm font-black ">Ciutat</span>
            <span class="text-4xl font-black md:text-6xl leading-none">VLC</span>
          </div>

          <p class="max-w-[20rem] text-sm font-bold leading-tight opacity-75 md:mt-1">
            * Esclat Festival és un espai lliure de violències, compromés amb la cultura independent i el disseny local.
          </p>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>
