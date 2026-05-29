<script setup lang="ts">
const sales = [
  "La Polivalent",
  "Hall La Polivalent",
  "Factoria",
  "Visual Room",
  "Sala de Exposicions",
  "Patio 1",
  "Patio 2",
];

const transportes = [
  {
    tipo: "Metro",
    detalles:
      "Linea 10. Parada recomendada: Ciutat Arts i Ciencies - Justicia. Aproximadamente 10-15 min caminando.",
  },
  {
    tipo: "Autobus EMT",
    detalles:
      "Lineas utiles: 4, 19, 30, 92, 95. Revisar paradas cercanas segun entrada.",
  },
  {
    tipo: "Bicicleta",
    detalles:
      "Aparcabicis cercanos y estaciones Valenbisi alrededor de la Marina y Ciudad de las Artes.",
  },
  {
    tipo: "Coche",
    detalles:
      "Acceso desde Avenida del Puerto. Conexion rapida con V-21 y ronda norte/sur.",
  },
];

const parkings = [
  "Parking de la Marina",
  "Parking Umbracle",
  "Parkings de la zona puerto/Ciudad de las Artes",
];
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-6 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-12">
    <div class="relative z-10 mx-auto max-w-[1600px]">
      <div class="mb-12 flex items-end justify-between  border-[#eb1d2b] pb-4">
        <h2 class="text-6xl font-black uppercase  leading-[0.8] tracking-tighter md:text-9xl">
          Ubicació
        </h2>

        <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
          <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
            Tornar a inici
          </span>
          <img
            src="/imagines/Esclat/Artboard 2_1-8.png"
            alt="Boton de Inicio"
            class="h-auto w-20 object-contain md:w-32"
          >
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <section class="space-y-16 lg:col-span-7">
          <div class="  py-4 pl-9">
            <span class="mb-4 block text-sm font-black uppercase tracking-[0.2em] opacity-70">
              
            </span>
            <h3 class="text-5xl font-black uppercase leading-[1] tracking-tighter md:text-7xl">
              C/ Joan Verdeguer, 16 <br>
              46024 València, Espanya
            </h3>
          </div>

          <div class="flex flex-wrap gap-12  border-[#eb1d2b] py-4 pl-10">
            <div>
              <span class="mb-4 block text-sm font-black  opacity-70">
                Obertura
              </span>
              <p class="text-5xl font-black md:text-8xl leading-none">16:00H</p>
            </div>
            <div>
              <span class="mb-4 block text-sm font-black  opacity-70">
                Tancament
              </span>
              <p class="text-5xl font-black md:text-8xl leading-none">03:30H</p>
            </div>
          </div>

          <div class="space-y-10">
            <h4 class="pb-4 text-4xl font-black uppercase  md:text-7xl">
              Com arribar
            </h4>

            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div v-for="transporte in transportes" :key="transporte.tipo" class="space-y-3">
                <span class="text-2xl font-black  md:text-4xl">{{ transporte.tipo }}</span>
                <p class="text-base font-bold  leading-tight opacity-90 md:text-xl">
                  {{ transporte.detalles }}
                </p>
              </div>
            </div>
          </div>

          <div class="border-[8px] border-[#eb1d2b] bg-[#eb1d2b] p-10 text-[#fcda4b]">
            <h4 class="mb-8 text-4xl font-black uppercase  md:text-5xl">
              Parking recomanat
            </h4>
            <ul class="space-y-6">
              <li
                v-for="parking in parkings"
                :key="parking"
                class="flex items-center gap-4 text-lg font-bold  tracking-tight md:text-2xl"
              >
                <span class="h-6 w-6 shrink-0 bg-[#fcda4b]"></span>
                {{ parking }}
              </li>
            </ul>
          </div>

          <div class="space-y-8 border-l-[12px] border-[#eb1d2b] bg-[#eb1d2b]/10 p-10">
            <h4 class="text-3xl font-black uppercase italic md:text-5xl">
              Accesibilitat
            </h4>
            <ul class="space-y-4 text-sm font-bold uppercase leading-tight md:text-xl">
              <li class="flex items-start gap-3">
                <span class="mt-1 font-black">/</span>
                Accés PMR en tot el recinte.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 font-black">/</span>
                Entrades adaptades i senyalitzades.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 font-black">/</span>
                Informació sobre movilitat reduïda disponible en el punt de info.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 font-black">/</span>
                Banys accesibles distribuïts per les naus.
              </li>
            </ul>
          </div>
        </section>

        <section class="space-y-20 lg:col-span-5">
          <div class="w-full">
            <img
              src="/imagines/Esclat/mapa.png"
              alt="Ilustracion del mapa del recinto"
              class="h-auto w-full origin-top scale-110 object-contain lg:scale-150"
            >
          </div>

          <div class="pt-32">
            <h4 class="mb-10 text-4xl font-black uppercase  md:text-6xl">
              Sales Disponibles
            </h4>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                v-for="sala in sales"
                :key="sala"
                class="cursor-default  border-[#eb1d2b] p-6 text-2xl font-black uppercase transition-colors hover:bg-[#eb1d2b] hover:text-[#fcda4b] md:text-3xl"
              >
                {{ sala }}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="mt-24 flex items-center justify-between border-t-4 border-[#eb1d2b] pt-8">
        <p class="text-xs font-bold uppercase tracking-widest">
          Esclat Festival 2026 - València
        </p>
      </div>
    </div>
  </main>
</template>
