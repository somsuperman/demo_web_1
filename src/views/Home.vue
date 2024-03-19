<template>
  <NavBock />
  <main class="max-w-[1260px] mx-auto py-8">
    <section class="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto">
      <h1 class="text-white text-5xl sm:text-7xl max-w-screen-md mt-6 sm:mt-24 leading-tight mb-8 sm:mb-12">
        Your gateway to pioneering crypto solutions
      </h1>
      <router-link to="/services" class="group test hover:scale-110 inline-block px-16 py-5 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-2xl text-white text-xl transition-all duration-200">
        <span class="group-hover:scale-75">
          Our services
        </span>
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
  name: "HomeView",
  components: {
    NavBock,
    CarouselBlock,
    FooterBlock,
    WhatWeDoBlock,
    Benefits,
  },
};
</script>

<style lang="scss">
.route-home {
  .hero-bg {
    @apply before:-z-10 before:absolute before:h-full before:bg-cover before:bg-center before:bg-bottom before:sm:bg-top before:max-h-[800px] before:md:max-h-[700px] before:lg:max-h-[800px] before:xl:max-h-[900px] before:left-0 before:right-0 before:bg-[url('img/home/hero-bg-m.jpg')] before:sm:bg-[url('img/home/hero-bg.jpg')] before:lg:bg-[-10rem_top] before:xl:bg-top before:md:bg-cover before:bg-no-repeat before:lg:bg-cover before:xl:bg-cover before:2xl:bg-contain;
  }
}
</style>
