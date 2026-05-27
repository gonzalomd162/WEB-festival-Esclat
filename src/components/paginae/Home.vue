<script setup lang="ts">
import { computed, nextTick, ref } from "vue";

const videos = [
  { src: "/videos/NICO.mp4", artist: "NICO MISERIA" },
  { src: "/videos/LOSPLANETAS.mp4", artist: "LOS PLANETAS" },
  { src: "/videos/GREEN.mp4", artist: "ADAM GREEN" },
  { src: "/videos/EMPM.mp4", artist: "EL MATÓ A UN POLICÍA MOTORIZADO" },
  { src: "/videos/PEKEERGO.mp4", artist: "ILL PEKEÑO Y ERGO PRO" },
  { src: "/videos/TDIVINEC.mp4", artist: "THE DIVINE COMEDY" },
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
const isSwitchingVideo = ref(false);
const currentVideo = computed<VideoItem>(
  () => videos[currentVideoIndex.value] ?? videos[0],
);
const isDivineComedyVideo = computed(
  () => currentVideo.value.src === "/videos/TDIVINEC.mp4",
);

const showNextVideo = async () => {
  if (isSwitchingVideo.value) return;

  isSwitchingVideo.value = true;
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length;
  await nextTick();
  await backgroundVideo.value?.play().catch(() => undefined);
  isSwitchingVideo.value = false;
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
</script>

<template>
  <div>
    <main
      class="relative flex min-h-dvh flex-col overflow-hidden bg-black px-6 py-8 text-[#eb1d2b] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <video
        ref="backgroundVideo"
        :key="currentVideo.src"
        class="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-300"
        :class="isDivineComedyVideo ? 'scale-[1.18]' : 'scale-100'"
        :src="currentVideo.src"
        autoplay
        muted
        playsinline
        aria-hidden="true"
        @click="showNextVideo"
        @ended="showNextVideo"
        @timeupdate="handleVideoProgress"
      ></video>

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
            class="font-hover-alt text-[clamp(2.3rem,4.6vw,4rem)] font-bold uppercase leading-none tracking-normal hover:font-bold hover:italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#eb1d2b]"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <p class="font-hover-alt pointer-events-none max-w-[50vw] text-right text-[clamp(2.3rem,4.6vw,4rem)] font-bold uppercase leading-none tracking-normal md:max-w-[44rem]">
          {{ currentVideo.artist }}
        </p>
      </div>
    </main>

    <footer class="bg-[#eb1d2b] px-6 py-12 text-[#fcda4b] sm:px-10 lg:px-12 lg:py-16">
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
