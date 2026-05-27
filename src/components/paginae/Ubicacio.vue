<script setup lang="ts">
/**
 * Ubicacio.vue - Diseño Brutalista / Vanguardia
 * Información detallada sobre localización, transporte y accesibilidad.
 */

const sales = [
  "La Polivalent",
  "Hall La Polivalent",
  "Factoría",
  "Visual Room",
  "Sala de Exposicions",
  "Patio 1",
  "Patio 2"
];

const transportes = [
  {
    tipo: "Metro",
    detalles: "Línea 10. Parada recomanada: “Ciutat Arts i Ciències – Justícia”. Aproximadament 10-15 min caminant."
  },
  {
    tipo: "Autobús EMT",
    detalles: "Línees útils: 4, 19, 30, 92, 95. (Revisar paradas cercanas según entrada)."
  },
  {
    tipo: "Bicicleta",
    detalles: "Aparcabicis propers i estacions Valenbisi envoltant la Marina i la Ciutat de les Arts."
  },
  {
    tipo: "Cotxe",
    detalles: "Accés des de l'Avinguda del Port. Connexió ràpida amb V-21 i ronda nord/sur."
  }
];

const parkings = [
  "Parking de la Marina",
  "Parking Umbracle",
  "Parkings de la zona port/Ciudad de las Artes"
];
</script>

<template>
  <main class="bg-[#fcda4b] text-[#eb1d2b] font-sans selection:bg-[#eb1d2b] selection:text-[#fcda4b] relative p-6 md:p-12 overflow-hidden min-h-screen">
    
    <div class="relative z-10 max-w-[1600px] mx-auto">
      
      <!-- HEADER SECCIÓN -->
      <div class="border-b-4 border-[#eb1d2b] mb-12 flex justify-between items-end pb-4">
        <h2 class="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">Ubicació</h2>
        <RouterLink to="/" class="flex flex-col items-end group transition-transform hover:scale-105 active:scale-95">
          <span class="text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Volver a Inicio</span>
          <img 
            src="/imagines/Esclat/Artboard 2_1-8.png" 
            alt="Botón de Inicio" 
            class="w-20 md:w-32 h-auto object-contain"
          >
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        <!-- COLUMNA IZQUIERDA: INFO PRINCIPAL, TRANSPORTE Y ACCESIBILIDAD -->
        <section class="lg:col-span-6 space-y-12">
          
          <!-- DIRECCIÓN -->
          <div class="border-l-8 border-[#eb1d2b] pl-6 py-2">
            <span class="text-xs font-bold uppercase block mb-2 tracking-[0.2em] opacity-70">Direcció</span>
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              C/ Joan Verdeguer, 16 <br>
              46024 València, España
            </h3>
          </div>

          <!-- CÓMO LLEGAR -->
          <div class="space-y-8">
            <h4 class="text-3xl md:text-5xl font-black uppercase italic pb-2">Com arribar</h4>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div v-for="transporte in transportes" :key="transporte.tipo" class="space-y-2">
                <span class="text-xl font-black uppercase">{{ transporte.tipo }}</span>
                <p class="text-sm font-bold uppercase leading-tight opacity-90">{{ transporte.detalles }}</p>
              </div>
            </div>
          </div>

          <!-- PARKING -->
          <div class="bg-[#eb1d2b] text-[#fcda4b] p-8 border-[6px] border-[#eb1d2b]">
            <h4 class="text-3xl md:text-4xl font-black uppercase italic mb-6">Parking recomanat</h4>
            <ul class="space-y-4">
              <li v-for="parking in parkings" :key="parking" class="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-tight">
                <span class="w-4 h-4 bg-[#fcda4b] shrink-0"></span>
                {{ parking }}
              </li>
            </ul>
          </div>

          <!-- ACCESIBILIDAD -->
          <div class="space-y-6 bg-[#eb1d2b]/10 p-6 border-l-8 border-[#eb1d2b]">
            <h4 class="text-2xl md:text-3xl font-black uppercase italic">Accesibilitat</h4>
            <ul class="space-y-3 text-xs md:text-sm font-bold uppercase leading-tight">
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Accés PMR en todo el recinte.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Entrades adaptades i senyalitzades.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Informació rel·lacionada en movilitat reducida disponible en el punt d'info.
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">/</span>
                Banys accesibles distribuïts per les naus.
              </li>
            </ul>
          </div>

        </section>

        <!-- COLUMNA DERECHA: MAPA ILUSTRACIÓN (GRANDE) Y SALES -->
        <section class="lg:col-span-6 space-y-12">
          
          <!-- ILUSTRACIÓN MAPA (GRANDE) -->
          <div class="w-full">
            <img 
              src="/imagines/Esclat/mapa.png" 
              alt="Ilustración del Mapa del Recinto" 
              class="w-full h-auto object-contain scale-110 lg:scale-125 origin-top"
            >
          </div>

          <!-- SALES DISPONIBLES -->
          <div class="pt-24">
            <h4 class="text-3xl md:text-5xl font-black uppercase italic mb-8">Sales Disponibles</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="sala in sales" :key="sala" 
                class="border-2 border-[#eb1d2b] p-4 font-black uppercase text-xl hover:bg-[#eb1d2b] hover:text-[#fcda4b] transition-colors cursor-default">
                {{ sala }}
              </div>
            </div>
          </div>

        </section>

      </div>

      <!-- FOOTER SECCIÓN -->
      <div class="mt-24 border-t-4 border-[#eb1d2b] pt-8 flex justify-between items-center">
        <p class="text-xs font-bold uppercase tracking-widest">Esclat Festival 2026 © València</p>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* Estilos específicos para el componente si fueran necesarios */
</style>
