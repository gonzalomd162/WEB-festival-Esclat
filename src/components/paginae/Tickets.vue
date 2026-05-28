<script setup lang="ts">
type TicketDia = {
  fecha: string;
  mes: string;
  precio: string;
  id: string;
  principales: string;
  secundarios: string;
  terciarios: string[];
  cuaternarios?: string[];
};

const ticketsDia: TicketDia[] = [
  {
    fecha: "23",
    mes: "d'octubre",
    precio: "10€",
    id: "dia-23",
    principales: "Wilco · Los Planetas",
    secundarios: "Adam Green · Alcalá Norte · Eels",
    terciarios: ["Boletus · Eldiablo de Shanghai", "Nepal Nepal · L`haine"],
  },
  {
    fecha: "24",
    mes: "d'octubre",
    precio: "10€",
    id: "dia-24",
    principales: "Carolina Durante · Manel",
    secundarios: "El Mató a un Policía Motorizado",
    terciarios: ["Rita Payés"],
    cuaternarios: ["La buena Vida · Platz · Mala Gestión", "Diego 900 · Luna"],
  },
  {
    fecha: "25",
    mes: "d'octubre",
    precio: "10€",
    id: "dia-25",
    principales: "The Divine Comedy · Hoke",
    secundarios: "La Bien Querida · Ill Pequeño y Ergo Pro",
    terciarios: ["Els Amics de les Arts · I'm From Barcelona", "Nico Miseria · Maria Arnal"],
  },
];
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-6 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-12">
    <div class="relative z-10 mx-auto max-w-[1600px]">
      <div class="mb-12 flex items-end justify-between pb-4">
        <h2 class="text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">Tickets</h2>
        <RouterLink to="/" class="group flex flex-col items-end transition-transform hover:scale-105 active:scale-95">
          <span class="mb-1 text-[10px] font-black uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">Volver a Inicio</span>
          <img
            src="/imagines/Esclat/Artboard 2_1-8.png"
            alt="Botón de Inicio"
            class="h-auto w-20 object-contain md:w-32"
          >
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <section class="flex flex-col lg:col-span-8">
          <div>
            <div
              v-for="ticket in ticketsDia"
              :key="ticket.id"
              class="group -mx-4 grid grid-cols-1 gap-4 px-4 py-10 transition-all duration-300 hover:bg-[#eb1d2b] hover:text-[#fcda4b] md:-mx-6 md:grid-cols-[180px_1fr_150px] md:gap-8 md:px-6 lg:-mx-8 lg:px-8"
            >
              <div class="flex flex-col">
                <div class="flex items-baseline gap-1">
                  <span class="text-7xl font-black leading-none tracking-tighter md:text-8xl">{{ ticket.fecha }}</span>
                  <span class="text-sm font-black tracking-tighter md:text-base">{{ ticket.mes }}</span>
                </div>
              </div>

              <div class="flex flex-col justify-center space-y-4">
                <h3 class="text-4xl font-black uppercase leading-[0.98] tracking-tighter md:text-5xl">
                  {{ ticket.principales }}
                </h3>

                <h4 class="text-xl font-bold uppercase tracking-tighter opacity-90 md:text-2xl">
                  {{ ticket.secundarios }}
                </h4>

                <div class="max-w-xl text-sm font-bold uppercase leading-tight opacity-80 md:text-base">
                  <p v-for="(linea, idx) in ticket.terciarios" :key="idx" class="mb-1">{{ linea }}</p>
                </div>

                <div v-if="ticket.cuaternarios" class="text-xs font-bold uppercase italic leading-tight opacity-70 md:text-sm">
                  <p v-for="(linea, idx) in ticket.cuaternarios" :key="idx">{{ linea }}</p>
                </div>
              </div>

              <div class="flex flex-col items-start justify-between py-2 md:items-end">
                <span class="text-5xl font-black leading-none tracking-tighter md:text-6xl">{{ ticket.precio }}</span>
                <button
                  class="font-hover-alt mt-4 w-full bg-transparent px-6 py-3 text-xl font-black uppercase text-current transition-all duration-200 hover:text-[#fcda4b] group-hover:hover:text-[#fcda4b] md:w-auto"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="flex flex-col space-y-12 lg:col-span-4">
          <div class="relative flex min-h-[500px] flex-col justify-between overflow-hidden border-[6px] border-[#eb1d2b] bg-[#eb1d2b] p-8 text-[#fcda4b]">
            <div class="relative z-10">
              <div class="mb-10 flex items-start justify-between">
                <h3 class="text-5xl font-black uppercase leading-[0.98] tracking-tighter md:text-6xl">
                  ABONAMENT <br> FESTIVAL
                </h3>
              </div>

              <ul class="space-y-4 text-sm font-bold uppercase tracking-tight md:text-base">
                <li class="flex items-center gap-3">
                  <span class="h-4 w-4 bg-[#fcda4b]"></span>
                  Accés als 3 dies de festival
                </li>
                <li class="flex items-center gap-3">
                  <span class="h-4 w-4 bg-[#fcda4b]"></span>
                  Zona preferent i parking
                </li>
                <li class="flex items-center gap-3">
                  <span class="h-4 w-4 bg-[#fcda4b]"></span>
                  Welcome pack edició limitada
                </li>
              </ul>
            </div>

            <div class="relative z-10 mt-12 flex flex-col items-start gap-4 border-t-2 border-[#fcda4b]/30 pt-8">
              <div class="flex items-baseline gap-2">
                <span class="text-8xl font-black leading-none tracking-tighter md:text-9xl">75€</span>
                <span class="text-xl font-bold uppercase">IVA inc.</span>
              </div>
              <button
                class="font-hover-alt w-full bg-[#fcda4b] py-5 text-3xl font-black uppercase text-[#eb1d2b] transition-all duration-200 hover:bg-transparent hover:text-[#fcda4b]"
              >
                Comprar Abonament
              </button>
            </div>
          </div>

          <div class="space-y-8 border-l-8 border-[#eb1d2b] bg-[#eb1d2b]/5 p-6">
            <div>
              <span class="mb-2 block text-xs font-bold uppercase tracking-[0.2em] opacity-70">Ubicació Principal</span>
              <span class="block text-4xl font-black uppercase leading-[0.85] tracking-tighter md:text-6xl">
                Les naus <br> València
              </span>
            </div>

            <div class="grid grid-cols-2 gap-6 border-t-2 border-[#eb1d2b] pt-6">
              <div>
                <span class="block text-[10px] font-bold uppercase opacity-60">Obertura Portes</span>
                <span class="text-xl font-black uppercase">16:00H</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold uppercase opacity-60">Tancament</span>
                <span class="text-xl font-black uppercase">03:30H</span>
              </div>
            </div>

            <div class="border-t border-[#eb1d2b]/20 pt-4">
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
