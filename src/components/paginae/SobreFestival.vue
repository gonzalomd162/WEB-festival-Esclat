<script setup lang="ts">
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
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-4 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-8">
    <div class="relative z-10 mx-auto max-w-[1700px] p-8 md:p-16 lg:p-24">
      <div class="relative z-10">
        <div class="mb-12 flex items-end justify-between pb-4">
          <h2 class="text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">Informació</h2>
          <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
            <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">Volver a inicio</span>
            <img
              src="/imagines/Esclat/Artboard 2_1-8.png"
              alt="Botón de inicio"
              class="h-auto w-20 object-contain md:w-32"
            >
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <section class="flex flex-col lg:col-span-8">
            <div>
              <div
                v-for="(item, idx) in highlights"
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
</template>
