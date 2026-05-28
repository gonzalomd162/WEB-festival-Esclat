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
      <div class="mb-12 flex items-end justify-between border-b-4 border-[#eb1d2b] pb-4">
        <h2 class="text-6xl font-black uppercase italic leading-[0.8] tracking-tighter md:text-9xl">
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

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <section class="space-y-12 lg:col-span-6">
          <div class="border-l-8 border-[#eb1d2b] py-2 pl-6">
            <span class="mb-2 block text-xs font-bold uppercase tracking-[0.2em] opacity-70">
              Direcció
            </span>
            <h3 class="text-4xl font-black uppercase leading-[0.9] tracking-tighter md:text-6xl">
              C/ Joan Verdeguer, 16 <br>
              46024 València, Espanya
            </h3>
          </div>

          <div class="space-y-8">
            <h4 class="pb-2 text-3xl font-black uppercase italic md:text-5xl">
              Com arribar
            </h4>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div v-for="transporte in transportes" :key="transporte.tipo" class="space-y-2">
                <span class="text-xl font-black uppercase">{{ transporte.tipo }}</span>
                <p class="text-sm font-bold uppercase leading-tight opacity-90">
                  {{ transporte.detalles }}
                </p>
              </div>
            </div>
          </div>

          <div class="border-[6px] border-[#eb1d2b] bg-[#eb1d2b] p-8 text-[#fcda4b]">
            <h4 class="mb-6 text-3xl font-black uppercase italic md:text-4xl">
              Parking recomanat
            </h4>
            <ul class="space-y-4">
              <li
                v-for="parking in parkings"
                :key="parking"
                class="flex items-center gap-3 text-sm font-bold uppercase tracking-tight md:text-base"
              >
                <span class="h-4 w-4 shrink-0 bg-[#fcda4b]"></span>
                {{ parking }}
              </li>
            </ul>
          </div>

          <div class="space-y-6 border-l-8 border-[#eb1d2b] bg-[#eb1d2b]/10 p-6">
            <h4 class="text-2xl font-black uppercase italic md:text-3xl">
              Accesibilitat
            </h4>
            <ul class="space-y-3 text-xs font-bold uppercase leading-tight md:text-sm">
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Accés PMR en tot el recinte.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Entrades adaptades i senyalitzades.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Informació sobre movilitat reduïda disponible en el punt de info.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Banys accesibles distribuïts per les naus.
              </li>
            </ul>
          </div>
        </section>

        <section class="space-y-12 lg:col-span-6">
          <div class="w-full">
            <img
              src="/imagines/Esclat/mapa.png"
              alt="Ilustracion del mapa del recinto"
              class="h-auto w-full origin-top scale-110 object-contain lg:scale-125"
            >
          </div>

          <div class="pt-24">
            <h4 class="mb-8 text-3xl font-black uppercase italic md:text-5xl">
              Sales Disponibles
            </h4>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                v-for="sala in sales"
                :key="sala"
                class="cursor-default border-2 border-[#eb1d2b] p-4 text-xl font-black uppercase transition-colors hover:bg-[#eb1d2b] hover:text-[#fcda4b]"
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
