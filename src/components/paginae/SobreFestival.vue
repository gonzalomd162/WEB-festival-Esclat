<<<<<<< HEAD
<script setup lang="ts">
const highlights = [
  {
    value: "3",
    label: "Dies de festival",
    text: "Una programació pensada per descobrir bandes, tornar als teus favorits i quedar-se fins al tancament.",
  },
  {
    value: "25+",
    label: "Artistes i activitats",
    text: "Concerts, tallers, fanzines, sessions i petites rareses repartides per tot el recinte.",
  },
  {
    value: "01",
    label: "Recinte urbà",
    text: "Les Naus concentra escenaris, zona gastronòmica, espais de descans i punts de trobada.",
  },
];

const manifesto = [
  "Música independent, cultura visual i energia de barri en un mateix punt de trobada per joves en inquietuds.",
  "Esclat néix per poder enfortir una comunitat social oberta, on la voluntat de fer i la creativitat envolten els concerts.",
  "El festival converteix valència en l'epicentre de la imaginació, en qualsevol àmbit cultural.",
];

const experience = [
  "Escenaris propers, sense distàncies impossibles entre públic i artistes.",
  "Activitats de dia per crear, escoltar i trobar abans dels concerts.",
  "Una zona comuna amb menjar, beguda, merch i descans per viure el festival sencer.",
  "Disseny gràfic, cartellisme i peces visuals repartides pel recorregut.",
];
</script>

<template>
  <main
    class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-6 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-12"
  >
    <div class="relative z-10 mx-auto max-w-[1600px]">
      <img
        src="/imagines/Esclat/COCO.png"
        alt=""
        class="pointer-events-none absolute -right-24 top-[460px] z-0 hidden h-auto w-[min(68vw,1120px)] max-w-none object-contain opacity-80 lg:block xl:-right-32 xl:top-[410px] xl:w-[min(72vw,1280px)]"
      >

      <div class="relative z-10 mb-12 flex items-end justify-between pb-4">
        <h2 class="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">
          Informació<br class="sm:hidden">  Festival
        </h2>

        <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
          <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
            Volver a Inicio
          </span>
          <img
            src="/imagines/Esclat/Artboard 2_1-8.png"
            alt="Boton de inicio"
            class="h-auto w-20 object-contain md:w-32"
          >
        </RouterLink>
      </div>

      <section class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-8">
          <div class="pb-10">
            <p class="mb-5 text-xs font-black uppercase tracking-[0.35em] opacity-70">
              València · 23-25 / 10 / 26
            </p>
            <h1 class="max-w-6xl cursor-default text-5xl font-black uppercase leading-[0.78] tracking-tighter transition-all duration-200 hover:italic md:text-7xl lg:text-8xl">
              Un esclat de música, disseny i ciutat.
            </h1>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3">
            <article
              v-for="item in highlights"
              :key="item.label"
              class="group py-8 transition-all duration-300 hover:bg-[#eb1d2b] hover:px-5 hover:text-[#fcda4b] md:px-6"
            >
              <span class="block text-7xl font-black uppercase leading-none tracking-tighter md:text-8xl">
                {{ item.value }}
              </span>
              <span class="mt-3 block text-sm font-black uppercase tracking-widest">
                {{ item.label }}
              </span>
              <p class="mt-6 max-w-sm text-sm font-bold uppercase leading-tight opacity-80">
                {{ item.text }}
              </p>
            </article>
          </div>

          <div class="relative py-12 lg:min-h-[520px]">
            <div class="space-y-8 lg:max-w-none lg:pr-0">
              <p
                v-for="line in manifesto"
                :key="line"
                class="text-2xl font-black uppercase leading-[0.95] tracking-tighter md:text-4xl"
              >
                {{ line }}
              </p>
            </div>

            <div class="mt-8 flex items-center justify-center lg:hidden">
              <img
                src="/imagines/Esclat/COCO.png"
                alt=""
                class="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] lg:max-w-[780px]"
              >
            </div>
          </div>

          <section class="pt-8">
            <div class="mb-8 flex items-end justify-between gap-6">
              <h3 class="text-4xl font-black uppercase italic leading-[0.8] tracking-tighter md:text-7xl">
                Viu la experiència esclat
              </h3>
            </div>

            <div>
              <div
                v-for="(item, index) in experience"
                :key="item"
                class="grid grid-cols-[64px_1fr] gap-5 py-6 transition-colors duration-300 hover:bg-[#eb1d2b] hover:text-[#fcda4b] md:grid-cols-[110px_1fr]"
              >
                <span class="text-4xl font-black leading-none tracking-tighter md:text-6xl">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
                <p class="text-xl font-black uppercase leading-none tracking-tighter md:text-3xl">
                  {{ item }}
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside class="flex flex-col gap-8 lg:col-span-4">
          <section class="bg-[#eb1d2b]/5 p-6">
            <span class="mb-4 block text-xs font-black uppercase tracking-[0.25em] opacity-70">
              El que importa
            </span>
            <p class="text-3xl font-black uppercase leading-[0.85] tracking-tighter md:text-5xl">
              Entrar prompte, deixar-se emportar per l'ambient i gaudir de la creativitat.
            </p>
          </section>

          <RouterLink
            to="/entradas"
            class="font-hover-alt bg-[#eb1d2b] px-6 py-5 text-center text-3xl font-black uppercase text-[#fcda4b] transition-colors duration-200 hover:bg-transparent hover:text-[#eb1d2b]"
          >
            Cerca Tickets
          </RouterLink>
        </aside>
      </section>

      <div class="relative z-10 mt-20 flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
        <p class="text-xs font-bold uppercase tracking-widest">Esclat Festival 2026 · València</p>
        <p class="text-xs font-bold uppercase tracking-widest opacity-70">Música · Gràfica · Comunitat</p>
      </div>
    </div>
  </main>
=======
<template>
  <main class="min-h-dvh bg-white" />
>>>>>>> 29116c15ba530e39e1f9afde6c441f9d5e4f257f
</template>
