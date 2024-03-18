<template>

  <NavBock />

  <main class="max-w-[1260px] mx-auto py-8">
    <section class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto">


      <h1 class="text-white text-5xl sm:text-7xl max-w-screen-md mt-6 sm:mt-24 leading-tight  mb-8 sm:mb-12">
        Your gateway to pioneering crypto solutions
      </h1>


      <router-link to="/services"
        class="group test hover:scale-110 inline-block px-16 py-5 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-2xl text-white text-xl transition-all duration-200 ">
        <span class="group-hover:scale-75">Our services</span>
      </router-link>






    </section>



    <CarouselBlock />
    <Benefits />


    <WhatWeDoBlock />


  </main>


  <FooterBlock />


</template>

<script>
import NavBock from "../components/NavBlock.vue";
import CarouselBlock from "../components/CarouselBlock.vue";
import FooterBlock from "../components/FooterBlock.vue";
import WhatWeDoBlock from "../components/WhatWeDoBlock.vue";
import Benefits from "../components/BenefitsBlock.vue";

export default {
  name: 'HomeView',
  components: {
    NavBock,
    CarouselBlock,
    FooterBlock,
    WhatWeDoBlock,
    Benefits
  }
};
</script>


<style>
.route-home {
  @apply bg-no-repeat bg-contain bg-[url('img/home/hero-bg-m.jpg')] sm:bg-[url('img/home/hero-bg.jpg')]
}
</style>