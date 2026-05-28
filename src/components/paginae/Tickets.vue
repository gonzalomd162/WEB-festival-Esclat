<script setup lang="ts">
type TicketDia = {
  fecha: string;
  mes: string;
  precio: string;
  id: string;
  principales: string[];
  secundarios: string[];
  terciarios: string[];
  cuaternarios?: string[];
};

const ticketsDia: TicketDia[] = [
  {
    fecha: "23",
    mes: "d'octubre",
    precio: "Gratis",
    id: "dia-23",
    principales: ["Wilco", "Los Planetas"],
    secundarios: ["Adam Green", "Alcalá Norte", "Eels"],
    terciarios: ["Boletus", "Eldiablo de Shanghai", "Nepal Nepal", "L`haine"],
  },
  {
    fecha: "24",
    mes: "d'octubre",
    precio: "Gratis",
    id: "dia-24",
    principales: ["Carolina Durante", "Manel"],
    secundarios: ["El Mató a un Policía Motorizado"],
    terciarios: [],
    cuaternarios: ["La buena Vida", "Platz", "Mala Gestión", "Diego 900", "Luna", "Rita Payés"],
  },
  {
    fecha: "25",
    mes: "d'octubre",
    precio: "Gratis",
    id: "dia-25",
    principales: ["The Divine Comedy", "Hoke"],
    secundarios: ["La Bien Querida", "Ill Pequeño y Ergo Pro"],
    terciarios: ["Els Amics de les Arts", "I'm From Barcelona", "Nico Miseria", "Maria Arnal"],
  },
];

const artistButtonClass = "inline-block cursor-pointer hover:italic text-left uppercase";
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#fcda4b] p-4 font-sans text-[#eb1d2b] selection:bg-[#eb1d2b] selection:text-[#fcda4b] md:p-8">
    <div class="relative z-10 mx-auto max-w-[1700px] p-8 md:p-16 lg:p-24">
      <div class="relative z-10">
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
                class="group -mx-4 grid grid-cols-1 gap-4 px-4 py-10 transition-all duration-300 md:-mx-6 md:grid-cols-[240px_1fr_150px] md:gap-12 md:px-6 lg:-mx-8 lg:px-8"
              >
                <div class="flex flex-col">
                  <div class="flex items-baseline gap-2">
                    <span class="text-8xl font-black leading-none tracking-tighter md:text-9xl">{{ ticket.fecha }}</span>
                    <span class="text-sm font-black tracking-tighter md:text-base">{{ ticket.mes }}</span>
                  </div>
                </div>

                <div class="flex flex-col justify-center space-y-4">
                  <h3 class="text-4xl font-black uppercase leading-[0.98] tracking-tighter md:text-5xl">
                    <template v-for="(artista, idx) in ticket.principales" :key="artista">
                      <button type="button" :class="artistButtonClass">{{ artista }}</button>
                      <span v-if="idx < ticket.principales.length - 1" class="mx-2">·</span>
                    </template>
                  </h3>

                  <h4 class="text-xl font-bold uppercase tracking-tighter opacity-90 md:text-2xl">
                    <template v-for="(artista, idx) in ticket.secundarios" :key="artista">
                      <button type="button" :class="artistButtonClass">{{ artista }}</button>
                      <span v-if="idx < ticket.secundarios.length - 1" class="mx-2">·</span>
                    </template>
                  </h4>

                  <div class="max-w-xl text-sm font-bold uppercase leading-tight opacity-80 md:text-base">
                    <template v-for="(artista, idx) in ticket.terciarios" :key="artista">
                      <button type="button" :class="artistButtonClass">{{ artista }}</button>
                      <span v-if="idx < ticket.terciarios.length - 1" class="mx-2">·</span>
                    </template>
                  </div>

                  <div v-if="ticket.cuaternarios" class="text-xs font-bold uppercase leading-tight opacity-70 md:text-sm">
                    <template v-for="(artista, idx) in ticket.cuaternarios" :key="artista">
                      <button type="button" :class="artistButtonClass">{{ artista }}</button>
                      <span v-if="idx < ticket.cuaternarios!.length - 1" class="mx-2">·</span>
                    </template>
                  </div>
                </div>

                <div class="flex flex-col items-start justify-between py-2 md:items-end">
                  <span class="text-5xl font-black leading-none tracking-tighter md:text-6xl">{{ ticket.precio }}</span>
                  <button
                    class="font-hover-alt mt-4 w-full bg-[#eb1d2b] px-6 py-3 text-xl font-black text-[#fcda4b] border-4 border-[#eb1d2b] transition-all duration-200 hover:italic md:w-auto"
                  >
                    reserva
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="flex flex-col space-y-12 lg:col-span-4">
            <div class="relative flex min-h-[650px] flex-col justify-between p-10 text-[#eb1d2b]">
              <div class="relative z-10">
                <div class="mb-10 flex items-start justify-between">
                  <h3 class="text-5xl font-black uppercase leading-[0.98] tracking-tighter md:text-6xl">
                    ABONAMENT <br> FESTIVAL
                  </h3>
                </div>

                <ul class="space-y-4 text-sm font-bold tracking-tight md:text-base">
                  <li class="flex items-center gap-3">
                    <span class="h-4 w-4 bg-[#eb1d2b]"></span>
                    Accés als 3 dies de festival
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="h-4 w-4 bg-[#eb1d2b]"></span>
                    Zona preferent i parking
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="h-4 w-4 bg-[#eb1d2b]"></span>
                    Welcome pack edició limitada
                  </li>
                </ul>
              </div>

              <div class="relative z-10 mt-12 flex flex-col items-start gap-6 pt-8 -ml-1 md:-ml-2">
                <div class="flex items-baseline gap-2">
                  <span class="text-8xl font-black leading-none tracking-tighter md:text-9xl">Gratis</span>
                </div>
                <button
                  class="font-hover-alt w-full max-w-sm bg-[#eb1d2b] py-5 text-3xl font-black text-[#fcda4b] transition-all duration-200 hover:italic text-center"
                >
                  Reserva abonament
                </button>
              </div>
            </div>
          </section>
        </div>

        <div class="mt-20 flex flex-col gap-6 md:flex-row md:items-start md:justify-start md:gap-16">
          <div class="min-w-0">
            <span class="mb-3 block text-sm font-black tracking-widest opacity-70">Ubicació principal</span>
            <span class="block text-4xl font-black leading-[0.85] tracking-tighter md:text-6xl">
              Les <br>
              naus <br>
              Valencia
            </span>
          </div>

          <div>
            <span class="mb-3 block text-sm font-black tracking-widest opacity-70">Obertura de portes</span>
            <span class="text-4xl font-black md:text-6xl leading-none">16:00H</span>
          </div>

          <div>
            <span class="mb-3 block text-sm font-black tracking-widest opacity-70">Tancament</span>
            <span class="text-4xl font-black md:text-6xl leading-none">03:30H</span>
          </div>

          <p class="max-w-[20rem] text-sm font-bold uppercase leading-tight opacity-75 md:mt-1">
            * Aforament limitat. Es recomana la reserva anticipada per evitar cues. L'organitzacio se reserva el dret d'admissio.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
