<script lang="ts" setup>
import { Button } from '@/components/ui/button'

</script>


<template>

  <div class="bg-[rgb(21,25,52)] h-screen text-white font-sans text-center w-screen flex flex-col justify-center items-center gap-12 fixed overflow-hidden">

    <img class="absolute opacity-25" src="/imagines/tonitrui.png" alt="">


    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
        <span class="text-[rgb(24,182,246)]">Diseño</span> Web y 
        <br>
        Apps <span class="text-[rgb(24,182,246)]">interactivas</span>
    
    </h1>

    <p class="text-lg md:text-2xl transition-all">

      Aprendiendo a crear aplicaciones web
    </p>

   <div class="z-10">

    <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgb(24,182,246,0.7)] transition-all ">
        <routerLink to = "/indecision">si o no</routerLink>

    </Button>
     <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgb(24,182,246,0.7)] transition-all ">
        <routerLink to = "/batman">Batman</routerLink>

    </Button>
     <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgb(24,182,246,0.7)] transition-all ">
        <routerLink to = "/simpsons">Simpson</routerLink>

    </Button>
    <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgb(24,182,246,0.7)] transition-all ">
        <a href="https://poliformat.upv.es/portal/site/GRA_13803_2025/tool/4ff03f34-3b98-4b9b-8cd8-3e171f5e8127?panel=Main">UPV</a>

    </Button>
    

     </div>
   </div>
    

       <RouterLink to=" /batman">Batman</RouterLink> <!-- //para ir a batman -->
    
   
</template>

<style scoped>



</style>