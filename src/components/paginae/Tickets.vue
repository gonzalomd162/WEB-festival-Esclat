<script setup lang="ts">
/**
 * Tickets.vue - Diseño Brutalista / Vanguardia
 * Estricto cumplimiento de especificaciones estéticas finales.
 */

const ticketsDia = [
  {
    fecha: "23",
    mes: "/10/26",
    precio: "35€",
    id: "dia-23",
    principales: "Wilco · Los Planetas",
    secundarios: "Adam Green · Alcalá Norte · Eels",
    terciarios: ["Boletus · Eldiablo de Shanghai", "Nepal Nepal · L`haine"]
  },
  {
    fecha: "24",
    mes: "/10/26",
    precio: "35€",
    id: "dia-24",
    principales: "Carolina Durante · Manel",
    secundarios: "El Mató a un Policía Motorizado",
    terciarios: ["Rita Payés"],
    cuaternarios: ["La buena Vida · Platz · Mala Gestión", "Diego 900 · Luna"]
  },
  {
    fecha: "25",
    mes: "/10/26",
    precio: "35€",
    id: "dia-25",
    principales: "The Divine Comedy · Hoke",
    secundarios: "La Bien Querida · Ill Pekeño y Ergo Pro",
    terciarios: ["Els Amics de les Arts · I'm From Barcelona", "Nico Miseria · Maria Arnal"]
  }
];
</script>

<template>
  <main class="bg-[#fcda4b] text-[#E5001A] font-sans selection:bg-[#E5001A] selection:text-[#fcda4b] relative p-6 md:p-12 overflow-hidden min-h-screen">
    <!-- RATILLA de Fondo (Repocisionada a la izquierda y más grande) -->
    

    <div class="relative z-10 max-w-[1600px] mx-auto">
      
      <!-- HEADER SECCIÓN -->
      <div class="border-b-4 border-[#E5001A] mb-12 flex justify-between items-end pb-4">
        <h2 class="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">Tickets</h2>
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
        
        <!-- COLUMNA IZQUIERDA: ENTRADAS POR DÍAS -->
        <section class="lg:col-span-8 flex flex-col">
          <div class="border-t-2 border-[#E5001A]">
            <div v-for="ticket in ticketsDia" :key="ticket.id" 
              class="grid grid-cols-1 md:grid-cols-[180px_1fr_150px] gap-4 md:gap-8 border-b-2 border-[#E5001A] py-10 group transition-all duration-300 hover:bg-[#E5001A] hover:text-[#fcda4b]">
              
              <!-- Col 1: Fecha -->
              <div class="flex flex-col">
                <div class="flex items-baseline gap-1">
                  <span class="text-7xl md:text-8xl font-black tracking-tighter leading-none">{{ ticket.fecha }}</span>
                  <span class="text-2xl md:text-3xl font-black tracking-tighter uppercase">{{ ticket.mes }}</span>
                </div>
                <div class="mt-2 h-1 w-12 bg-current"></div>
                <span class="text-[10px] md:text-xs font-bold uppercase mt-2 tracking-widest">Entrada Individual</span>
              </div>

              <!-- Col 2: Artistas -->
              <div class="flex flex-col justify-center space-y-4">
                <h3 class="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85]">
                  {{ ticket.principales }}
                </h3>
                
                <h4 class="text-xl md:text-2xl font-bold tracking-tighter uppercase opacity-90">
                  {{ ticket.secundarios }}
                </h4>

                <div v-if="ticket.terciarios" class="text-sm md:text-base font-bold uppercase leading-tight max-w-xl opacity-80">
                  <p v-for="(linea, idx) in ticket.terciarios" :key="idx" class="mb-1">{{ linea }}</p>
                </div>

                <div v-if="ticket.cuaternarios" class="text-xs md:text-sm font-bold uppercase leading-tight italic opacity-70">
                  <p v-for="(linea, idx) in ticket.cuaternarios" :key="idx">{{ linea }}</p>
                </div>
              </div>

              <!-- Col 3: Precio y Acción -->
              <div class="flex flex-col items-start md:items-end justify-between py-2">
                <span class="text-5xl md:text-6xl font-black tracking-tighter leading-none">{{ ticket.precio }}</span>
                <button 
                  class="font-hover-alt w-full md:w-auto mt-4 px-6 py-3 bg-transparent text-current text-xl font-black uppercase transition-all duration-200 hover:text-[#fcda4b] group-hover:hover:text-[#fcda4b]"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>

          
          
        </section>

        <!-- COLUMNA DERECHA: ABONO Y UBICACIÓN -->
        <section class="lg:col-span-4 flex flex-col space-y-12">
          
          <!-- Card Abono -->
          <div class="border-[6px] border-[#E5001A] p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden bg-[#E5001A] text-[#fcda4b]">
            <div class="relative z-10">
              <div class="flex justify-between items-start mb-10">
                <h3 class="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.8] italic">
                  Abonament <br> Festival
                </h3>
              </div>
              
              <ul class="space-y-4 text-sm md:text-base font-bold uppercase tracking-tight">
                <li class="flex items-center gap-3">
                  <span class="w-4 h-4 bg-[#fcda4b]"></span>
                  Accés als 3 dies de festival
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-4 h-4 bg-[#fcda4b]"></span>
                  Zona preferent i parking
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-4 h-4 bg-[#fcda4b]"></span>
                  Welcome pack edició limitada
                </li>
              </ul>
            </div>

            <div class="relative z-10 flex flex-col items-start gap-4 mt-12 pt-8 border-t-2 border-[#fcda4b]/30">
              <div class="flex items-baseline gap-2">
                <span class="text-8xl md:text-9xl font-black tracking-tighter leading-none">75€</span>
                <span class="text-xl font-bold uppercase">IVA inc.</span>
              </div>
              <button 
                class="font-hover-alt w-full py-5 text-3xl font-black uppercase bg-[#fcda4b] text-[#E5001A] hover:bg-transparent hover:text-[#fcda4b] transition-all duration-200"
              >
                Comprar Abono
              </button>
            </div>
          </div>

          <!-- INFO UBICACIÓN / DATOS TÉCNICOS -->
          <div class="space-y-8 bg-[#E5001A]/5 p-6 border-l-8 border-[#E5001A]">
            <div>
              <span class="text-xs font-bold uppercase block mb-2 tracking-[0.2em] opacity-70">Ubicació Principal</span>
              <span class="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] block">
                Les naus <br> València
              </span>
            </div>
            
            <div class="grid grid-cols-2 border-t-2 border-[#E5001A] pt-6 gap-6">
              <div>
                <span class="text-[10px] font-bold uppercase block opacity-60">Obertura Portes</span>
                <span class="text-xl font-black uppercase">16:00H</span>
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase block opacity-60">Tancament</span>
                <span class="text-xl font-black uppercase">03:30H</span>
              </div>
            </div>

            <div class="pt-4 border-t border-[#E5001A]/20">
              <p class="text-xs font-bold uppercase leading-tight">
                * Aforament limitat. Es recomana la compra anticipada per evitar cues. L'organització se reserva el dret d'admissió.
              </p>
            </div>
          </div>

        </section>

      </div>
    </div>
  </main>
</template>

<style scoped>
/* Las fuentes ya vienen definidas en el tema global de Tailwind 4 / style.css */
</style>

