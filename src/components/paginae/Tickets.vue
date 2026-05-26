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
  <main class="bg-[#fcda4b] text-[#E5001A] font-sans selection:bg-[#E5001A] selection:text-[#fcda4b] relative p-6 md:p-12">
    <!-- RATILLA de Fondo (Un poco más grande y más a la izquierda) -->
    <img 
      src="/imagines/Esclat/RATILLA.png" 
      alt="" 
      class="absolute right-[2%] bottom-[-5%] w-[45vw] md:w-[35vw] pointer-events-none select-none -scale-x-100 z-0 opacity-80"
    >

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-10 max-w-[1600px] mx-auto">
      
      <!-- COLUMNA IZQUIERDA: ENTRADAS POR DÍAS -->
      <section class="flex flex-col justify-start">
        <div class="space-y-12">
          <div v-for="ticket in ticketsDia" :key="ticket.id" class="group">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-2 border-[#E5001A] pb-6">
              <!-- Bloque de Texto -->
              <div class="flex-1">
                <div class="flex items-baseline gap-1 mb-2">
                  <span class="text-7xl md:text-8xl font-black tracking-tighter leading-none">{{ ticket.fecha }}</span>
                  <span class="text-2xl md:text-3xl font-black tracking-tighter">{{ ticket.mes }}</span>
                </div>
                
                <h3 class="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-1 leading-tight">
                  {{ ticket.principales }}
                </h3>
                
                <h4 class="text-xl md:text-2xl font-medium tracking-tighter uppercase mb-4 opacity-90">
                  {{ ticket.secundarios }}
                </h4>

                <div v-if="ticket.terciarios" class="flex justify-start text-left mb-2">
                  <div class="text-sm md:text-base font-bold uppercase leading-tight">
                    <p v-for="(linea, idx) in ticket.terciarios" :key="idx">{{ linea }}</p>
                  </div>
                </div>

                <div v-if="ticket.cuaternarios" class="flex justify-start text-left">
                  <div class="text-xs md:text-sm font-bold uppercase leading-tight italic">
                    <p v-for="(linea, idx) in ticket.cuaternarios" :key="idx">{{ linea }}</p>
                  </div>
                </div>
              </div>

              <!-- Bloque Precio/Compra -->
              <div class="flex flex-col items-end gap-2 shrink-0">
                <span class="text-4xl md:text-5xl font-black tracking-tighter">{{ ticket.precio }}</span>
                <button 
                  class="font-hover-alt px-6 py-2 text-xl font-black uppercase hover:text-[#E5001A] transition-colors duration-200"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <p class="text-xl font-black uppercase tracking-tighter pt-4">
            Mes informació en www.esclat.es
          </p>
        </div>
      </section>

      <!-- COLUMNA DERECHA: ABONO Y UBICACIÓN -->
      <section class="flex flex-col justify-center">
        <div class="space-y-12 md:space-y-20">
          <!-- Abono General (Compactado) -->
          <div class="flex flex-col items-start space-y-6">
            <h3 class="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              Abonament per a <br> tot el festival
            </h3>
            
            <div class="flex items-end gap-6">
              <span class="text-8xl md:text-[9rem] font-black tracking-tighter leading-none">75€</span>
              <button 
                class="font-hover-alt px-10 py-4 text-2xl md:text-3xl font-black uppercase mb-2 hover:text-[#E5001A] transition-colors duration-200"
              >
                Comprar
              </button>
            </div>
          </div>

          <!-- Ubicación -->
          <div class="pt-8">
            <span class="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Les naus <br> (València)
            </span>
          </div>

          <!-- Información adicional o cierre -->
          <div class="pt-4 max-w-sm">
            <p class="text-sm font-bold uppercase leading-tight">
              Entrades limitades. <br>
              Abonament vàlid per a tots los dies.
            </p>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<style scoped>
.font-sans {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}
</style>
