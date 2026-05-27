<script setup lang="ts">
/**
 * Cartelera.vue - Diseño Brutalista / Vanguardia
 * Layout unificado (sin división por días)
 */

const lineup = {
  principales: "Wilco · Los Planetas · Carolina Durante · Manel · The Divine Comedy · Hoke",
  secundarios: "Adam Green · Alcalá Norte · Eels · El Mató a un Policía Motorizado · La Bien Querida · Ill Pekeño y Ergo Pro",
  terciarios: [
    "Boletus · Eldiablo de Shanghai · Nepal Nepal · L`haine",
    "Rita Payés · Els Amics de les Arts · I'm From Barcelona",
    "Nico Miseria · Maria Arnal"
  ],
  cuaternarios: [
    "La buena Vida · Platz · Mala Gestión",
    "Diego 900 · Luna"
  ],
  activitats: [
    "Taller d'escultura musical · Elaboració d'instruments inusuals",
    "Conferència de idees absurdes · Creació de fanzines express",
    "Customització de samarretes · Laboratori de samples",
    "...i molt més..."
  ]
};
</script>

<template>
  <main class="bg-[#fcda4b] text-[#eb1d2b] font-sans selection:bg-[#eb1d2b] selection:text-[#fcda4b] relative p-6 md:p-12 overflow-hidden min-h-screen">
    
    <div class="relative z-10 max-w-[1600px] mx-auto">
      
      <!-- HEADER SECCIÓN -->
      <div class="border-b-4 border-[#eb1d2b] mb-16 flex justify-between items-end pb-4">
        <h2 class="text-6xl md:text-9xl font-black uppercase leading-[0.8] italic">Cartelera</h2>
        <RouterLink to="/" class="flex flex-col items-end group transition-transform hover:scale-105 active:scale-95">
          <span class="text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Volver a Inicio</span>
          <img 
            src="/imagines/Esclat/Artboard 2_1-8.png" 
            alt="Botón de Inicio" 
            class="w-20 md:w-32 h-auto object-contain"
          >
        </RouterLink>
      </div>

      <!-- LINEUP UNIFICADO -->
      <div class="flex flex-col items-center text-center space-y-16">
        
        <!-- Principales -->
        <section class="max-w-6xl">
          <h3 class="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.8] mb-8">
            {{ lineup.principales }}
          </h3>
        </section>

        <!-- Secundarios -->
        <section class="max-w-5xl">
          <h4 class="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.9]">
            {{ lineup.secundarios }}
          </h4>
        </section>

        <!-- Terciarios -->
        <section class="max-w-4xl space-y-4">
          <p v-for="(linea, idx) in lineup.terciarios" :key="idx" 
            class="text-lg md:text-2xl lg:text-3xl font-bold uppercase leading-none">
            {{ linea }}
          </p>
        </section>

        <!-- Cuaternarios -->
        <section class="max-w-3xl space-y-2">
          <p v-for="(linea, idx) in lineup.cuaternarios" :key="idx" 
            class="text-base md:text-lg lg:text-xl font-bold italic uppercase leading-tight">
            {{ linea }}
          </p>
        </section>

        <!-- ACTIVIDADES -->
        <section class="w-full py-8">
          <div class="space-y-6">
            <p v-for="(linea, idx) in lineup.activitats" :key="idx" 
              class="text-xl md:text-3xl lg:text-4xl font-black italic uppercase leading-none">
              {{ linea }}
            </p>
          </div>
        </section>

        <div class="w-72 h-72 md:w-[30rem] md:h-[30rem] my-12">
            <img src="/imagines/Esclat/RATILLA.png" alt="" class="w-full h-full object-contain">
        </div>

      </div>

      <!-- FOOTER SECCIÓN -->
      <div class="mt-24 border-t-4 border-[#eb1d2b] pt-8 flex justify-between items-center">
        <p class="text-xs font-bold uppercase tracking-widest">Esclat Festival 2026 © València</p>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* Transiciones suaves para el hover del logo */
.RouterLink {
  transition: all 0.3s ease;
}
</style>

<script setup lang="ts">
/**
 * Cartelera.vue - Diseño Brutalista / Vanguardia
 * Layout unificado (sin división por días)
 */

const lineup = {
  principales: "Wilco · Los Planetas · Carolina Durante · Manel · The Divine Comedy · Hoke",
  secundarios: "Adam Green · Alcalá Norte · Eels · El Mató a un Policía Motorizado · La Bien Querida · Ill Pekeño y Ergo Pro",
  terciarios: [
    "Boletus · Eldiablo de Shanghai · Nepal Nepal · L`haine",
    "Rita Payés · Els Amics de les Arts · I'm From Barcelona",
    "Nico Miseria · Maria Arnal"
  ],
  cuaternarios: [
    "La buena Vida · Platz · Mala Gestión",
    "Diego 900 · Luna"
  ],
  activitats: [
    "Taller d'escultura musical · Elaboració d'instruments inusuals",
    "Conferència de idees absurdes · Creació de fanzines express",
    "Customització de samarretes · Laboratori de samples",
    "...i molt més..."
  ]
};
</script>

<template>
  <main class="bg-[#fcda4b] text-[#eb1d2b] font-sans selection:bg-[#eb1d2b] selection:text-[#fcda4b] relative p-6 md:p-12 overflow-hidden min-h-screen">
    
    <div class="relative z-10 max-w-[1600px] mx-auto">
      
      <!-- HEADER SECCIÓN -->
      <div class="border-b-4 border-[#eb1d2b] mb-16 flex justify-between items-end pb-4">
        <h2 class="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">Cartelera</h2>
        <RouterLink to="/" class="flex flex-col items-end group transition-transform hover:scale-105 active:scale-95">
          <span class="text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Volver a Inicio</span>
          <img 
            src="/imagines/Esclat/Artboard 2_1-8.png" 
            alt="Botón de Inicio" 
            class="w-20 md:w-32 h-auto object-contain"
          >
        </RouterLink>
      </div>

      <!-- LINEUP UNIFICADO -->
      <div class="flex flex-col items-center text-center space-y-16">
        
        <!-- Principales -->
        <section class="max-w-6xl">
          <h3 class="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.8] mb-8">
            {{ lineup.principales }}
          </h3>
        </section>

        <!-- Secundarios -->
        <section class="max-w-5xl">
          <h4 class="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.9]">
            {{ lineup.secundarios }}
          </h4>
        </section>

        <!-- Terciarios -->
        <section class="max-w-4xl space-y-4">
          <p v-for="(linea, idx) in lineup.terciarios" :key="idx" 
            class="text-lg md:text-2xl lg:text-3xl font-bold uppercase leading-none">
            {{ linea }}
          </p>
        </section>

        <!-- Cuaternarios -->
        <section class="max-w-3xl space-y-2">
          <p v-for="(linea, idx) in lineup.cuaternarios" :key="idx" 
            class="text-base md:text-lg lg:text-xl font-bold italic uppercase leading-tight">
            {{ linea }}
          </p>
        </section>

        <!-- ACTIVIDADES -->
        <section class="w-full py-8">
          <div class="space-y-6">
            <p v-for="(linea, idx) in lineup.activitats" :key="idx" 
              class="text-xl md:text-3xl lg:text-4xl font-black italic uppercase leading-none">
              {{ linea }}
            </p>
          </div>
        </section>

        <div class="w-72 h-72 md:w-[30rem] md:h-[30rem] my-12">
            <img src="/imagines/Esclat/RATILLA.png" alt="" class="w-full h-full object-contain">
        </div>

      </div>

      <!-- FOOTER SECCIÓN -->
      <div class="mt-24 border-t-4 border-[#eb1d2b] pt-8 flex justify-between items-center">
        <p class="text-xs font-bold uppercase tracking-widest">Esclat Festival 2026 © València</p>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* Transiciones suaves para el hover del logo */
.RouterLink {
  transition: all 0.3s ease;
}
</style>
