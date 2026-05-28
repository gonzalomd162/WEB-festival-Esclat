<script setup lang="ts">
import { computed, nextTick, ref } from "vue";

const videos = [
  { src: "/videos/MISERIA.mp4", artist: "NICO MISERIA" },
  { src: "/videos/PLANETAS.mp4", artist: "LOS PLANETAS" },
  { src: "/videos/GREEN.mp4", artist: "ADAM GREEN" },
  { src: "/videos/EMPM.mp4", artist: "EL MATÓ A UN POLICÍA MOTORIZADO" },
  { src: "/videos/PEKEERGO.mp4", artist: "ILL PEKEÑO Y ERGO PRO" },
  { src: "/videos/TDIVINEC.mp4", artist: "THE DIVINE COMEDY" },
  { src: "/videos/HOKE.mp4", artist: "HOKE" },
  { src: "/videos/RITA.mp4", artist: "RITA PAYÉS" },
  { src: "/videos/EELS.mp4", artist: "EELS" },
  { src: "/videos/CAROLINA.mp4", artist: "CAROLINA DURANTE" },
  { src: "/videos/MALAGESTION.mp4", artist: "MALA GESTIÓN" },
  { src: "/videos/MANEL.mp4", artist: "MANEL" },
] as const;

type VideoItem = (typeof videos)[number];

const links = [
  { label: "Tickets", to: "/entradas" },
  { label: "Cartelera", to: "/cartelera" },
  { label: "Sobre el Festival", to: "/sobre-el-festival" },
  { label: "Ubicación", to: "/ubicacion" },
] as const;

const currentVideoIndex = ref(0);
const backgroundVideo = ref<HTMLVideoElement | null>(null);
const homeSection = ref<HTMLElement | null>(null);
const videoSection = ref<HTMLElement | null>(null);
const isSwitchingVideo = ref(false);
const currentVideo = computed<VideoItem>(
  () => videos[currentVideoIndex.value] ?? videos[0],
);
const currentVideoScale = computed(() => {
  switch (currentVideo.value.src) {
    case "/videos/MALAGESTION.mp4":
      return "scale-[1.38]";
    case "/videos/EELS.mp4":
      return "scale-[1.22]";
    case "/videos/RITA.mp4":
      return "scale-[1.2]";
    case "/videos/TDIVINEC.mp4":
      return "scale-[1.18]";
    default:
      return "scale-100";
  }
});

const selectVideo = async (index: number) => {
  if (isSwitchingVideo.value) return;

  isSwitchingVideo.value = true;
  currentVideoIndex.value = index;
  await nextTick();
  await backgroundVideo.value?.play().catch(() => undefined);
  isSwitchingVideo.value = false;
};

const showNextVideo = async () => {
  await selectVideo((currentVideoIndex.value + 1) % videos.length);
};

const handleVideoProgress = () => {
  const video = backgroundVideo.value;

  if (!video || isSwitchingVideo.value || !Number.isFinite(video.duration)) {
    return;
  }

  if (video.duration > 0 && video.currentTime >= video.duration - 0.2) {
    void showNextVideo();
  }
};

const scrollToHome = () => {
  homeSection.value?.scrollIntoView({ behavior: "smooth" });
};

const scrollToVideos = () => {
  videoSection.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="bg-[#fcda4b] text-[#eb1d2b]">
    <main
      ref="homeSection"
      class="relative flex min-h-dvh flex-col overflow-hidden bg-[#fcda4b] px-6 py-8 text-[#eb1d2b] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <img
        src="/imagines/Esclat/RATILLA.png"
        alt=""
        class="pointer-events-none absolute right-[-34vw] top-1/2 z-0 h-[min(95dvh,52rem)] max-w-none -translate-y-1/2 scale-x-[-1] object-contain sm:right-[-20vw] sm:h-[min(100dvh,70rem)] lg:right-[-2vw] lg:h-[108dvh]"
      >

      <div class="relative z-10">
        <img
          class="h-auto w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px]"
          src="/imagines/Esclat/Artboard 2-8.png"
          alt="Esclat Logo"
        >
      </div>

      <div class="relative z-20 mt-auto flex items-end justify-between gap-6 pb-6 sm:pb-8 lg:pb-10">
        <nav
          aria-label="Navegacion principal"
          class="flex flex-col items-start gap-1 sm:gap-2 lg:gap-2"
        >
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="font-hover-alt text-[clamp(2.3rem,4.6vw,4rem)] font-bold uppercase leading-none tracking-normal text-[#eb1d2b] hover:font-bold hover:text-[#eb1d2b] hover:italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#eb1d2b]"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <button
        type="button"
        aria-label="Bajar a los videos"
        class="absolute bottom-2 left-1/2 z-30 flex h-16 w-16 -translate-x-1/2 items-center justify-center bg-transparent p-0 transition-transform hover:translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb1d2b] sm:bottom-3 sm:h-20 sm:w-20"
        @click="scrollToVideos"
      >
        <img
          src="/imagines/Esclat/ROJA.png"
          alt=""
          class="h-full w-full object-contain"
          aria-hidden="true"
        >
      </button>
    </main>

    <section
      ref="videoSection"
      class="relative flex min-h-dvh flex-col overflow-hidden bg-black px-6 py-8 text-[#fcda4b] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <video
        ref="backgroundVideo"
        :key="currentVideo.src"
        class="absolute inset-0 z-0 h-full w-full bg-black object-cover transition-transform duration-300"
        :class="currentVideoScale"
        :src="currentVideo.src"
        autoplay
        muted
        playsinline
        aria-hidden="true"
        @click="showNextVideo"
        @ended="showNextVideo"
        @timeupdate="handleVideoProgress"
      ></video>

      <button
        type="button"
        aria-label="Subir al inicio"
        class="absolute left-1/2 top-6 z-30 flex h-16 w-16 -translate-x-1/2 items-center justify-center bg-transparent p-0 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b] sm:top-8 sm:h-20 sm:w-20"
        @click="scrollToHome"
      >
        <img
          src="/imagines/Esclat/AMARILLA.png"
          alt=""
          class="h-full w-full object-contain"
          aria-hidden="true"
        >
      </button>

      <div class="relative z-20 mt-auto flex justify-end pb-6 sm:pb-8 lg:pb-10">
        <nav
          aria-label="Seleccion de video por artista"
          class="flex w-full max-w-[42rem] flex-col items-end gap-1 text-right sm:max-w-[48rem]"
        >
          <button
            v-for="(video, idx) in videos"
            :key="video.src"
            type="button"
            class="font-hover-alt max-w-full bg-transparent p-0 text-right text-[clamp(1.35rem,3vw,2.8rem)] font-bold uppercase leading-none tracking-normal text-[#fcda4b] transition-colors duration-200 hover:text-[#eb1d2b] hover:italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcda4b]"
            @click="selectVideo(idx)"
          >
            {{ video.artist }}
          </button>
        </nav>
      </div>
    </section>

    <footer class="bg-[#fcda4b] px-6 py-12 text-[#eb1d2b] sm:px-10 lg:px-12 lg:py-16">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="space-y-4">
          <p class="font-hover-alt text-[clamp(2.3rem,4.6vw,4rem)] font-bold uppercase leading-none tracking-normal">
            Contacto
          </p>
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
